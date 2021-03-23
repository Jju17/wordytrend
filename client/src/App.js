import React from "react";
import HeaderContainer from "./Header";
import MainContainer from "./Main";
import randomColor from "randomcolor";
import firebase from "firebase";

export const DataContext = React.createContext();

export default function App() {
  var db = firebase.firestore();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     db.collection("words")
  //       .get()
  //       .then((querySnapshot) => {
  //         setData(querySnapshot);
  //       })
  //       .catch((error) => {
  //         console.log("Error getting documents: ", error);
  //       });
  //   }, []);

  return (
    <DataContext.Provider value={db}>
      <div className="App">
        <HeaderContainer color={randomColor()} />
        <MainContainer />
      </div>
    </DataContext.Provider>
  );
}
