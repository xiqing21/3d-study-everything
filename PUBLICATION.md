# Publication status

The reviewed Skill, installation bodies, time-design guide, original thermal and queue examples, model tests, and locally vendored Three.js runtime are published in this public repository. Newly authored source, documentation, original stills, and the sampled-state GIF are MIT-licensed; the upstream Three.js MIT notice is retained. No traffic reference source or images are included or relicensed.

## Binary assets
Four original still screenshots and one 10-second sampled-state GIF are published under `docs/images/`. They were uploaded as real binary files, not as base64 text. After upload, anonymous HTTP fetches returned `image/png` or `image/gif` and matched the local SHA-256 digests recorded in [SCREENSHOTS.json](docs/SCREENSHOTS.json) and [ANIMATION-PROVENANCE.json](docs/ANIMATION-PROVENANCE.json). The GIF is an accelerated presentation of 12 held real paused states, not a continuous real-time recording. An optional review MP4 was visually reviewed and is not in this repository.

## What remains out of scope
The demos remain L1: forward run-to-time, pause, speed, step and reset. L2 history seek and L3 checkpoint branches are design guidance, not added demo features. Three-model independent generation is not run; no consistency guarantee is claimed. There is no hosted public website for these examples, and this package does not record a social post.

No secrets, `.env`, provider state, server logs, raw conversations, private account details or traffic screenshots are part of this publication. Earlier local reports may describe a previous text-only snapshot; current image-hosting status is this document and the README, not those historical notes.
