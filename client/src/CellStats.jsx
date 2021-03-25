import React from 'react'
import styled from "styled-components";
import Stat from "./Stat"

function CellStats() {

    const Container = styled.div`
        height: 100px;
        width: 80%;
        /* background-color: green; */
        display: flex;
        justify-content: space-evenly;
    `;


    return (
        <Container>
            <Stat percent={10} />
            <Stat percent={30} />
            <Stat percent={90} />
        </Container>
    )
}

export default CellStats
