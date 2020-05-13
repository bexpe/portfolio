import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h2`
    margin-top: 15vh;
    font-weight: 500;
    font-family: 'Lato', sans-serif;
    line-height: 5vw;
    font-size: 3vw;
    color: #3b3b3b;
    text-transform: uppercase;

    &::after {
        content: "";
        display: block;
        height: 2px;
        width: 100%;
        background-color: #3b3b3b;
        margin-top: 5vw;
    }

    @media (orientation: portrait) {
        margin: 20vw 0;
        font-size: 4.8vw;
    }
`;


const Heading = ({
    children,
}) => (
        <StyledHeading>{ children }</StyledHeading>
    )

export default Heading;