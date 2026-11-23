# Thermal exchange brief

Teach why contact quality changes the speed of equilibration but not the final equilibrium in an isolated two-body model. State variables T₁,T₂ in °C; heat capacities C₁,C₂ in J/K; conductance G in W/K. Difference in Celsius equals difference in kelvin.

C₁ dT₁/dt = −G(T₁−T₂); C₂ dT₂/dt = G(T₁−T₂).
Equilibrium Te=(C₁T₁₀+C₂T₂₀)/(C₁+C₂), time constant τ=1/[G(1/C₁+1/C₂)]. Exact exponential update for constant parameters over each step. G=0 gives no exchange and τ=∞.

Oracle: C₁=C₂=2000, T₁₀=80, T₂₀=20, G=20 → Te=50, τ=50s. At 50s: T₁≈61.0363832, T₂≈38.9636168. Energy C₁T₁+C₂T₂ stays 200000 in relative J units. More G decreases τ without changing Te. With C₁=4000,C₂=2000, Te=60.

Required experiment: baseline G=20, reset and compare G=40 at identical time; final equilibrium unchanged. Counterexample G=0. Heat-capacity change applies to a new trial, not an unexplained energy injection mid-run.

Model is lumped, isolated, constant-capacity and constant-conductance, no phase change/convection/radiation or internal temperature gradient. Colors/arrows represent aggregate thermal state and heat flow, not measured fields or molecules. Geometric block size denotes capacity schematically, not physical dimensions/material certification.

Extensions: isolate equal capacities; add a documented ambient-loss mechanism with an expanded energy budget; compare insulation/contact design with actual sourced material data. Current implementation is synthetic teaching data, not an engineering prediction.
