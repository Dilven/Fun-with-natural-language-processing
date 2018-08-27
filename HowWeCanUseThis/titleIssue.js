const natural = require('natural');
const stemmer = natural.PorterStemmer;

const issues = [ 
  "User current status in top bar",
  "Checkout button in top bar",
  "Lock/Unlcok checkpoint",
  "Filters not working for Teams (filter fields)",
  "Changing languages does not work",
  "Filters not working for Teams (filter fields)",
];

const commits = [
  "Added status bar",
  "Addded checkout button in top bar",
  "User can lock/unlock checkpoint",
  "Fix filters",
  "finx changing languages",
  "finx changing languages"
];

const keywordsForFirstIssue = stemmer.tokenizeAndStem(issues[5]);
const keywordForFirstCommit = stemmer.tokenizeAndStem(commits[5]);
console.log(keywordsForFirstIssue, keywordForFirstCommit)

var count = keywordsForFirstIssue.filter(item => {
  return keywordForFirstCommit.indexOf(item) != -1;
});

console.log(count.length > 1, count.length);