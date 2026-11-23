# Browser acceptance and screenshot handoff

This was the capture/acceptance plan. A coordinating operator subsequently supplied four real new-example captures and selected desktop checks; see `../docs/VALIDATION.md` for completed evidence and remaining gaps. Do not treat every task below as passed merely because some captures now exist.

## Launch
Serve the package root, not a file URL:
```sh
python3 -m http.server 4186 --bind 127.0.0.1 --directory .
```
- `http://localhost:4186/examples/thermal.html`
- `http://localhost:4186/examples/queue.html`
These addresses point at whichever computer runs that command. A service on an agent box is not accessible via a user's own localhost without an approved preview/tunnel.

## Shared inspection checklist
Confirm the loading overlay disappears, real mesh geometry and shadows render, no runtime errors appear, and network requests are local only. At 1440×1000 or 1600×1100 capture the full application; record the actual viewport. Use Overview first. Check object picking and the corresponding entity button highlight/details; inspect keyboard focus. Drag orbit, scroll zoom, use all three presets. Pause for 2 wall seconds and confirm time, metrics, state-bearing effects and geometry freeze. +1 second must advance exactly one simulated second and stay paused. Reset returns the deterministic trial. Change parameters and verify documented live/reset behavior. At 390px width, controls and scene should remain usable; report overlap/clipping instead of calling it passed. Check reduced motion suppresses thermal dots. Do not infer performance from one frame.

## Exact-time controls
Every new example has **Reset paused** and **Run to time, then pause**. The latter advances the real model with the normal fixed step; it cannot seek backward or fabricate a snapshot. Choose a target ≥ current time. For an exact fresh trial, select the preset, click Reset paused, enter the target seconds and click Run to time. Inspect clock and export state to confirm the exact time.

## Thermal hero and controlled pair
1. Select Baseline → Reset paused → target 25 → Run to time. Select Body 1; Overview view. Capture both ceramic blocks, connector, temperature labels, parameters and entity energy details. This gives a non-equilibrium hero with visible color contrast.
2. Baseline → Reset paused → target 50 → Run to time: expect 61.036/38.964 °C at 50 s, equilibrium 50 °C. Capture.
3. Intervention → Reset paused → target 50 → Run to time: expect 54.060/45.940 °C, same equilibrium. Use the same camera and viewport for a genuine paired screenshot.
4. Boundary G=0 at 50 s leaves 80/20 °C. Body 1 capacity 4000 J/K changes equilibrium to 60 °C. Conductance changes live, capacity starts a new trial. Inspect the energy residual near floating-point zero.

## Queue hero and matched mechanism pair
1. Baseline → Reset paused → target 20 → Run to time → select Worker 1. Capture the complete process island, visible backlog, real task ID and capacity/load metrics. Use Overview or Close depending on label legibility, without cutting off the waiting platform.
2. Exact pair: Baseline → Reset paused → target 10 → Run to time gives 10 arrivals,4 completed,5 waiting,1 busy. Intervention → Reset paused → target 10 → Run to time gives 10 arrivals,8 completed,0 waiting,2 busy. Same camera and viewport. Inspector text provides conserved counts.
3. Zero-arrival Boundary renders idle workers and zero tasks. With arrival rate 4, one worker, service time 2, Reset paused then Run to 60 s should exceed 80 waiting. Verify explicit shown/total/overflow disclosure and preserved model counts.

## Reference traffic shots (provided separately)
Use the approved stable release, network overview and entity/incident close-up. Preserve caveats about teaching simulation, single-vehicle reservation, manual demonstration, and disconnected model/devices. Several traffic views are not multiple business domains. Source screenshots require clearance and provenance; this package bundles none.

## Evidence to return
Screenshot file paths; exact artifact revision/checksum; actual viewport/device scale; config; simulation time; selected entity ID; actions tested; pass/fail/unknown; console/network observations. Return failures as failures, not promotional assets.
