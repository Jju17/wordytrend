import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { DataContext } from "./App";
import Cell from "./Cell";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1em;
  margin: 1em;
`;

function Main() {
  const db = useContext(DataContext);
  const [tab, setTab] = useState([]);

  useEffect(() => {
    const subscriber = db
      .collection("words")
      .orderBy("votes", "desc")
      .onSnapshot((querySnapshot) => {
        var words = [];
        querySnapshot.docs.forEach((doc) => {
          words.push({ ...doc.data(), id: doc.id });
        });
        setTab(words);
      });
    return subscriber;
    // eslint-disable-next-line
  }, []);

  return (
    <StyledGrid>
      {tab.map((doc, i) => {
        // console.log(doc.id);
        return <Cell doc={doc} key={doc.id} docId={doc.id} />;
      })}
    </StyledGrid>
  );
}

export default Main;
