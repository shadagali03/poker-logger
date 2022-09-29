import React from 'react'
import styled from 'styled-components';

function PagesTabs() {
  return (
    <TabsContainer>
       <h3 className="tabs">Home</h3> 
       <h3 className="tabs">Calendar</h3> 
       <h3 className="tabs">Data</h3> 
       <h3 className="tabs">Friends</h3> 
    </TabsContainer>
  )
}

export default PagesTabs;

const TabsContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
    .tabs {
        margin-top: 30px;
        margin-right: 30px;
        margin-left: 30px;
        text-decoration: underline;
        cursor: pointer;
    }
`;