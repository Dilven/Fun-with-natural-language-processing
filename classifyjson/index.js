// The general rule is that Logistic Regression will work better than Naive Bayes, but only if there is enough data.
// Since this is still a pretty small dataset, Naive Bayes works better here. Generally, Logistic Regression takes longer to train as well.

var natural = require('natural');
var fs = require('fs');
var classifier = new natural.LogisticRegressionClassifier();

fs.readFile('training_data.json', 'utf-8', function(err, data){
    if (err){
        console.log(err);
    } else {
        var trainingData = JSON.parse(data);
        train(trainingData);
    }
});

function train(trainingData){
    console.log("Training");
    trainingData.forEach(function(item){
        classifier.addDocument(item.text, item.label);
    });
    var startTime = new Date();
    console.log('start')
    classifier.train();
    console.log('end')
    var endTime = new Date();
    var trainingTime = (endTime-startTime)/1000.0;
    console.log("Training time:", trainingTime, "seconds");
    loadTestData();
}

function loadTestData(){
    console.log("Loading test data");
    fs.readFile('test_data.json', 'utf-8', function(err, data){
        if (err){
            console.log(err);
        } else {
            var testData = JSON.parse(data);
            testClassifier(testData);
        }
    });
}

function testClassifier(testData){
    console.log("Testing classifier");
    var numCorrect = 0;
    testData.forEach(function(item){
        var labelGuess = classifier.classify(item.text);
        if (labelGuess === item.label){
            numCorrect++;
        }
    });
    console.log("Correct %:", numCorrect/testData.length);
}