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
        $("#indexBar").css("display","block");
        // console log Response
        console.log(firebaseUser);
        // Show users name
        $("#imageProfile").prepend("Welcome " + firebaseUser.displayName)
        //Show users photo
        var myImg = $("<img class='gifImage'>");
        myImg.attr("src", firebaseUser.photoURL);
        $("#imageProfile").append(myImg);
        $("#firebaseui-auth-container").css("display","none")
    } 
    //if user not loged in console log not logged in
    else {
        console.log("User not Logged in")
        $("#indexBar").css("display","none");
        $("#firebaseui-auth-container").css("display","block")
    }
});