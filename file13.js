// Synchronizing objects and extracting a single record
// from the child events
var firebase = require('firebase');
var _ = require('lodash');
    
// Initialize Firebase
var config = require("./gsa-budget-new.json");
firebase.initializeApp(config);

//firebase.database.enableLogging(true);

var ref = firebase.database().ref().child("budget");
var budgetInfoRef = ref.child("bugetInfo");
var logRef = ref.child("log");

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
  _.each(snap.getChildren(), function(child){
    console.log(child.val());
  });
	console.log('value', snap.val());
});



