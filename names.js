import { distance } from "talisman/metrics/jaro-winkler.js";

const a = process.argv[2];
const b = process.argv[3];

console.log(`Computing similarity of '${a}' and '${b}'`);

const similarity = 1 - distance(a, b);
console.log(`Similarity: ${similarity}`);
