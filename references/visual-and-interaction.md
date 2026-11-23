# A scene designed to explain

## Visual direction
Choose an original metaphor and palette grounded in the subject. A thermal lab might use ceramic blocks on a graphite measurement bed; a service lab might use a cream-and-indigo process island. Do not mechanically reskin the same traffic intersection or imitate a named creator's signature.

Use a clear focal structure, matte low-poly geometry, restrained saturated accents for state, legible scale, a calm background and readable silhouettes. Prefer a 3/4 overview or orthographic inspection view; distinguish perspective and orthographic projections accurately. Shadows explain height, not just decoration. Keep UI high-contrast with generous spacing.

## Object/DOM contract
Every selectable object has a stable model ID. Picking selects that same ID in the DOM; selecting a row focuses/highlights the same object. Selection survives motion while the object exists; removal clears selection with a reason. Provide details with state, units, causal explanation and uncertainty. A successful click alone does not prove the selected object is the intended one.

## Core interaction
- Obvious pause/resume, reset, speed and bounded parameter controls.
- Camera presets plus pointer navigation; keyboard-accessible alternatives to drag and picking.
- State feedback that persists long enough to read. Labels are not color-only.
- Predict → manipulate → observe → explain experiment cards and helpful boundary cases.
- Parameter changes document whether they apply live or start a new trial.
- Mobile panels do not obscure the experiment. Browser-native inputs retain focus and keyboard semantics.

## Runtime quality
Cap device pixel ratio, reuse materials/geometries and instance repeated objects when needed. Bound history, particle counts and computational work. Dispose removed resources. Do not create another canvas or animation loop on every mode switch. Freeze meaning-bearing effects with simulation time. Reduced motion suppresses ornamental animation but must not falsify state.

WebGL context creation and loss must produce an explicit accessible message. Performance claims require a measured viewport/device/duration. A CPU geometry test or HTTP success cannot prove an acceptable frame rate.

## Screenshot acceptance
Real captures only. Target overview 1600×1000 or 1440×900, object detail, and matched before/after with readable controls, legend, time and key metrics. Record actual viewport and device scale; avoid pretending a requested size was achieved. No fabricated KPI overlays, hidden caveats, or composited scenes presented as an actual application screenshot. Photography/diagram illustration must be labeled separately.
