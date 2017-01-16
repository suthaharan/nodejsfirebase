// First app to establish connection
// If permission denied, check the firebase rules to make sure "read", "write" access is 
// open to public for the tests to carried

var firebase = require('firebase');
    
// Initialize Firebase
var config = {
    apiKey: "[[Key here]]",
    authDomain: "budget-xxxx.firebaseapp.com",
    databaseURL: "https://budget-xxxx.firebaseio.com",
    storageBucket: "budget-xxxxx.appspot.com",
    messagingSenderId: "xxxxxx"
};
firebase.initializeApp(config);

var ref = firebase.database().ref('acestra');

ref.push({
  name: 'Sambo',
  admin: true,
  items: 10,
  desc: 'Toys',
  created: new Date().getTime()
});


