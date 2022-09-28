import React from 'react'
import { BsInstagram, BsGithub, BsFacebook, BsLinkedin } from 'react-icons/bs';
import Stack from '@mui/material/Stack';
import { Container } from '@mui/system';
import styled from 'styled-components';



function Socials({ mycolor = 'white' }) {
    console.log(mycolor)
    const buttonStyle = {
        color: mycolor,
        cursor: 'pointer'

    }
    const openInNewTab = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <Container1>
            <Stack direction='row' justifyContent='center' spacing={4}>
                <BsGithub size='2em' onClick={() => openInNewTab('https://github.com/shadagali03')} style={buttonStyle} />
                <BsLinkedin size='2em' onClick={() => openInNewTab('https://www.linkedin.com/in/sarang-hadagali-3567101b1/')} style={buttonStyle} />
                <BsFacebook size='2em' onClick={() => openInNewTab('https://www.facebook.com/sarang.hadagali/')} style={buttonStyle} />
                <BsInstagram size='2em' onClick={() => openInNewTab('https://www.instagram.com/sarang.hadagali/')} style={buttonStyle} />
            </Stack>
                <p>
                    Sarang Hadagali
                </p>
        </Container1>
    )
}

export default Socials;

const Container1 = styled.div`
    margin-right: 80px;
`;