# Skill-save handoff and helper strategy

## Recommended global save: self-contained body
Use the name/description in `metadata.json` and the exact contents of `skill-body-self-contained.md` as the body. This file has no YAML frontmatter and contains all essential steps, checks, safety/rights boundaries and honest cross-model limitations. It has no runtime dependency on a local server, another bot, a private filesystem path or a helper-loading tool.

The saving operator should use the host's actual authorized skill-save mechanism. In hosts with an UpdateSkill tool, pass the generic name, description and body through that tool. Do not say the Skill is installed merely because these files exist. Do not assume writing the body also installs a directory of helpers.

## Full file-based installation
Install the complete package's `SKILL.md` with `references/`, `templates/` and `evaluation/` preserved at their original relative locations. The `examples/`, `docs/` and `vendor/` folders are demonstration/evidence material; they are not required merely to read the recipe. Keep them if the host or user wants to run the examples offline.

`skill-body-full.md` is the exact SKILL.md body without frontmatter. Unlike the self-contained alternative it intentionally refers to these helper files:
- `templates/learning-contract.md`
- `references/mechanism-design.md`
- `references/time-design.md`
- `references/visual-and-interaction.md`
- `evaluation/RUBRIC.md`
- `templates/delivery-report.md`
- `evaluation/TEST-PLAN.md`

If a host supports helper attachments, explicitly attach/upload those files and verify that its relative references resolve. If it supports only a single body, use the self-contained version instead. Never point a globally saved Skill at an ephemeral agent-box path. Do not invent a helper-install parameter for a tool that has none.

## Post-save verification
Invoke the installed Skill in a fresh task and ask for a thermal learning contract without supplying the original package path. Verify it retrieves the causal chain, mechanism/simplification labels, deterministic model, pause/reset, scene-appropriate time level, evidence layers and no universal-model claim. That checks retrieval, not full app quality. Only then report installation success. Record the resulting host Skill identifier outside the generic template.
