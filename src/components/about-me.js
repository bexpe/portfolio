import React from "react";
import styled from "styled-components";
import Container from "./container";
import Heading from "../components/heading"

const StyledAboutMeParagraph = styled.p`
    font-size: 2vw;
    line-height: 3vw;
    font-weight: 200;
    color: #3b3b3b;
    margin-bottom: 1vw;

    @media (orientation: portrait) {
        font-size: 3.5vw;
        line-height: 4vw;
        }
`

const AboutMe = () => (
    <Container>
        <Heading>Beata Puzio-Gacek</Heading>
        <StyledAboutMeParagraph>
            I am a technology enthusiast with a strong interest in modern software development and infrastructure.
        </StyledAboutMeParagraph>
        <StyledAboutMeParagraph>
            I enjoy working with Kubernetes and DevOps practices.
        </StyledAboutMeParagraph>
        <StyledAboutMeParagraph>
            On the frontend side, I like developing applications using Vue.js, creating intuitive and responsive user interfaces.
        </StyledAboutMeParagraph>
        <StyledAboutMeParagraph>
            On the backend side, I prefer working with Python, where I can design clean, efficient, and maintainable services.
        </StyledAboutMeParagraph>
        <StyledAboutMeParagraph>
            I am passionate about continuously learning new tools and improving my skills across the full stack.
        </StyledAboutMeParagraph>
    </Container>
)


export default AboutMe;