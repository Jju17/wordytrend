import React, { useState, useContext } from "react";
import styled from "styled-components";
import CellStats from "./CellStats"
import { DataContext } from "./App";

const SyledCell = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  color: white;
  align-items: center;
  padding: 1em;
  box-shadow: 1px 1px 4px black;
`;

const CellTitle = styled.h2`
  margin-top: 0;
`;

const CellVote = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const CellButton = styled.button`
  height: 35px;
  width: 35px;
  border: none;
  border-radius: 20px;
  margin: 0 1em 0 1em;
  background-color: #efefef;
`;

function Cell({ doc }) {
  const db = useContext(DataContext);

  function voteNeg() {
    if (localStorage.getItem(`alreadyVotedNeg_${doc.id}`) === null) {
      db.collection("words")
        .doc(doc.id)
        .set({
          name: doc.name,
          votes: doc.votes - 1,
        })
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
      localStorage.setItem(`alreadyVotedNeg_${doc.id}`, true);
    }
  }

  function votePos() {
    if (localStorage.getItem(`alreadyVotedPos_${doc.id}`) === null) {
      db.collection("words")
        .doc(doc.id)
        .set({
          name: doc.name,
          votes: doc.votes + 1,
        })
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
      localStorage.setItem(`alreadyVotedPos_${doc.id}`, true);
    }
  }

  return (
    <SyledCell>
      <CellTitle>{doc.name}</CellTitle>
      <CellStats />
      <CellVote>
        <CellButton onClick={voteNeg}>-1</CellButton>
        {doc.votes}
        <CellButton onClick={votePos}>+1</CellButton>
      </CellVote>
    </SyledCell>
  );
}

export default Cell;
