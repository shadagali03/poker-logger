import React from 'react'
import styled from 'styled-components';
import Socials from './Socials';

function Footer() {
  return (
    <FooterContainer>
        <Socials />
    </FooterContainer>
  )
}

export default Footer;

const FooterContainer = styled.div`
    font-family: 'Amiko', serif;
    display: flex;
    background-color: rgb(217,217,217);
    padding-top: 30px;
    position: fixed;
    width: 100%;
    bottom: 0;
    justify-content: center;
`;
const EmojiContainer = styled.div`

`;
