var firebaseConfig = {
    apiKey: "AIzaSyCQ7vs4syQzbj_JU1QSDaMt_XypMLy_mzM",
    authDomain: "myhwproject-5f573.firebaseapp.com",
    databaseURL: "https://myhwproject-5f573.firebaseio.com",
    projectId: "myhwproject-5f573",
    storageBucket: "",
    messagingSenderId: "490283604692",
    appId: "1:490283604692:web:67e8cd154c76f5f1307941"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // var database = firebase.database();

  // variables for form fields

  var trainName;
  var destination;
  var frquency;
  var nextArrival;
  var minutesAway;
  var currentTime = moment();
  console.log(currentTime);



