# Mechanism before animation

## Knowledge extraction
Create an evidence ledger: claim, source/location, checked or unverified, operational consequence, and uncertainty. Prefer supplied authoritative documents and primary technical sources. If only assumptions are available, label the model a teaching hypothesis rather than validated domain knowledge.

For every control define its name, unit, legal range, default, timing (live or reset-only), changed mechanism, expected output, and important exception. For every metric define formula, units, window, denominator, population and null semantics. A stationary sample of zero is different from no sample.

## Scientific scope
- **Established mechanism:** a supported relationship, e.g. energy balance for an isolated system. Its parameter values still require evidence.
- **Simplified model:** a bounded approximation, e.g. two internally uniform thermal bodies connected by constant conductance. State what is omitted.
- **Visual analogy:** arrows, particles or colors representing energy/information, not microscopic particles or measured fields.
- Separate imported observations, generated examples, model predictions, and live measurements in UI and exports.

## Minimal model contract
State vector; legal initial state; units; equations/events; boundary conditions; parameters; solver/timestep; randomness; identity; conservation/safety invariants; metrics; reset semantics; known failure regimes. Define changes that require resetting the experiment. Do not change hidden assumptions mid-run.

## Causal experiments
Baseline and candidate must begin from the same state. For stochastic input, replay one external event stream or use independent streams indexed by source/entity. Do not draw arrivals and control-dependent service/appearance from a single global RNG. Keep clocks and horizons identical. Show an unchanged control experiment and a case where the proposed intervention does not help. Do not force all metrics to improve or suppress a trade-off.

## History and causality
Choose a time-control level with `time-design.md` before adding a clock, timeline, or branch. History is a record, not the live object. Deep-copy/freeze snapshots. Label live/paused/replay/compare explicitly. Seeking to a late time must update the actual rendered objects and displayed metrics, not just the slider. Switching candidate preserves comparison time. Reset of simulation state must not silently erase a promised session audit; define persistence and export honestly.

## Proactive extension recipe
For each suggestion include: question it teaches; added mechanism; extra evidence/assumptions; controls and observable result; implementation cost; validation; out-of-scope risk. Rank by learning value per added complexity. Prefer one-variable isolation before a feature-rich scene. Never add real-world control, paid APIs, personal-data collection or external publishing just to enrich a prototype.
