// The GPS Swears It Was a Shortcut — make.fun entry.
// Writes the GPS's one-line excuse to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when set, for local checks).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The roundabout had an exit on my map. It never said which lap, and I wasn't about to ask the roundabout.";

// Pre-write gate: the house gate requires UTF-8 text of 1-200 chars,
// exactly one line, not only whitespace, no leading/trailing whitespace.
const line = LINE;
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry length ${line.length} outside 1-200`);
}
if (line !== line.trim()) {
  throw new Error("entry has leading/trailing whitespace");
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("entry must be exactly one line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
process.stdout.write(line);

// Verified 2026-11-25: entry is 104 chars, exactly 1 line, no trailing
// newline; stdout byte-identical across repeated runs.
