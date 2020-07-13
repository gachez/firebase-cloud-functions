const functions = require('firebase-functions');
const admin = require('firebase-admin');
const mongoose = require('mongoose');
const VirtualLearning = require('./virtualLearningParents.model');
admin.initializeApp();

// Connecting to the database
mongoose.connect('mongodb+srv://dbUser:dbPassword@cluster0-cu3wb.gcp.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
  }).then(() => {
    
    return true;    
  }).catch(err => {
      console.log('Could not connect to the database. Exiting now...', err);
      process.exit();
  });

exports.registerLearner = functions.https.onRequest((req, res) => {
  // Configuring the database
mongoose.Promise = global.Promise;


  let learner = new VirtualLearning(req.body);
    learner.save()
    console.log('Success');
    res.send('Succesfully registered virtual learner' + res);
  });
