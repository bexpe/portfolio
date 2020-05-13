import React from 'react';
import styled from 'styled-components';
import Heading from '../components/heading';
import Container from '../components/container';
import majka from "../../assets/images/recent-projects/majka.png"

const StyledImgContainer = styled.div`
    display: inline-block;
    height: 300px;
    width: 300px;
    margin-bottom: 50px;
    background-image: url(${majka});
    background-size: cover;

    @media (orientation: portrait) {
        height: 260px;
        width: 260px;
    }
`;

const StyledWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: space-between;

    @media (orientation: portrait) and (max-width: 700px) {
        flex-direction: column;
        align-items: center;
    }
`;

const StyledDiv = styled.div

const Projects = () => (
    <Container>
        <Heading>Ostatnie projekty</Heading>
        <StyledWrapper>
            <StyledImgContainer><a href="http://skarpetymajka.pl/"><StyledImgContainer /></a></StyledImgContainer>
            {/* <StyledImgContainer src="../assets/images/recent-projects/majka.png" alt="ikona odnoszaca do strony flyits"></StyledImgContainer>
            <StyledImgContainer src="../assets/images/recent-projects/majka.png" alt="ikona odnoszaca do strony aleksandramagrysmua"></StyledImgContainer>
            <StyledImgContainer><a href="http://skarpetymajka.pl/"><StyledImgContainer /></a></StyledImgContainer>
            <StyledImgContainer src="../assets/images/recent-projects/majka.png" alt="ikona odnoszaca do strony flyits"></StyledImgContainer>
            <StyledImgContainer src="../assets/images/recent-projects/majka.png" alt="ikona odnoszaca do strony aleksandramagrysmua"></StyledImgContainer> */}
        </StyledWrapper>

    </Container>
);

export default Projects;