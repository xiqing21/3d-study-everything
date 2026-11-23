# Initial public source snapshot

The reviewed Skill, installation bodies, time-design guide, original thermal and queue examples, model tests, and locally vendored Three.js runtime are published as one reviewed initial snapshot in atomic file groups. Newly authored source/docs are MIT-licensed; the upstream Three.js MIT notice is retained. No traffic reference source or images are included or relicensed.

## Screenshot limitation
The available bulk connector accepts text strings only. Its invocation layer expands at most four local file references per call, so the reviewed snapshot is uploaded in four functional bulk commits (core, runtime, references, and evaluation/provenance), never per-file commits. Four real new-example PNG screenshots were verified locally at 1920×1072, but **their binary files are not in this initial source snapshot**. Screenshot upload is pending. Their names, hashes and scoped validation observations are metadata only. README and validation pages do not embed or link to missing image files. No base64 text is mislabeled as a PNG.

## Reproduce locally
Serve the root using the README command, then open `examples/thermal.html` or `examples/queue.html`. HTML, JavaScript modules, CSS and the local renderer are included; there is no CDN or key requirement. Run the original numerical tests with `node --test evaluation/models.test.mjs`.

The demos remain L1: forward run-to-time, pause, speed, step and reset. L2 history seek and L3 checkpoint branches are design guidance, not added demo features. Three-model independent generation is not run; no consistency guarantee is claimed.

No secrets, `.env`, provider state, server logs, raw conversations, private account details or traffic screenshots are part of this publication. Historical local validation reports are preserved with this publication-scope notice; they are not evidence of later independent tests or live hosting.
