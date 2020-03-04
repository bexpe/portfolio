import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
max-width: 70%;
padding: 0 15px;
margin: 0 auto;
clear: both;

@media (orientation: portrait) {
    max-width: 90%;
}

@media (max-width: 320px) {
    max-width: 90%;
}
`;


const Container = ({ children }) => (
    <StyledContainer>{ children }</StyledContainer>
);

export default Container;