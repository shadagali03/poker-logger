import Button from '@mui/material/Button';
import { Stack } from '@mui/system';
import React from 'react'
import styled from 'styled-components';
import DataTable from '../components/DataTable';
import HomeTile from '../components/HomeTile';

function Home() {
  var dummyData = {
    date: "09/29/22",
    cash_tourney: "Cash",
    buyIn: "50",
    cashOut: "100",
    time: "5",
    type: "Hold'Em"
  }
  return (
    <HomeContainer>
          <Stack>
      <Box>
        <h2>Recent Activity</h2>
            <DataTable />
      </Box>
        <NewGameButton variant='contained'>
          Add New Game
        </NewGameButton>
        {/* <Button variant="contained" color="success">
          Success
        </Button> */}
      </Stack>
    </HomeContainer>
  )
}

export default Home;

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  background-color: rgb(217,217,217);
  max-height: 450px;
  overflow-y: scroll;
  margin-bottom: 50px;
  border-radius: 10px;
`;
const TileHeaders = styled.div`
  display: flex;
`;

const NewGameButton = styled(Button) ({
});

