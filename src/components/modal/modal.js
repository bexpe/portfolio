import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    padding: 50px 80px;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 60vw;
    height: 70vh;
    background-color: #fff;
    box-shadow: 0 20px 40px -10px rgba(#818181, .5);
    position: fixed;
`;

const Modal = () => (
    <StyledWrapper>
        <p>Gracz pierwszy wygrywa!</p>
    </StyledWrapper>
);

export default Modal;