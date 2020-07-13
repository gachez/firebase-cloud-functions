const functions = require('firebase-functions');
const admin = require('firebase-admin');
const mongoose = require('mongoose');
const cors = require('cors')({origin: true});
const VirtualLearning = require('./virtualLearningParents.model');
admin.initializeApp();

  // Configuring the database
  mongoose.Promise = global.Promise;

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

exports.registerLearner = functions.https.onRequest((request, response) => {
cors(request, response, () => {
  let learner = new VirtualLearning(request.body);
  learner.save()
  console.log('Success');
  response.status(200).send({success: 'Added virtual learner'});
  })
});
