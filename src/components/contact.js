import React from 'react';
import styled from 'styled-components';
import Container from './container';
import Heading from './heading';
import GithubIcon from '../../assets/icons/github.svg';
import LinkedInIcon from '../../assets/icons/linkedin.svg'

const StyledWrapper = styled.div`
    display: flex;
    align-items: stretch;
    margin-bottom: 14vh;
    flex-direction: column;
    margin-bottom: 12vw;
`;

const StyledP = styled.p`
    font-size: 2vw;
    line-height: 3,5vw;
    font-weight: 200;
    color: #3b3b3b;
    cursor: copy;


    @media (orientation: portrait) {
        font-size: 3vw;
        line-height: 4.5vw;
        }
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 50%;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`;

const StyledA = styled.a`
    width: 4vw;
    height: 4vw;
    text-decoration: none;
    color: #3b3b3b;
    text-align: center;

    @media (max-width: 768px) and (orientation: portrait) {
        width: 7vw;
        height: 7vw;
        cursor: pointer;
  }

`;

const Contact = () => (

    <Container>
        <Heading>Contact</Heading>

        <StyledWrapper>
            <StyledDiv>
                <StyledP>beata.k.puzio@gmail.com</StyledP>
                <StyledA href={ 'https://github.com/bexpe' }><img src={ GithubIcon } /></StyledA>
            </StyledDiv>
            <StyledDiv>
                <StyledP>792796788</StyledP>
                <StyledA href={ 'https://pl.linkedin.com/in/beata-puzio-gacek?trk=profile-badge' }><img src={ LinkedInIcon } /></StyledA>
            </StyledDiv>
        </StyledWrapper>
    </Container>
);

export default Contact;