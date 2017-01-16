// Adding a counter to log object
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


