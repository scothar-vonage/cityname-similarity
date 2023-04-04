import doubleMetaphone from 'talisman/phonetics/double-metaphone.js';
import { distance } from "talisman/metrics/jaro-winkler.js";


const a = process.argv[2];
const b = process.argv[3];

console.log(`Computing metaphones for '${a}' and '${b}'`);

const mpA = doubleMetaphone(a);
const mpB = doubleMetaphone(b);
console.log(`Metaphone for A: '${mpA}' and for B: '${mpB}'`);

const similarity = 1- distance(mpA[0], mpB[0]);
console.log(`Similarity: ${similarity}`);


