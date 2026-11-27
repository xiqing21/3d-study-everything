# Sandbox visual baseline

A tested starting point for scenes whose subject reads best as a **physical desk model**: a bounded site, a plinth, a plan-view block district, machines arranged on a base plate. Use it when the metaphor is "a model of the thing you can walk around", not when the subject needs photoreal terrain, flow fields, or volumetric media.

Numbers below are measured from one shipped single-file build (three.js r170, ACES tone mapping, 1600×960 viewport, DPR 1.35). Treat them as a baseline to test against, not as fixed truth.

## 1. Composition

- **One base slab**, everything sits on it. Give it a visible thickness and a bevelled edge (`ExtrudeGeometry` with `bevelSize ≈ 0.6`, `bevelThickness ≈ 1.2`) instead of a flat plane; the plinth is most of the "it looks like a real model" impression.
- Ground plane far below and slightly darker, so the slab reads as an object floating in space.
- Site extents roughly `2.2×` the interesting core, and a slow fog (`near = 1.4× R`, `far = 3× R`, where `R` is the default orbit radius) to fade the rim without hiding the core.
- Keep the phenomenon at the visual centre; the slab edge should fall outside the default framing so the learner never mistakes the rim for a boundary of the mechanism.

## 2. Palette

Muted building materials, one accent hue reserved for state. Do not colour-code by category if the categories also change over time.

| Role | Hex | Note |
| --- | --- | --- |
| Sky / fog | `#eef2f5` | cool near-white, not pure white |
| Ground | `#f3f6f8` | |
| Slab top | `#e3e8ea` | |
| Road / channel | `#5f6a74` | clearly darker than slab |
| Pavement | `#e9e8de` | |
| Curb | `#d7d5c9` | |
| Planting | `#cfdcbf` | |
| Facades | `#e6e3d7` `#b9c9d6` `#e8d5b9` `#d6d4db` `#ccd5cb` | rotate, never one flat colour |
| Window glass | `#6c8fa0` | plus warm emissive at night |
| Lane mark | `#f2efe3` | |
| Centre dash | `#e8d498` | |
| State: go / warn / stop | `#6dc997` `#efbf4f` `#ec6961` | |
| Selection | `#2b6deb` | ring + dashed path |

Rule of thumb: ≤ 3 hues carry meaning; everything else is neutral. If two states differ only in hue, add a shape or motion cue as well.

## 3. Lighting

Three lights, one shadow caster. High-key, low-contrast; the look collapses if the sun is cranked.

```js
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.02;
renderer.outputColorSpace = THREE.SRGBColorSpace;

hemi = new THREE.HemisphereLight('#eef6ff', '#c9c2ac', 1.45);   // sky / bounce
sun  = new THREE.DirectionalLight('#fff2db', 1.95);             // casts shadow
sun.position.set(-95, 150, 70);
fill = new THREE.DirectionalLight('#cfe0ff', 0.45);             // opposite side
```

- `sun.shadow.mapSize = 2048`, ortho frustum sized to the slab (±190 on a 660-unit site), `normalBias ≈ 0.05`, `bias ≈ -0.0002`, `radius ≈ 2.5`.
- Shadow only for solids thicker than ~0.4 units; thin decals receive but never cast.
- Night mode: `hemi 0.55`, `sun 0.9` with a cool tint `#a9c0e8`, windows to `emissiveIntensity ≈ 1.6`, lamp heads lit, exposure ~1.0. Swap it as one call, not by fading every material.

## 4. Camera

Perspective `fov 37`, `near 1`, `far 1600`. Orbit state is `{azimuth, elevation, radius, target}` with critically-damped lerp (`k = 1 - exp(-5·dt)`), never instant snaps.

| Preset | az | el | r | Use |
| --- | --- | --- | --- | --- |
| Overview | 0.98 | 0.55 | 372 | default framing, whole site |
| Plan | π/2 | 1.28 | 330 | top-down reading of layout |
| Street | 1.60 | 0.16 | 78 | ground-level, shows height and distance |

