const natural = require('natural');
const tfidf = new natural.TfIdf;
const stemmer = natural.PorterStemmer;

const keywordsForDescription = [];

const descriptionJiraIssue = `
  As a system admin I want to have the possibility to track who is where
  one dashboard with tiles
  each tile is coloured white/grey
  each tile has a tag with Location
  each tile has a tag with photo
  each tile has a tag with home office
  each tile has a "usually starts at" entry
  tiles are grouped by and can be filtered by location
  tiles are sorted by name within groups
`;

const commits = [
  "Added status bar",
  "Addded checkout button in top bar",
  "User can lock/unlock checkpoint",
  "Fix filters",
  "finx changing languages",
  "finx changing languages",
  "Added tiles to dashboard",
];

const keywordsForCommit = stemmer.tokenizeAndStem(commits[6]);

tfidf.addDocument(descriptionJiraIssue);
tfidf.listTerms(0).forEach((item, index) => {
  if(index < 4) {
    keywordsForDescription.push(stemmer.stem(item.term));
  };
});

var count = keywordsForDescription.filter(item => {
  return keywordsForCommit.indexOf(item) != -1;
});

console.log(count.length > 1, count.length);
console.log(keywordsForDescription)
console.log(keywordsForCommit)