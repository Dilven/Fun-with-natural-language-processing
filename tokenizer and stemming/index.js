const natural = require('natural');
const stemmer = natural.PorterStemmer;

const jiraDescription = "Elasticsearch keyword search research";
const commitDescription = "Added implementation keyword search";

console.log(stemmer.tokenizeAndStem(jiraDescription));
console.log(stemmer.tokenizeAndStem(commitDescription));


const pluralWord = "cups";

console.log(stemmer.tokenizeAndStem(pluralWord));

const commit = "I added error handling";

const sentence = "Im the boss";

console.log(stemmer.tokenizeAndStem(commit));
console.log(stemmer.tokenizeAndStem(sentence));


const stopWords = "Are you there";

console.log(stemmer.tokenizeAndStem(stopWords));