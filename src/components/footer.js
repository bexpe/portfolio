import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    background-color: #e1e1e1;
    background-size: cover;
    background-position: center;
    color: #3b3b3b;
    line-height: 10vw;
    text-align: center;

    @media (orientation: portrait) {
        background-color: #d5d6db;
        line-height: 15vw;
    }
`

const StyledP = styled.p`
    font-size: 1.5vw;

    @media (orientation: portrait) {
        font-size: 2.5vw;
    }
`;

const Footer = () => (
    <StyledWrapper>
        <StyledP>© Copyright 2020. All Rights Reserved.</StyledP>
    </StyledWrapper>
);

export default Footer;