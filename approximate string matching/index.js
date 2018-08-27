var natural = require('natural');
var source = 'The RainCoas BookStore';
var target = 'All the best books are here at the Rain Coats Book ';

console.log(natural.LevenshteinDistance(source, target, {search: true}));

let jiraDescription = "Elasticsearch keyword search research";
let commitDescription = "Added implementation keyword search";

console.log(natural.LevenshteinDistance(jiraDescription, commitDescription, {search: true}));