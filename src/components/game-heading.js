import React from 'react';
import styled from 'styled-components';

const StyledGameHeading = styled.h2`
    display: flex;
    margin-top: 10vw;
    margin-bottom: 10vw;
    text-transform: uppercase;
    justify-content: center;
    font-weight: 500;
    font-family: 'Lato';
    line-height: 6vw;
    font-size: 5vw;
    color: #3b3b3b;

    @media (min-width: 640px) {
        line-height: 5vw;
        font-size: 4vw;
    }
`;

const GameHeading = ({
    children,
}) => (
        <StyledGameHeading>{ children }</StyledGameHeading>
    )

export default GameHeading;
