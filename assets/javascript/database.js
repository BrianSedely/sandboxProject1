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

// ***********
// CODE
// ***********
$(document).ready(function () {

    // checking if user is logged in.
    // all owner and dog profiles need to be tied to an ownerID.
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            ownerID = firebaseUser.uid;

            // ++this add-dog needs to be linked to a button on html
            $("#add-dog").on("click", function (event) {
                event.preventDefault();

                // ++these need to be added as IDs in the HTML
                dogName = $("#dogName").val().trim();
                dogBreed = $("#dogBreed").val().trim();
                dogSize = $("#dogSize").val().trim();
                dogTemp = $("#dogTemp").val().trim();
                dogPrefLg = $("#dogPrefLg").val().trim();
                dogPrefMd = $("#dogPrefMd").val().trim();
                dogPrefSm = $("#dogPrefSm").val().trim();
            })
        } else {};
    })
})