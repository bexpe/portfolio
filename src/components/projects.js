import React from 'react';
import styled from 'styled-components';
import Heading from '../components/heading';
import Container from '../components/container';
import majka from "../../assets/images/recent-projects/majka.png";
import timer from "../../assets/images/recent-projects/timer.png";

// const projects = [
//     { key: majka, img: majka, url: "http://skarpetymajka.pl/" },
//     { key: timer, img: timer, url: "/timer" }
// ];

const StyledMajkaContainer = styled.div`
    display: inline-block;
    background-image: url(${majka});
    height: 300px;
    width: 300px;
    margin: 0 90px 50px 0;
    background-size: cover;
    border: 1px black solid;

    @media (orientation: portrait) {
        height: 260px;
        width: 260px;
    }
`;

const StyledTimerContainer = styled.div`
    display: inline-block;
    height: 300px;
    width: 300px;
    margin-bottom: 50px;
    background-image: url(${timer});
    background-size: cover;
    border: 1px black solid;

    @media (orientation: portrait) {
        height: 260px;
        width: 260px;
    }
`;

const StyledWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: flex-start;

    @media (orientation: portrait) and (max-width: 700px) {
        flex-direction: column;
        align-items: center;
    }
`;

const StyledDiv = styled.div

const Projects = () => (
    <Container>
        <Heading>projects</Heading>
        <StyledWrapper>
            <a href="http://skarpetymajka.pl/"><StyledMajkaContainer></StyledMajkaContainer></a>
            <a href="timer/"><StyledTimerContainer /></a>
        </StyledWrapper>

    </Container>
);

export default Projects;