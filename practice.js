
//ADD YOUR FIREBASE LINKS
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

function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose :"adding user"
    });
}