// Multi-path update at the same time

var firebase = require("firebase-admin");

var serviceAccount = require("./gsa-budget.json");
    
// Initialize Firebase
// If you want to give public read write access remove serviceAccount URL
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://budget-xxxx.firebaseio.com"
});

var ref = firebase.database().ref('budget');

var budgetRef = ref.push();
var budgetRefKey = budgetRef.key;
var payload = {};
var budgetData = {
  name: 'Sambo',
  admin: true,
  items: 10,
  desc: 'Toys',
  created: new Date().getTime()
};

var budgetDataLog = {
  text: "Added data",
  created: new Date().getTime()
};

payload['bugetInfo/' + budgetRefKey] = budgetData;
payload['log/' + budgetRefKey] = budgetDataLog;
ref.update(payload);