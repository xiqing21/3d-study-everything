# Time design: 3D plus time, not a fourth space axis

Keep the skill and product name **3D Study Everything**. When a learner or brief says "4D," interpret it as **3D plus time**: a spatial scene whose teaching value includes watching state change. That phrase does not mean a four-dimensional spatial geometry, a relativistic spacetime model, or a claim that pausing the camera yields a complete spacetime simulation.

## Decide whether time has teaching value
Time controls belong in the lesson only when the learner must see order, accumulation, delay, equilibration, queues, thresholds, path dependence, or a "what if we had chosen otherwise at this moment" question.

Use a static spatial explanation when the subject is structure, layout, anatomy, topology, or a single declared equilibrium that does not require watching change. Do not add playback, a timeline, or decision branches merely to appear advanced. Camera movement is not time travel.

## Choose the lowest sufficient level
Do not implement every level by default. Recommend and build only what the scene needs, and name the chosen level in the learning contract.

### L0 — Static structure
An inspectable 3D state with no simulated clock, or a single declared snapshot. The learner orbits, selects and reads structure. No playhead is required.

### L1 — Play, pause, speed, step, optional forward run-to-time
A live simulation clock advances the real model. Pause freezes simulated time, counters, effects, pending events and metrics; the camera and selection may still move. Speed and single-step change simulated time, not merely animation easing. Forward "run to time" is allowed only as actual model advance to a later instant, never a fabricated frame. Reset starts a new deterministic trial. Backward history seek and decision branches are not required at this level.

### L2 — Recorded history seek and event bookmarks
A bounded, immutable history of snapshots or events. Seeking to a recorded time restores a consistent package: model variables, metrics, geometry, the relevant RNG/input position, and the event log. Bookmarks mark actual events, not decorative flags. Seeking a late time must change real objects and metrics, not only a label. Replay is read-only.

### L3 — Checkpoint branches and fair comparison
From a deep-cloned checkpoint, run alternative controls against the same remaining external input. Compare the same horizon and time origin. Label live, replay and compare explicitly. Switching candidates must keep the comparison time aligned. A worse outcome must not be relabeled as an improvement.

For many dynamic teaching prototypes, L1 is enough. Recommend L2 when the lesson is "what exactly was true at that moment?" Recommend L3 when the lesson is a fair decision comparison. Recommend L0 for static structure.

## Consistency rules when time is in the lesson
- Distinguish **simulation time** (the model's clock and all time-stamped metrics) from **wall-clock time** (how long the learner waits, or how fast the UI animates). A paused model must not advance simulation time during wall-clock waiting. "4× speed" means four simulated seconds per wall-clock second, not a change of units.
- A timeline, clock or bookmark must restore or display consistent state, metrics, geometry, RNG/input and events for that simulation time.
- History, if any, is memory-bounded and immutable. State the retention window; evict oldest records rather than growing without limit.
- **Replay must not mutate the live model.** Editing during replay is forbidden unless the user starts an explicit, labeled fork from a checkpoint.
- Parameter changes must declare **live** (applied to the current state, with any conservation consequences explained) versus **fork or reset** (a new trial, or a branch from a checkpoint). Do not silently inject or destroy conserved quantities mid-run.
- Pause is a frozen simulation state plus a still-usable camera and UI. It is not evidence of a complete spacetime simulation.

## Honest claims
Do not call a scene "4D," "time travel," or "history replay" if it only animates forward. Do not claim L2 seek or L3 branching when the artifact only supports L1 forward run-to-time, pause, step and reset.

The included thermal and queue examples, as of this documentation revision, support the verified L1 controls: pause, reset, speed, step and forward run-to-time. They do not provide history seek or checkpoint branching. Updating this Skill and its documents does not add those features to the demos.

## Verification by level
- **L0:** no hidden clock; moving the camera does not change declared state.
- **L1:** pause freezes simulation time; step and run-to-time advance the real model to the stated time; reset is reproducible; wall-clock waiting does not advance a paused clock.
- **L2:** forward and backward seek restore the same snapshot; late-frame geometry and metrics match; replay cannot edit live state; bookmarks attach to real events; memory stays bounded.
- **L3:** cloned checkpoints are isolated; remaining external arrivals/inputs match; horizons and time origins are equal; comparison time stays aligned when switching candidates.
