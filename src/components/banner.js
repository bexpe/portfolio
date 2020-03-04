import React from "react";
import styled from "styled-components";
import banner from "../../assets/images/programista_react.jpg"
import small from "../../assets/images/small.jpg"

const StyledBanner = styled.div`
max-width: 1920px;
background-image: url(${small});
margin: 0 auto;
height: 100vh;
position: relative; 
top: 0;
left: 0;
background-attachment: fixed;
background-repeat: no-repeat;
background-position: center;
background-size: cover;
min-width: 100%;
min-height: 100%;
&::before, &::after {
        content: "";
        position: absolute;
        width: 50%;
        height: 10px;
        background-color: #3b3b3b;
    }
    &::before {
        top: 0;
        left: 0;
    }
    &::after {
        right: 0;
        bottom: 0;
    }

    @media (orientation: landscape) and (min-width: 321px) {
        background-image: url(${banner});
    }

    @media (orientation: portrait) {
        max-height: 90vh;
    }
`;

const Banner = () => (
    <StyledBanner />
)

export default Banner;