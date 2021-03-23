import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { DataContext } from "./App";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1em;
  margin: 1em;
`;

const Cell = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  color: white;
  align-items: center;
  padding: 1em;
`;

const CellTitle = styled.h2`
  margin-top: 0;
`;
const CellStats = styled.div``;

const CellVote = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const CellButton = styled.button`
  height: 35px;
  width: 35px;
  border: none;
  border-radius: 20px;
  margin: 0 1em 0 1em;
`;

function Main() {
  const db = useContext(DataContext);
  const [tab, setTab] = useState([]);

  // db.collection("words")
  // .onSnapshot((querySnapshot) => {
  //     var words = [];
  //     querySnapshot.forEach((doc) => {
  //         words.push(doc);
  //     });
  //     setTab(words);
  //     console.log("test")
  // });

  db.collection("words").onSnapshot((querySnapshot) => {
    var words = [];
    querySnapshot.forEach((doc) => {
      console.log("doc data : ", doc);
      words.push(doc);
    });
    // setTab(words);
    console.log("Current words : ", words.join(", "));
  });

  return (
    <StyledGrid>
      {tab.map((doc, i) => {
        return (
          <Cell key={doc.id}>
            <CellTitle>{doc.data().name}</CellTitle>
            <CellStats></CellStats>
            <CellVote>
              <CellButton>-</CellButton>
              {doc.data().votes}
              <CellButton>+</CellButton>
            </CellVote>
          </Cell>
        );
      })}
    </StyledGrid>
  );
}

export default Main;
