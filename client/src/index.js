import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBtduYerVzPzWsr8qwFOOjn3KqGdM2WxDY",
  authDomain: "wordytrend-c9df7.firebaseapp.com",
  databaseURL:
    "https://wordytrend-c9df7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "wordytrend-c9df7",
  storageBucket: "wordytrend-c9df7.appspot.com",
  messagingSenderId: "248766352153",
  appId: "1:248766352153:web:20d3d8565ac9daaf1f9388",
  measurementId: "G-45JXDE3DEL",
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));
