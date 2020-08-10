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
            I am passionate about minimalism and simplifying my life, which helps me a lot in programming.
        </StyledAboutMeParagraph>
        <StyledAboutMeParagraph>
            I like when websites are simple and intuitive, and they load at unnoticeable speeds.
        </StyledAboutMeParagraph>
        <StyledAboutMeParagraph>
            Therefore I was interested in the web framework, which is Gatsby.js, and this page is made on it.
        </StyledAboutMeParagraph>
        <StyledAboutMeParagraph>
            Besides, my hobby is learning new things and music.
        </StyledAboutMeParagraph>
    </Container>
)


export default AboutMe;