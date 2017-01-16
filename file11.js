// Keeping track of object added/removed/changed events
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

// adding a count parameter to keep track of the total objects
logRef.child('count').transaction(function (i){
  return i+1;
});

// firebase data snapshot extraction
// child added event is a granular change
// it is a list synchronization and reads every single child object
// real time database sorts data out lexicographically and when printed it does not care about sort order
// when push is used, items are added to the bottom of the list
logRef.on('child_added', function(snap){
	console.log('added', snap.val());
});

// child_removed event listens when child is removed
logRef.on('child_removed', function(snap){
	console.log('removed', snap.val());
});

logRef.on('child_changed', function(snap){
	console.log('changed value', snap.val());
});



