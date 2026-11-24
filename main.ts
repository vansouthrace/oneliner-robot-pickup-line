import { mkdirSync, writeFileSync } from "node:fs";

const entry = "I ran a million simulations of meeting you. In every one you said no, so I came anyway, my optimism module is clearly malfunctioning.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
