# Service bottleneck brief

Teach workload balance and the difference between faster service and increased parallel capacity. Deterministic arrival rate λ tasks/s; identical server count c; fixed service time s seconds/task. Nominal capacity μ=c/s tasks/s, load ratio ρ=λs/c. This is not an M/M/c queue and ρ is not a measured utilization statistic.

Each arrival gets one persistent ID. Work is FIFO, no loss, no preemption, unlimited waiting storage. Conserved count: arrivals=completed+waiting+busy. Stable input stream must not change when staffing changes. At ties, departures occur before arrivals then idle servers accept FIFO work.

Oracle: first arrival t=1s, λ=1 task/s,c=1,s=2s. At t=10s: 10 arrivals,4 completed,1 busy,5 waiting. With c=2 at t=10s: 10 arrivals,8 completed,2 busy,0 waiting. Boundary λ=0 produces no work. λ>capacity causes persistent backlog; more workers can improve throughput, not erase already waiting tasks instantaneously.

Controls apply a new trial when adjusted; pause/step/reset retain exact counts. Render a bounded window of waiting tasks with overflow explicitly counted; do not delete work to improve frame rate. Select a server to inspect the actual task ID and remaining service time.

Extensions: isolate one worker; add a downstream finite buffer and blocking; add independently seeded service variability and explain why the deterministic load ratio alone does not predict delay. Parameters are illustrative, not a staffing recommendation or production telemetry.
