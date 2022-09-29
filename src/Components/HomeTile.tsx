import { Stack } from '@mui/system';
import React from 'react'
import styled from 'styled-components';

type HomeTileProps = {
    gameInfo : {
        date: string,
        cash_tourney: string,
        cashOut: string,
        buyIn: string,
        time: string,
        type: string;
    }
}
function HomeTile({gameInfo}:HomeTileProps) {
  return (
    <HomeTileContainer>
        <Stack direction={'row'} spacing={9}>
            <p></p>
            <p>{gameInfo.date}</p>
            <p>{gameInfo.cash_tourney}</p>
            <p>{gameInfo.buyIn}</p>
            <p>{gameInfo.cashOut}</p>
            <p>{gameInfo.time}</p>
            <p>{gameInfo.type}</p>
            <p></p>
        </Stack>
    </HomeTileContainer>
  )
}

export default HomeTile;

const HomeTileContainer = styled.div`
    display: flex;
    background-color: red;
    justify-content: space-evenly;
`;