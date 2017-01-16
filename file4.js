// create a child node key, print key and push values to it

var firebase = require("firebase-admin");

var serviceAccount = require("./gsa-budget.json");
    
// Initialize Firebase
// If you want to give public read write access remove serviceAccount URL
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://budget-xxxx.firebaseio.com"
});

var ref = firebase.database().ref('raja/example/store');

var budgetRef = ref.push();
console.log(budgetRef.key);

budgetRef.set({
  name: 'sdgf',
  admin: true,
  items: 1,
  desc: 'Toys',
  created: new Date().getTime()
});