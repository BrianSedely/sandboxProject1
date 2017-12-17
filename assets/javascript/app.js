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

var database = firebase.database();

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
                var myImg = $("<img class='gifImage' height=50% width=50%>");
                myImg.attr("src", firebaseUser.photoURL);
                $("#imageProfile").append(myImg);
                $("#firebaseui-auth-container").css("display", "none");

                ownerID = firebaseUser.uid;
                console.log(ownerID);
                database.ref("/owners").on("value", function (snapshot) {

                    // If Firebase has the user stored
                    if (snapshot.child(ownerID).exists()) {
                        console.log("if" + this);
                    } else {
                        // Save the new user in Firebase
                        database.ref("/owners").on("child_added", function (childSnapshot) {
                                highBidder: bidderName,
                                console.log("else" + this);
                            }


                            // database.ref("owners/" + ).set({
                            //     username: name,
                            //     email: email,
                            //     profile_picture: imageUrl
                            // });
                        );


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

                // When the client's connection state changes...
                // This will help us to know which owners are currently logged in
                // which are who would be the population of users who may be able
                // to meet up.
                connectedRef.on("value", function (snap) {

                    // If they are connected..
                    if (snap.val()) {

                        // Add user to the connections list.
                        var con = connectionsRef.push(true);
                        // Remove user from the connection list when they disconnect.
                        con.onDisconnect().remove();
                    }
                });

                // When first loaded or when the connections list changes...
                connectionsRef.on("value", function (snap) {

                    // Display the viewer count in the html.
                    // The number of online users is the number of children in the connections list.
                    // ++This needs to be put into the HTML "Search" page
                    $("#connected-viewers").text(snap.numChildren());
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

                // database variables
                var ownersRef = database.ref("/owners");
                // '.info/connected' is a special location provided by Firebase that is updated
                // every time the client's connection state changes.
                // '.info/connected' is a boolean value, true if the client is connected and false if they are not.
                var connectedRef = database.ref(".info/connected");


                $(document).ready(function () {
                    $('select').material_select();
                });


                // ***********
                // DB CODE
                // ***********