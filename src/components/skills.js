import React from 'react';
import styled from 'styled-components';
import Heading from '../components/heading';
import Container from "../components/container";


const StyledWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0;
`;

const StyledUl = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 20vw;
    text-align: center;
`;

const StyledLi = styled.li`
    font-size: 2vw;
    line-height: 3vw;
    font-family: "Lato";
    font-weight: 100;
    margin-bottom: 35px;

    @media (orientation: portrait) {
        font-weight: 200;
        font-size: 3.5vw;
        line-height: 4vw;
    }
`;


const Skills = () => (

    <Container>
        <Heading>Skills</Heading>
        <StyledWrapper>
            <StyledUl>
                <StyledLi>HTML, CSS</StyledLi>
                <StyledLi>JS</StyledLi>
                <StyledLi>React</StyledLi>
                <StyledLi>Gatsby</StyledLi>
                <StyledLi>Wordpress</StyledLi>
            </StyledUl>
            <StyledUl>
                <StyledLi>REST Api</StyledLi>
                <StyledLi>JUnit</StyledLi>
                <StyledLi>SQL</StyledLi>
                <StyledLi>Agile</StyledLi>
                <StyledLi>GIT</StyledLi>
            </StyledUl>
            <StyledUl>
                <StyledLi>Java 8</StyledLi>
                <StyledLi>Spring MVC</StyledLi>
                <StyledLi>Maven</StyledLi>
                <StyledLi>Python</StyledLi>
                <StyledLi>Jet Brains Tools</StyledLi>
            </StyledUl>
        </StyledWrapper>
    </Container>
);

export default Skills;