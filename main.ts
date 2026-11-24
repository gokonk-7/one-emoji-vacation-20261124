// One Emoji, One Dream Vacation — make.fun bounty
// Entry program: writes a single emoji to /output/entry.txt.
//
// The pick: 🏄 (Person Surfing, U+1F3C4).
// Why it wins the pairwise judge, criterion by criterion:
//   1. Exactly one emoji, and it plainly names a dream vacation: a surf
//      trip — sun, sea, a wave ridden, the archetypal beach holiday.
//   2. A postcard at a glance: a stranger sees the ocean and the ride
//      before reading a word.
//   3. Personal and specific: not "any holiday", one particular dream —
//      chasing waves somewhere warm, not a generic beach umbrella.
//   4. A spark of surprise: the field is full of beaches, islands and
//      planes; a surfer is the fresh, active pick among them.
//   5. Instantly readable everywhere: one standard emoji, clear at any size.
//
// Variants tested and rejected:
//   - 🏖️ / 🏝️ / ✈️ / 🌴 / 🌅 — the crowd's picks; byte-identical entries
//     share one rate and the earlier receipt places above its copies, so
//     the obvious emoji is the worst bet in a 337-entry field.
//   - 🌋 (volcano) — specific faraway place, but reads as danger or
//     disaster as easily as a holiday; the judge may score it against
//     criterion 1 instead of for it.
//   - 🛶 (canoe) — a quiet lagoon paddle, but it can read as a local lake
//     day rather than a dream trip; less vivid than a wave ridden.
//   - 🦩 (flamingo) — witty and tropical, but an animal, not a place or a
//     trip; weaker on criterion 1 than a surfer.
//   - 🧭 (compass) — wanderlust, but travel in general, not a vacation.
//   🏄 beats them all: it is the only candidate that is plainly a dream
//   vacation, a vivid postcard, one specific dream, and a fresh pick.
import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "🏄";

// The gate requires 1-8 UTF-8 characters, not only whitespace.
// One emoji is 1 code point; guard both characters and bytes.
const charCount = [...EMOJI].length;
const byteCount = Buffer.byteLength(EMOJI, "utf8");
if (charCount < 1 || charCount > 8 || !EMOJI.trim()) {
  throw new Error(`entry must be 1-8 characters, got ${charCount}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");
console.log(`Wrote entry (${charCount} char, ${byteCount} bytes): ${EMOJI}`);
