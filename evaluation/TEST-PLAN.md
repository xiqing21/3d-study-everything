# Cross-domain and cross-model evaluation protocol

## Three genuinely different domains
1. **Thermal energy exchange / physics**: two internally uniform bodies, constant conductance, isolated environment. Adjust conductance and heat-capacity ratio. Observe temperatures, heat-transfer rate and energy error. Implementation: `examples/thermal.html`; oracle and limitations in `cases/thermal.md`.
2. **Service operations / computing**: fixed-rate task arrivals and deterministic service at identical parallel workers. Observe queue, in-service work and completions. Implementation: `examples/queue.html`; no probabilistic queue claims. See `cases/queue.md`.
3. **Biology / population epidemic teaching**: SIR conservation and threshold behavior, no geography or individual risk claims. This is a generation brief only, not an implemented app or validated clinical model. See `cases/biology.md`.

Traffic is a methodological reference, not a substitute for any new domain test. The two included examples are authored prototypes showing the intended contract; they do not establish that other models can reproduce them.

## Reproducible model trial matrix
- Choose at least three independently identified model/host configurations, with lawful access. Record exact model/version reported by the host, date, enabled tools, context limit if known, skill revision, prompt, budget and environment. Do not infer identity when it is unavailable.
- Run each of the three domain briefs independently, in a fresh context, using identical skill files, requirements, dependencies and time/token budget. Repeat each cell at least twice (3×3×2=18 generations). If resources permit only a smaller pilot, label it a pilot.
- Preserve first output, failures, repair prompts and elapsed effort separately. Do not silently repair a weaker model's output before scoring. Never substitute an unavailable named model.
- Use the same browser/device/viewport for measured visual trials; also test one narrow layout and reduced motion. Record runtime errors and frame-time observations rather than inferring performance from a screenshot.
- Run model oracle/invariant tests, then actual view-binding and browser tasks, then two independent rubric reviews. Report pass rate per domain/model, per-dimension scores, variance, recurring failures and repair cost. No claim of guaranteed consistency.

## Time-control levels
Record the chosen level (L0–L3) from `references/time-design.md` before scoring. Test only the implemented level; do not treat missing higher levels as either a pass or a product-wide failure unless they were claimed.

- **L0:** moving the camera does not change declared state; no hidden simulation clock.
- **L1:** pause freezes simulation time during at least 2 wall-clock seconds; speed/step and any forward run-to-time advance the real model to the stated simulation time; reset is reproducible. Do not call this history seek or branching.
- **L2, if claimed:** seek backward and forward restores the same snapshot; late-frame geometry and metrics change with the clock; bookmarks attach to real events; replay does not mutate live state; history stays memory-bounded.
- **L3, if claimed:** a deep-cloned checkpoint plus identical remaining external input yields a fair, time-aligned comparison.

The included thermal and queue examples currently implement verified L1 controls only (pause, reset, speed, step, forward run-to-time). This documentation revision does not add L2/L3 to those demos, and tests must not claim otherwise.

## Per-app browser tasks
Load by HTTP; confirm no unexpected external requests. Capture first successful frame and check no blank overlay. Rotate/preset camera; select a 3D entity then its DOM alternative; modify a meaningful parameter; pause for 2 wall seconds; step once; reset; resize to 390px width; use keyboard; inspect console; exercise GPU-failure message when feasible. Exercise the implemented time-control level only: for the included demos, use Reset paused and Run to time, then pause; do not report history seek or checkpoint branching. If an app actually implements L2/L3, test end/late-frame seek and comparison as specified above. Test at least one counterexample.

## Evidence structure
Store revision, checksums, prompt, output, model/host identity, actual command results, browser operator/device/viewport, screenshots and pending items in a results record. Do not store private user context or credentials. `results/STATUS.md` tracks this phase, not future results.