- Clamp elevation `0.12 … 1.32`, radius `45 … 620`; wheel zoom `±10 %` per notch.
- Drag rotates, `Shift`-drag pans in the ground plane; a click counts as picking only if the pointer moved `< 6 px` and released within `400 ms`.
- Keep the target near the phenomenon's centroid, not the slab centre, when the interesting area is off-centre.

## 5. Geometry and materials

- **Windows**: one `InstancedMesh` of a single quad per facade band. Collect all transforms first, then one draw call. `side: DoubleSide` avoids the "one facade has no windows" bug from mirrored normals.
- **Vehicles / repeated props**: build one template group per shape once, `clone(true)` per instance, share materials, clone only the material that changes per instance (brake lamps).
- **Props** (trees, lamps, benches): `InstancedMesh` with per-instance scale jitter; three sizes are enough.
- **Decals** (lanes, arrows, zebra, stop lines) are `ShapeGeometry`/thin boxes at `y ≈ 0.14` above the surface — cheaper and crisper than textures.
- Merge static geometry per material when counts exceed a few hundred; target < 120 draw calls for a district of this size.
- `MeshStandardMaterial` with `roughness 0.85–0.9`, `metalness 0.02`; reserve gloss (`roughness ≤ 0.45`, some `metalness`) for glass and vehicle bodies.

## 6. Labels

Canvas-texture sprites, white rounded card + short label, `scale ≈ 19 × 9.1` world units, placed at `y ≈ 8.5` above the slab and offset toward the rim. Keep them out of the centre of the phenomenon: a label over the thing being explained hides the thing.

## 7. State feedback that agrees with the model

- Signal bulbs: dark `#2a3843` when off, lit colour + `emissiveIntensity ≈ 2.6` when on. Off-bulbs must be visibly unlit, not just darker.
- Queue / congestion: a ground-hugging translucent strip whose length is driven by the model's queue length, not by a timer.
- Brake state: swap base material colour and raise emissive when speed drops below a threshold that the model itself uses.
- Selection: ring on the ground plus persistent detail panel; selection survives motion while the entity exists, and clears with a reason when it leaves.

## 8. Single-file packaging (offline)

A CDN `import()` makes the page dependent on one host being reachable. For a deliverable that must open anywhere, inline the engine:

```html
<script id="engine" type="text/plain">/* three.module.min.js */</script>
<script type="module">
  const src = document.getElementById('engine').textContent;
  const THREE = await import(URL.createObjectURL(new Blob([src], {type: 'text/javascript'})));
</script>
```

- Pin the exact version; record it in the delivery report.
- Do **not** use an `importmap` for a bare `three` specifier in a single-file build: publishers that crawl local dependencies treat the bare name as a missing file and warn (or break).
- Cost: `three.module.min.js` ≈ 690 KB raw, ≈ 200 KB gzipped. Disclose the size if the host has limits.
- Verify the source contains no `</script` before embedding.

## 9. Traps that cost a whole review round

- `renderer.setSize(w, h, false)` leaves the canvas without CSS size: the drawing buffer (DPR × viewport) overflows the container and the scene appears off-centre and cropped. Pass `true`, or set `canvas.style.width/height` explicitly.
- Sprites and fog scale with world units, not pixels: a label that looks fine in the overview fills the frame in the street preset.
- Resize before the first frame: read `clientWidth/clientHeight` after the canvas is attached.
- Very bright hemisphere + high exposure washes every facade to the same white; keep the sum of light intensities under ~4 with ACES.

## 10. Acceptance

- Overview, plan and street presets each show the phenomenon without panel occlusion at 1600×960 and 1440×900.
- Picking works at all three presets, including through overlapping transparent decals.
- Day and night mode preserve the same state, only the lighting changes.
- Real screenshot at each preset; record viewport, DPR, preset, simulation time and build revision.
- This baseline is a visual starting point. It proves nothing about mechanism correctness, performance on low-end GPUs, or teaching effectiveness; those need their own evidence.
