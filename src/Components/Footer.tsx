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
    margin-top: 100px;
    padding-top: 20px;
    padding-bottom: 20px;
    justify-content: center;
`;
