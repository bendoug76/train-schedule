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
  var database = firebase.database();


  // onclick for grabing user input

  $("#add-tain").on("click", function(){
  
  var trainName = $("#train-name").val().trim();
  var destination = $("#destination").val().trim();
  var trainTime = $("#train-time").val().trim();
  var frquency = $("#frequency").val().trim();
// temp obj for new train data
  var newTrain = {
      name: trainName,
      place: destination,
      time: trainTime,
      freq: frquency
  }
// upload new train to firebase
  database.ref().push(newTrain);
  console.log(newTrain);

  // clear text from inputs
  $("#train-name").val("");
  $("#destination").val("");
  $("#train-time").val("");
  $("#frequency").val("");

  return false;

  });

  //add trains to database

  database.ref().on("append_child", function(childSnapshot){
    console.log(childSnapshot.val());

  var trainName = childSnapshot.val().name;
  var destination = childSnapshot.val().place;
  var trainTime = childSnapshot.val().time;
  var frequency = childSnapshot.val().freq;

  var firstTrainPushedBack = moment(trainTime, "HH:mm");
  var currentTime = moment().format("HH:mm");
  var timeDifference = moment().diff(moment(firstTrainPushedBack),"minutes");
  
  var timeRemaining = timeDifference % frequency;

  var minAway = frequency - timeRemaining;

  var nextTrain = moment().add(minAway, "minutes").format("HH:mm");

  $(".table>tbody").append("<tr><td>"+ trainName + "</td><td>" + destination + "</td><td>" + nextTrain + "</td><td>" + frequency + "</td><td>" + minAway + "</td><tr>");

  });


