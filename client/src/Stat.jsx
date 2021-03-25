import React from 'react'
import styled from 'styled-components'

const StyledStat = styled.div`
        width: 20%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    `;

    const Level = styled.div`
        height: 80%;
        background-color: rgba(246, 255, 254, 0.363);
        width: 8px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    `;

    const AccurateLevel = styled.div`
        height: ${props => props.percent || 10}%;
        background-color: rgba(255, 255, 255, 0.945);
        width: 8px;
    `;

    const Text = styled.div`
        height: 20%;
    `;


function Stat({ percent }) {

    console.log(percent);
    return (
        <StyledStat>
            <Level><AccurateLevel percent={percent}/></Level>
            <Text>J</Text>
        </StyledStat>
    )
}

export default Stat
