import React from 'react'
import styled from 'styled-components';
import logo from '../components/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <HeaderContainer>
        <Name>
              {/* <img src={logo} width='100' height='100'/> */}
            My Poker Logger 
        </Name>
          <HeaderSearch>
              <SearchIcon />
              <input placeholder='Find Friends' />
          </HeaderSearch>
          <UserInfo>
            <AccountCircleIcon fontSize='large'/>
            First Name
            <ArrowDropDownIcon />
          </UserInfo>
    </HeaderContainer>
  )
}

export default Header;

const HeaderContainer = styled.div`
    background-color: rgb(0,107,167);
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;
const Name = styled.div`
    margin-left: 5px;
    color: white;
    font-size: 30px;
    font-weight: 1000;
    font-family: 'Montserrat', bold;
`;
const HeaderSearch = styled.div`
   font-family: 'Amiko', serif;
   opacity: 1;
   border-radius: 4px;
   background-color: rgb(2, 92, 147);
   display: flex;
   color: white;
   border: 1px white solid;
   align-items: center;
   > input {
    background-color: transparent;
    border: none;
    min-width: 30vw;
    outline: 0;
    color: white;
    ::placeholder {
        color: white;
    }
   }
`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    color: white;
    padding-right: 20px;
    justify-content: space-evenly;
    font-family: 'Amiko', serif;
`;