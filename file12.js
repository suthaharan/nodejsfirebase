// Synchronizing objects and extracting a single record
// from the child events
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
logRef.child('count').transaction(function (i){
  return i+1;
});
// firebase data snapshot extraction
// child added gives every single record added
// when you limit to 1 you get the last added record
logRef.orderByKey().limitToLast(1).on('child_added', function(snap){
	console.log('added', snap.val());
});


logRef.on('child_removed', function(snap){
	console.log('removed', snap.val());
});

logRef.on('child_changed', function(snap){
	console.log('changed value', snap.val());
});

// value event with callback whenever there is change in value
logRef.on('value', function(snap){
	console.log('value', snap.val());
});



