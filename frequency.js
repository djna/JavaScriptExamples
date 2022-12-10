


let fs = require("fs");

let text = fs.readFileSync("Gutenberg/Wonder.txt", "utf-8");
let words = text.split(/[\W_]+/);

let stoptext = fs.readFileSync("Gutenberg/stopwords", "utf-8");
let stopwords = stoptext.split(/[\W_]+/);

let sortedLcWords = words.map( word => word.toLowerCase() )
                .filter( word => word.length > 2 )
                .filter( word => stopwords.indexOf(word) == -1)
                .sort((a, b) => a.localeCompare(b));

let wordFrequencies = sortedLcWords.reduce(
    ( wordFreq, word ) => {
        wordFreq[word] ??= 0;
        wordFreq[word]++;
        return wordFreq;
      }
    , {}
);

let result =  Object.entries(wordFrequencies).sort(
   (left, right) =>  right[1] - left[1]
).slice(0, 10);
console.log("Result", result);

    




//cat Glass.txt | tr '[:upper:]' '[:lower:]' | grep -oE "\w{2,}" | 
//    sort | uniq -c | grep -Fvwf stopwords | sort -nr |head -15

