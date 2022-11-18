
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCURID55VB2p8Rm0KXeSX4h30CuPQ0qejc",
      authDomain: "kwitter-5ca73.firebaseapp.com",
      databaseURL: "https://kwitter-5ca73-default-rtdb.firebaseio.com",
      projectId: "kwitter-5ca73",
      storageBucket: "kwitter-5ca73.appspot.com",
      messagingSenderId: "946051888810",
      appId: "1:946051888810:web:5511b9c6cd96ca23bc02d3"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 user_name= localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML= "welcome " + user_name + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names)
row = "<div class='room_name' id=" +Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
      });});}
getData();
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({
            purpose :"adding room name"
      });

      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}
function logout() { localStorage.removeItem("user_name"); 
localStorage.removeItem("room_name");
 window.location = "index.html"; 
}
