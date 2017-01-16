// Remove a key and its data

var firebase = require("firebase-admin");

var serviceAccount = require("./gsa-budget.json");
    
// Initialize Firebase
// If you want to give public read write access remove serviceAccount URL
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://budget-xxxx.firebaseio.com"
});

var ref = firebase.database().ref('rani');

ref.remove();
