
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyD_4Gd-CiYXgVu0p2OfxMVU6tNErSpbwso",
      authDomain: "kwitter-3214f.firebaseapp.com",
      databaseURL: "https://kwitter-3214f-default-rtdb.firebaseio.com",
      projectId: "kwitter-3214f",
      storageBucket: "kwitter-3214f.appspot.com",
      messagingSenderId: "717249081573",
      appId: "1:717249081573:web:0612b255524253dbc0a40c",
      measurementId: "G-YNG23TP7X0"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     user_name = localStorage.getItem("user_name");

     document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

     function addRoom()
     {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
     }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

      //Start code
       console.log("Room Name-" + Room_names);
       row = "<div class='room_name' id = "+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      //End code
      });
   });
}
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


