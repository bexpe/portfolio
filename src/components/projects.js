import React from 'react';
import styled from 'styled-components';
import Heading from '../components/heading';
import Container from '../components/container';
import majka from "../../assets/images/recent-projects/majka-min.png";
import timer from "../../assets/images/recent-projects/timer-min.png";
import euroautokar from "../../assets/images/recent-projects/euroautokar.png";
import europodroze from "../../assets/images/recent-projects/europodroze.png";

const StyledMajkaContainer = styled.div`
    display: inline-block;
    background-image: url(${majka});
    height: 350px;
    width: 350px;
    margin: 0 90px 50px 0;
    background-size: cover;
    border: 1px black solid;

    @media (orientation: portrait) {
        height: 260px;
        width: 260px;
    }
`;

const StyledEuroautokarContainer = styled.div`
    display: inline-block;
    background-image: url(${euroautokar});
    height: 350px;
    width: 350px;
    margin: 0 90px 50px 0;
    background-size: cover;
    border: 1px black solid;

    @media (orientation: portrait) {
        height: 260px;
        width: 260px;
    }
`;

const StyledEuropodrozeContainer = styled.div`
    display: inline-block;
    background-image: url(${europodroze});
    height: 350px;
    width: 350px;
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
    align-items: center;
    width: 100%;
    justify-content: space-between;

    @media (orientation: portrait) and (max-width: 750px) {
        flex-direction: column;
        align-items: center;
    }
`;

const StyledDiv = styled.div

const Projects = () => (
    <Container>
        <Heading>recent projects</Heading>
        <StyledWrapper>
            <a href="http://skarpetymajka.pl/"><StyledMajkaContainer></StyledMajkaContainer></a>
            <a href="http://euroautokar.pl/"><StyledEuroautokarContainer></StyledEuroautokarContainer></a>
            <a href="http://europodroze.pl/"><StyledEuropodrozeContainer></StyledEuropodrozeContainer></a>
        </StyledWrapper>

    </Container>
);

export default Projects;