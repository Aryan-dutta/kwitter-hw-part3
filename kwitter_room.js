
//ADD YOUR FIREBASE LINKS HERE

 // Your web app's Firebase configuration
 var firebaseConfig = {
       apiKey: "AIzaSyAvle1YpREl7_ueZZQ5KnYp9t2060ZR_pI",
       authDomain: "classtest-f4f87.firebaseapp.com",
       databaseURL: "https://classtest-f4f87.firebaseio.com",
       projectId: "classtest-f4f87",
       storageBucket: "classtest-f4f87.appspot.com",
       messagingSenderId: "234075504876",
       appId: "1:234075504876:web:1e4e2f66991e80c475a5c9"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
})

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id = "+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");

window.location = "index.html";
}