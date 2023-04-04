import doubleMetaphone from "talisman/phonetics/double-metaphone.js";
import { distance } from "talisman/metrics/jaro-winkler.js";
import * as fs from "fs";

const a = process.argv[2];

fs.readFile("cities.csv", "utf-8", (error, data) => {
  if (error) {
    console.error("Error reading the CSV file:", error);
    return;
  }
  const mpA = doubleMetaphone(a);

  console.log(`Metaphone for '${a}' is ${mpA}`);


  const entries = data.trim().split("\n");
  const cities = [];

  console.log(`Calculating closest match against ${entries.length} entries`);

  entries.forEach((city) => {
    const mpB = doubleMetaphone(city);
    const similarity = 1 - distance(mpA[0], mpB[0]);
    const v = [];
    v[0] = city;
    v[1] = similarity;
    v[2] = mpB;
    cities.push(v);
  });

  cities.sort((a, b) => b[1] - a[1]);

  console.log(cities);
  console.log(cities[0]);
  //console.log(`Closest match: ${cities[0]} ${cities[1]}`);
});
