const functions = require('firebase-functions');

// auth trigger for new user sign up
exports.newUserSignUp = functions.auth.user()
.onCreate(user => {
    console.log(`User created`, user.email, user.uid);
});

//auth trigger for deleted user
exports.userDeleted = functions.auth.user()
.onDelete(user => {
    console.log(`User deleted`, user.email, user.uid);
});