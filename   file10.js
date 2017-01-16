// Value event that serves as catch-all - added/removed/changed
// Firebase cannot access 0 indexed arrays
// Push keys are sorted to the milliseconds
var firebase = require('firebase');
    
// Initialize Firebase
var config = require("./gsa-budget-new.json");
firebase.initializeApp(config);

//firebase.database.enableLogging(true);

var ref = firebase.database().ref().child("budget");
var budgetInfoRef = ref.child("bugetInfo");
var logRef = ref.child("log");

var budgetData = {
  name: 'Sambo',
  admin: true,
  items: 10,
  desc: 'Toys',
  created: new Date().toString()
};
var budgetDataRef = budgetInfoRef.push(budgetData);

var budgetDataLog = {
  text: "Added data",
  created: new Date().toString()
};

logRef.child(budgetDataRef.key).set(budgetDataLog);

// value event with callback whenever there is change in value
// value is a catch-all event for state synchronization
logRef.on('value', function(snap){
	console.log('value', snap.val());
});

// another form
// logRef.on('value', snap => console.log(snap.val()));



