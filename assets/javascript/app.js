//Initialize Firebase
var config = {
    apiKey: "AIzaSyBHk95-lubVI3oVjkYiWihfYzcL3e5eX8g",
    authDomain: "bc-project1.firebaseapp.com",
    databaseURL: "https://bc-project1.firebaseio.com",
    projectId: "bc-project1",
    storageBucket: "bc-project1.appspot.com",
    messagingSenderId: "947495581665"
};

firebase.initializeApp(config);

//create refrences
var dbRefObject = firebase.database().ref().child("object");
//sync object changes
dbRefObject.on("value", snap => console.log(snap.val()));
//On signout button click, signs out from account.
$("#btnLogout").on("click", function () {
    firebase.auth().signOut();
})
// When logedin
firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        $("#indexBar").css("display", "block");
        // console log Response
        console.log(firebaseUser);
        // Show users name
        $("#imageProfile").prepend("Welcome " + firebaseUser.displayName)
        //Show users photo
        var myImg = $("<img class='gifImage'>");
        myImg.attr("src", firebaseUser.photoURL);
        $("#imageProfile").append(myImg);
        $("#firebaseui-auth-container").css("display", "none");
        ownerID = firebaseUser.uid;
        console.log(ownerID);
        // ++this add-dog needs to be linked to a button on html
        $("#add-dog").on("click", function (event) {
            event.preventDefault();
            console.log("pressed")

           // ++these need to be added as IDs in the HTML
            dogName = $("#dogName").val().trim();
            dogBreed = $("#dogBreed").val().trim();
            dogSize = $("#dogSize").val().trim();
            dogTemp = $("#dogTemp").val().trim();
            dogPrefLg = $("#dogPrefLg").val().trim();
            dogPrefMd = $("#dogPrefMd").val().trim();
            dogPrefSm = $("#dogPrefSm").val().trim();


        console.log(ownerID);
        console.log(dogName);
        console.log(dogSize);
        console.log(dogTemp);
        console.log(dogPrefLg);
        console.log(dogPrefMd);
        console.log(dogPrefSm);
        })
    }
    //if user not loged in console log not logged in
    else {
        console.log("User not Logged in")
        $("#indexBar").css("display", "none");
        $("#firebaseui-auth-container").css("display", "block")
    }
});

// ***********
// VARIABLES
// ***********

// this is the only data point we collect for the owner because
// once the user logs in, the UID from Google provides the owner's
// attributes such as name, photo, email, etc.
var ownerID;

// these are the data points for the dog profile
var dogImage;
var dogName;
var dogBreed;
var dogSize;
// this is temperament
var dogTemp;
// these are the dog's preferences for other size dogs
var dogPrefLg;
var dogPrefMd;
var dogPrefSm;

$(document).ready(function() {
    $('select').material_select();
  });
        

// ***********
// DB CODE
// ***********