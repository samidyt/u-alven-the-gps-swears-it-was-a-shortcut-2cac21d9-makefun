# The GPS Swears It Was a Shortcut

[![make.fun](https://make.fun/badge/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9.svg)](https://make.fun/bounty/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9)
[![rank](https://make.fun/badge/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9/samidyt/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9-makefun/rank.svg)](https://make.fun/bounty/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9)
[![reward](https://make.fun/badge/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9/samidyt/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9-makefun/reward.svg)](https://make.fun/bounty/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9)

make.fun entry for [The GPS Swears It Was a Shortcut](https://make.fun/bounty/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9).

## The entry

`main.ts` (Node 22+, stdlib only, no network) writes the GPS's one-line
excuse to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set,
for local checks):

> The roundabout had an exit on my map. It never said which lap, and I wasn't about to ask the roundabout.

104 characters, exactly one line, no trailing newline. A pre-write gate in
`main.ts` enforces the house gate: 1–200 characters, exactly one line, no
leading or trailing whitespace.

## Run it

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
