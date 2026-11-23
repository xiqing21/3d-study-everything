# Portable installation

There is no universal skills installer. Use the method your host actually supports; do not invent a tool, claim installation from a pasted URL, or silently substitute a different platform.

## One-command install (supported Skill hosts)

```sh
npx skills add xiqing21/3d-study-everything --skill 3d-study-everything
```

Requires Node.js/npm, internet access, and a host supported by the third-party [Skills CLI](https://github.com/vercel-labs/skills). Review the Skill before installing. This installs instructions, not a hosted web app. The repository-root `SKILL.md` is discoverable; helpers are copied with it.

The exact command above was tested in an isolated project with Skills CLI **1.9.0**. A second isolated test explicitly targeted Claude Code file installation:

```sh
npx --yes skills@1.9.0 add xiqing21/3d-study-everything --skill 3d-study-everything --agent claude-code --copy --yes
```

Both installed the Skill and its referenced helpers with matching hashes. No model was invoked; installation success is not evidence of generation quality or cross-model consistency. Use `--list` to preview discovery. Let the CLI select supported hosts, or choose a documented `--agent`; add `--global` only if you deliberately want a host-supported global install. The isolated tests used **project-local** installs and did not modify shared Skills. See the [installation test record](docs/INSTALLATION-VALIDATION.json).

## Single-body global Skill save (recommended when helper storage is uncertain)
Use `installation/metadata.json` for the generic name/description and `installation/skill-body-self-contained.md` for the complete essential recipe without YAML frontmatter. The body has no dependency on this package's future location, local service URLs, private paths or accounts. Use the host's real authorized save mechanism; this package does not claim the Skill was installed.

`installation/skill-body-full.md` is the exact canonical body without YAML, but it needs the referenced helper files. Use `installation/HELPERS.md` to choose a supported helper strategy rather than assuming a body-only tool attaches files automatically.

## File-based skill hosts
Copy this package into a skill directory supported by the host, keeping the folder name `3d-study-everything`, `SKILL.md`, and its relative `references/`, `templates/`, and `evaluation/` files together. Follow the host's documented discovery mechanism. Host-specific paths are intentionally not hard-coded here.

## Project instructions / assistants with file attachments
Attach `SKILL.md`, then attach referenced guides when requested. Put this short pointer in project instructions:

> When creating a 3D interactive learning application, follow the attached 3d-study-everything skill. Separate mechanism/model/view, bind controls to measurable consequences, verify in layers, and report limitations. Load the referenced files as needed.

If relative-file loading is unavailable, concatenate the skill and relevant references, including `references/time-design.md`, into a single instruction document, preserving headings. The examples are optional; do not consume the context budget with the vendored renderer.

## Chat-only / small-context models
Paste `templates/portable-prompt.md`, followed by the subject. This is a reduced protocol, not a full installation. Ask for staged outputs: contract → model/tests → 3D artifact → verification report. Transfer files explicitly between stages if the host does not retain them.

## Capability floor
The recipe itself is model-neutral. Executing it requires code/file generation; running tests requires a runtime; visual acceptance requires a browser and compatible GPU. Without these, the assistant must deliver a partial artifact and list checks pending. Context size, reasoning, coding quality, and available tools affect results.

## Verification after installation
Ask the model to name the skill's six stages and create a bounded thermal-exchange contract. Check that it mentions assumptions, model-derived metrics, pause/reset, and separate GPU acceptance. That checks instruction retrieval, not application quality or cross-model parity.

## Updates
Keep a reviewed copy or versioned archive. Re-run evaluation when instructions, dependencies, or target host/model change. Do not auto-download or execute instructions from arbitrary links in user-provided material.
