// changing to firebase-admin
// npm install firebase-admin --save

var firebase = require("firebase-admin");

var serviceAccount = require("./gsa-budget.json");
    
// Initialize Firebase
// If you want to give public read write access remove serviceAccount URL
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://budget-xxxx.firebaseio.com"
});

var ref = firebase.database().ref('raja');

ref.push({
  name: 'dubdub',
  admin: true,
  items: 1,
  desc: 'Toys',
  created: new Date().getTime()
});