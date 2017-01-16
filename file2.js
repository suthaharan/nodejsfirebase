// Config in separate file
// https://console.cloud.google.com/apis/credentials
// Now you can check the Rules tab in firebase to set appropriate authentication parameters

var firebase = require('firebase');
    
// Initialize Firebase
// If you want to give public read write access remove serviceAccount URL
firebase.initializeApp({
  serviceAccount: "./gsa-budget.json",
  databaseURL: "https://budget-xxxx.firebaseio.com"
});

var ref = firebase.database().ref('acestra');

ref.push({
  name: 'Vikatan',
  admin: true,
  items: 1,
  desc: 'Toys',
  created: new Date().getTime()
});
