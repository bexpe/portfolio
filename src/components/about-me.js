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
            Pasjonuje mnie minimalizm oraz upraszczanie sobie życia, co bardzo pomaga mi w programowaniu.
        </StyledAboutMeParagraph>
        <StyledAboutMeParagraph>
            Lubię, gdy strony internetowe są proste i intuicyjne, a dodatkowo ładują się w niezauważalnych dla ludzkiego oka prędkościach.
        </StyledAboutMeParagraph>
        <StyledAboutMeParagraph>
            Dlatego też zainteresował mnie framework webowy, jakim jest Gatsby.js i to w nim wykonana jest ta strona.
        </StyledAboutMeParagraph>
        <StyledAboutMeParagraph>
            Poza tym moim hobby jest nauka nowych rzeczy oraz muzyka.
        </StyledAboutMeParagraph>
    </Container>
)


export default AboutMe;