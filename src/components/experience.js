import React from 'react';
import Heading from "./heading";
import styled from "styled-components";
import Container from "./container";


const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

const StyledExperienceUl = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

const StyledExperienceLi = styled.li`
    list-style-type: none;
    font-size: 2vw;
    line-height: 3vw;
    font-weight: 300;
    margin-bottom: 1.5vw;

    @media (orientation: portrait) {
        font-size: 3.5vw;
        line-height: 4.5vw;
        }
    `;

const StyledExperienceLiHeader = styled(StyledExperienceLi)`
    font-weight: 500;
    color: #3b3b3b;
`;

const Experience = () => (
    <Container>
        <Heading>Doświadczenie</Heading>
        <StyledWrapper><StyledExperienceUl>
            <StyledExperienceLiHeader>Akademia Kodu - kurs frontend</StyledExperienceLiHeader>
            <ul><StyledExperienceLi>styczeń - luty 2020</StyledExperienceLi>
                <StyledExperienceLi>HTML, CSS, JS, React, Gulp, Gatsby.js, GIT (GitLab)</StyledExperienceLi></ul>

            <StyledExperienceLiHeader>Codecool - backend bootcamp</StyledExperienceLiHeader>
            <ul><StyledExperienceLi>wrzesien 2016 - wrzesien 2017</StyledExperienceLi>
                <StyledExperienceLi>Python, Java SE, Java EE, Spring MVC, Mockito, JUnit, GIT (Github, Bitbucket), Agile, Scrum</
                StyledExperienceLi></ul>
        </StyledExperienceUl></StyledWrapper>

    </Container>
);

export default Experience;
