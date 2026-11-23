# Local validation report

**Date:** 2026-11-23, Asia/Shanghai (UTC+8). **Publication note:** the original local validation is described below; four binary screenshots remain pending upload and are not represented as online assets. **Scope:** selected desktop-browser checks and real screenshot inspection, not full device/GPU/performance certification or independent-model benchmarking.

## Provenance and environment
The coordinating browser operator supplied the interaction results below and six actual screenshots. The packaging executor opened and visually inspected the four new-example screenshots and checked all six PNG dimensions. No browser was driven by the packaging executor. Distinguish operator-reported interaction checks from directly inspected static captures and from independently executed numerical tests.

**Actual browser viewport: 1920×1072 CSS pixels**, as reported by the operator. The PNG files are also 1920×1072 pixels, independently checked from their headers. Earlier requested viewport dimensions were not achieved and must not be substituted in a report. Device scale factor, browser version, GPU hardware, hardware-acceleration status and frame rate were not independently recorded. This viewport difference is not a functional defect.

## Confirmed results
| Check | Result | Evidence type |
|---|---|---|
| Thermal baseline, G=20 W/K, C₁=C₂=2000 J/K, t=50 s | UI 61.0 / 39.0 °C, equilibrium 50.0 °C | Real screenshot inspected; operator reported |
| Thermal intervention, G=40 W/K, same initial state and t=50 s | UI 54.1 / 45.9 °C, equilibrium 50.0 °C | Real screenshot inspected; operator reported |
| Thermal Body 1 details | 54.060 °C in intervention; clock paused at 50.00 s | Operator reported interaction, not visible in supplied unselected screenshot |
| Thermal orbit, zoom and Body 1 picking/details linkage | Passed the selected checks | Operator reported, no new automated browser test |
| Queue baseline, λ=1 task/s, 1 worker, 2 s/task, t=10 s | 10 arrivals = 4 completed + 5 waiting + 1 busy | Screenshot shows 4 completed /5 waiting/one real task; full conservation count operator reported and model-tested |
| Queue intervention, same demand/service, 2 workers, t=10 s | 10 arrivals = 8 completed + 0 waiting + 2 busy | Screenshot shows 8 completed/0 waiting/two real tasks; full count operator reported and model-tested |
| Queue worker picking and corresponding details | Passed the selected check | Operator reported; screenshots themselves show unselected inspector |
| Original pure-model tests | 10/10 passed | `evaluation/results/model-tests.json`; exact formulas and conservation checks |
| Static served resources | 8/8 HTTP200 with matching bytes; syntax and literal local-link checks passed | `evaluation/results/http-checks.json`; not browser compatibility proof |

The thermal results agree with the exact two-body model: T₁=50+30exp(−t/50) for the baseline and T₁=50+30exp(−t/25) for the intervention. The service model uses deterministic FIFO arrivals/service, not an M/M/c stochastic queue. Passing these toy-model checks is not external field calibration or an expert certification.

## Real captures
Unmodified originals were inspected locally. They are **not uploaded** in this initial text-only source snapshot. File checksums and dimensions are recorded as provenance in [SCREENSHOTS.json](SCREENSHOTS.json); they do not imply that image files are available here.

| Trial | Configuration | Capture |
|---|---|---|
| Thermal baseline | G=20 W/K, t=50 s | `thermal-baseline-50s.png` (not uploaded) |
| Thermal intervention | G=40 W/K, t=50 s | `thermal-intervention-50s.png` (not uploaded) |
| Queue baseline | 1 worker, t=10 s | `queue-baseline-10s.png` (not uploaded) |
| Queue intervention | 2 workers, t=10 s | `queue-intervention-10s.png` (not uploaded) |

These are real UI captures, not generated or composited illustrations. The look is intentionally minimal and readable. A screenshot proves visible state at capture, not every interaction. Any prototype banner saying broader acceptance is pending remains valid: these selected checks do not complete the entire rubric.

## Reference traffic evidence, not bundled
The operator observed the stable reference traffic application's actual overview and close-up render at the same 1920×1072 viewport. A text-reading attempt timed out once; do not turn that into a passed text-extraction test or pretend no issue occurred. Those traffic images and source are deliberately excluded from this MIT package because their reuse license is not established. Traffic is a reference workflow, not a third independently generated domain result for this Skill.

## Explicitly unknown or not run
- GPU hardware model, hardware-accelerated rendering status, GPU certification, measured frame times or performance targets.
- Mobile/touch and 390px layout, keyboard/screen-reader audit, reduced-motion behavior, context loss, every reset/edge-case UI path and exhaustive console/network review.
- Independent generation using three different models, model identity/version, cross-model quality or consistency. See [MODEL-MATRIX.md](../evaluation/MODEL-MATRIX.md).
- Biology/SIR implementation, browser behavior or domain expert review. Only its brief/oracle is included.
- Real-world engineering accuracy, production devices, live data, connected inference, field outcomes or production readiness.
- Published repository, host Skill installation, live public demo for these new examples or social posting.

## Reproduce the selected comparisons
Start the package's static server as described in README. For each preset: choose Baseline or Intervention → Reset paused → enter target 50 (thermal) or 10 (queue) → Run to time, then pause. Select Body 1 or a worker for details. Use the same viewport/camera for a paired capture and export exact state if numeric precision matters. Do not change the screenshot's time labels or invent a result to match an oracle.

## Acceptance conclusion
Selected desktop rendering, matched-time causal comparisons and reported entity interactions passed. The numerical-model checks support their declared simplified mechanisms. Broader runtime/accessibility/device coverage and cross-model generation remain unassessed. No all-domain, all-model or hardware-performance guarantee follows.
