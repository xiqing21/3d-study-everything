# Biology generation brief (not implemented)

Create a real 3D interactive learning scene explaining a closed-population SIR teaching model. Audience: introductory biology students. Do not imply clinical forecasting or real-location infection risk.

S'=-βSI/N, I'=βSI/N-γI, R'=γI, with N=S+I+R constant, β and γ in day⁻¹. Use declared numerical method and convergence/positivity checks; no silent negative-population clamp that hides a solver failure. State homogeneous mixing, closed population, fixed parameters, permanent recovery and no births/deaths as simplifications.

Controls β,γ and initial I. Observe S,I,R, total conservation and effective growth threshold βS/N−γ. Show people/dots as illustrative aggregates, not actual spatial transmission. Do not animate proximity contagion while using a homogeneous model without labeling the visual analogy.

Numerical slope oracle at N=1000,S=990,I=10,R=0,β=.3,γ=.1: S'=-2.97,I'=1.97,R'=1 per day. β=0 makes I decay and transfers exactly to R. γ=0 keeps R unchanged. Test step-size convergence and nonnegative states, constant N, pause/reset, consistent color/count mapping.

Experiment: same initial state, lower β until βS/N<γ; observe initial I growth reverse. One-factor comparison at equal days. Explain threshold depends on current S/N, not just β/γ. Suggested extension: demography or waning immunity only after explicitly revising equations and conservation.

Status: specification and numerical oracle only. No 3D artifact, browser validation, domain-expert review or cross-model trial has occurred for this case.
