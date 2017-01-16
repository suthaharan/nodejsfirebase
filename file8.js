// Another way to add multiple data to nodes

var firebase = require("firebase-admin");

var serviceAccount = require("./gsa-budget.json");
    
// Initialize Firebase
// If you want to give public read write access remove serviceAccount URL
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://budget-xxxx.firebaseio.com"
});

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



