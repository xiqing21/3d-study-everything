# Experiment deck (guided cards)

A deck turns a sandbox into a lesson: the learner predicts, the card reveals, the card applies its configuration, and the model answers. Four to eight cards, six is the usual sweet spot.

## Card anatomy

```
n       序号 + 一句机制句（这是什么，不是"很重要"）
title   名词级标题，不带结论
q       一个可以在画面上验证的问题
opts    2–3 个选项，恰一个正确，错误项要似是而非
exp     揭晓：公式 + 代入的数字 + 实测值 + 一句"所以"
apply   该卡片要写入的参数对象（点击即应用并重置）
```

## Rules

1. **One control per card.** Two variables change together and the card teaches nothing.
2. **Prediction before reveal.** Never show the explanation until an option is clicked; wrong picks highlight the right one instead of silently failing.
3. **Numbers must be measured, not remembered.** After editing a parameter set, re-run the model for a fixed horizon (≥ 5 cycles or ≥ 600 simulated seconds) and paste the observed value into `exp`. Copying a number from an earlier version is the most common source of a deck that lies.
4. **Each `apply` resets the trial.** Announce it ("点击会套用参数并从 0 秒重跑"), and reset selection, accumulators and history together.
5. **Round numbers collide.** Several parameter combinations give the same observable (e.g. saturation is invariant when flow and green ratio scale together). A card that promises a change which the model cannot produce must be rewritten, not tuned.
6. **Last card is the boundary.** The final card should push one control into the regime where the phenomenon breaks (saturation above 1, capacity exhausted, tolerance exceeded), and say what the honest remedy is.
7. **Deck state is visible.** Current card index, applied parameters, and the fact that the trial restarted belong in the UI, not only in the transcript.

## Wiring

- Card click → write sliders from `apply()` → single `reset(config)` on the model → clear selection → re-render once.
- Slider drag alone never touches the model; a separate "apply and reset" button commits. Mixed live/reset semantics inside one control is the failure this avoids.
- Keep the deck DOM deterministic: same order, same ids, so screenshots and tests can address card `n`.

## Review test

- Answer every card's `q` from the model, not from the text: run the `apply` config and read the output.
- Confirm at least one wrong option is a real misconception, not a strawman.
- Confirm the deck's promised effect appears within the stated horizon on a clean reset; if not, fix the card or the control range.
