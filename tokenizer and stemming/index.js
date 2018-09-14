const natural = require('natural');
const stemmer = natural.PorterStemmer;
const tokenizer = new natural.WordTokenizer();

const jiraDescription = "Elasticsearch keyword search research";
const commitDescription = "Added implementation keyword search";

// console.log(stemmer.tokenizeAndStem(jiraDescription));
// console.log(stemmer.tokenizeAndStem(commitDescription));


// const pluralWord = "cups";

// console.log(stemmer.tokenizeAndStem(pluralWord));

// const commit = "I added error handling";

// const sentence = "Im the boss";

// console.log(stemmer.tokenizeAndStem(commit));
// console.log(stemmer.tokenizeAndStem(sentence));


// const stopWords = "Are you there";

// console.log(stemmer.tokenizeAndStem(stopWords));
// console.log(stemmer.tokenizeAndStem("Opportunities"));
// console.log(stemmer.tokenizeAndStem("Dzieci"));
// console.log(stemmer.tokenizeAndStem("Dziecko"));
// console.log(stemmer.tokenizeAndStem("Niektórych"));
console.log(tokenizer.tokenize('Niektórych łózek nie da się złożyć'))
console.log(stemmer.tokenizeAndStem('Niektorych lozek nie da się zlozyc'))

// const polishCharacters = [ą, ć, ę, ł, ń, ó, ś, ż, ź ];

var text = "Niektórych łózek nie da się złożyć";

// Replace "the" with "a".
var result = text
  .replace(/ą/g, "a")
  .replace(/ć/g, "c")
  .replace(/ę/g, "e")
  .replace(/ł/g, "l")
  .replace(/ń/g, "n")
  .replace(/ó/g, "o")
  .replace(/ś/g, "s")
  .replace(/ż/g, "z")
  .replace(/ż/g, "z")

console.log(result);