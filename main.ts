// The Robot Pickup Line Championship — one robot pickup line (max 200 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I ran a diagnostic on my heart and it returned one error: target not found, until you walked in and my proximity sensor proposed.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
console.log(entry);
console.log(`chars: ${entry.length}`);
