import React from "react";
import HeaderContainer from "./Header";
import MainContainer from "./Main";
import randomColor from "randomcolor";
import firebase from "firebase";
import short from "short-uuid";

export const DataContext = React.createContext();

export default function App() {
  var db = firebase.firestore();

  function getUserID() {
    let uID = localStorage.getItem("uID");
    if (!uID) {
      let newID = short.generate();
      localStorage.setItem("uID", newID);
      return newID;
    }

    return uID;
  }

  const userID = getUserID();
  return (
    <DataContext.Provider value={db}>
      <div className="App">
        <HeaderContainer color={randomColor()} />
        <MainContainer userID={userID} />
      </div>
    </DataContext.Provider>
  );
}
