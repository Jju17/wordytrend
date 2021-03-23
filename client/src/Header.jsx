import React, { useState, useContext } from "react";
import styled from "styled-components";
import { DataContext } from "./App";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ color }) => color};
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-family: "Lobster", cursive;
  color: white;
  letter-spacing: 1px;
  font-size: 3em;
  text-shadow: 1px 1px 2px black;
`;

const NewWord = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Tile = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 250px;
  width: 500px;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TileTitle = styled.h2`
  margin-top: 0;
  color: white;
  font-family: "Nunito", sans-serif;
  font-size: 35px;
`;

const TileInput = styled.input`
  border: none;
  text-align: center;
  border-radius: 10px;
  padding: 10px 20px;
`;

function Header({ color }) {
  const db = useContext(DataContext);
  const [inputData, SetInputData] = useState("");

  function search() {
    db.collection("words")
      .add({
        name: inputData,
        votes: 0,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });

    SetInputData("");
  }

  return (
    <Container color={color}>
      <Title>WordyTrend</Title>
      <NewWord>
        <Tile>
          <TileTitle>Enter a word</TileTitle>
          <TileInput
            type="text"
            value={inputData}
            onChange={(event) => SetInputData(event.target.value)}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                search();
              }
            }}
          />
        </Tile>
      </NewWord>
    </Container>
  );
}

export default Header;
