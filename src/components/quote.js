import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`

    height: 90vh;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-color: #e1e1e1;
    color: #3b3b3b;

    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    margin: 10% 0;
    padding: 8% 2%;

    @media (orientation: portrait) {
        height: 35vh;
        background-color: #d5d6db;
    }
`
const StyledTitle = styled.h3`
    font-weight: 300;
    letter-spacing: 1vw;
    font-style: italic; 
    font-size: 2vw;
    line-height: 3.5vw;
    margin: 30px 0 0 0;

    @media (orientation: portrait) {
        font-weight: 400;
        font-size: 3vw;  
    }
`;
const StyledSubtile = styled.h4` 
    font-weight: 300;
    letter-spacing: 1.5vw;
    font-style: italic;
    font-size: 3vw;
    line-height: 5vw;

    @media (orientation: portrait) {
        font-size: 4vw;
        font-weight: 400;
    }
`;
const StyledAuthor = styled.h5`
    font-weight: 300;
    letter-spacing: 0.5vw;
    font-style: italic;
    font-size: 2vw;
    line-height: 2.5vw;
    margin: 5% 0 0 0;

    @media (orientation: portrait) {
        font-weight: 400;
    }
`;
const Quote = () => (
    <StyledWrapper>
        <StyledTitle>Quality means doing it right</StyledTitle>
        <StyledSubtile>when no one is looking.</StyledSubtile>
        <StyledAuthor>Henry Ford</StyledAuthor>
    </StyledWrapper>
)
export default Quote;