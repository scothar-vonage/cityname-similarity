# cityname-similarity

## Overview

This simple script computes the simlarity between two words using the [Jaro-Winkler](https://en.wikipedia.org/wiki/Jaro%E2%80%93Winkler_distance) distance algorithm. 

## Libraries
See the documentation for the `talisman` library [here](https://yomguithereal.github.io/talisman/metrics/#jaro-winkler)

## Install
1. Make sure you have [node](https://nodejs.org/en/download) installed.
2. Navigate to your code directory
2. Clone the repository by running:
  ```
  git clone git@github.com:scothar-vonage/cityname-similarity.git 
  ```
  This will create a directory called `cityname-similarity`  
  
4. Once you clone the repository,  `cd` into the `cityname-similarity` directory 
4. To install the packages, run:
```
npm install
```


## Run

From the `cityname-similarity` directory, run:
```
node city.js word1 word2
```
The code will return a `Similarity` between 0 and 1 where 0 means the words aren't close to each other and 1 means they are the same.

### Example:
```
$ node names.js dallas destin
Computing similarity of 'dallas' and 'destin'
Similarity: 0.4444444444444444

$ node names.js dallas rallas
Computing similarity of 'dallas' and 'rallas'
Similarity: 0.888888888888889

$ node names "santa maria" "santaria"
Computing similarity of 'santa maria' and 'santaria'
Similarity: 0.9204545454545455
```

