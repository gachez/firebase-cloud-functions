const functions = require('firebase-functions');
const admin = require('firebase-admin');
const VirtualLearning = require('./virtualLearningParents.model');
admin.initializeApp();

exports.registerLearner = functions.https.onRequest((req, res) => {
    let learner = new VirtualLearning(req.body);
    learner.save()
    console.log('Success');
    res.send('Succesfully registered virtual learner' + res);
  });
