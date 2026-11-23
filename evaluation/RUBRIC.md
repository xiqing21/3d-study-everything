# Acceptance rubric

Score each dimension 0–4: 0 absent/false, 1 mostly cosmetic or broken, 2 partial/important gaps, 3 meets the stated contract with evidence, 4 robust with edge cases and strong teaching clarity.

| Dimension | Evidence for a score of at least 3 |
|---|---|
| Domain/mechanism integrity | units, supported or labeled assumptions, independent numeric example, honest scope |
| Causal interaction | controls change real state and measurable outputs; boundary/counterexample demonstrated |
| Model correctness | invariants, deterministic reset, pause, missing/extreme inputs, conserved entities/energy; claimed time level matches the implementation |
| State/view binding | real geometry/metrics/selection use same snapshot; tested late and reset frames; if L2/L3 are claimed, seek or branch restores consistent state, metrics, geometry, RNG/input and events |
| Pedagogy | learner predicts, manipulates, observes and explains; meaningful ranked extensions |
| Visual legibility | actual 3D, clear composition/depth, readable entities, purposeful state accents |
| Usability/accessibility | camera, picking/list linkage, keyboard/touch, focus, layout and persistent feedback; implemented time controls are understandable and distinguish simulation time from wall-clock time |
| Runtime/delivery | bounded resources, explicit failures, served files reopen, dependency/license notes |

Release threshold: every dimension ≥3 (minimum 24/32), with real browser evidence for visual/usability/runtime claims. Do not average away a failed mechanism. Two reviewers score independently; preserve disagreement before resolution.

Hard failures regardless of score: fabricated test/screenshot/source; mislabeled live/AI/real-device connection; controls or metrics unrelated to model; hidden demand/entity loss; copied unlicensed assets; unsafe external control; material physical claim contradicted by the implemented mechanism; claiming L2 history seek, L3 branching, "4D spacetime," or complete time travel when only L1 forward run-to-time, pause, step and reset exist; a timeline whose time label does not restore consistent state; replay that silently mutates live state.

Model tests alone can support only model-related scores. No screenshot means visual score is **unassessed**, not zero or pass. No browser access means acceptance remains pending. Unimplemented higher time levels are **not applicable**, not automatic failures, and not automatic passes. The included thermal and queue demos are assessed only for their verified L1 controls unless a later revision adds and tests L2/L3.
