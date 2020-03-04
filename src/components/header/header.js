import React from "react";
import styled from "styled-components";
import LogoSVG from "../../../assets/images/logo-short.png";
import Nav from "./nav";
import Container from "../container";

const StyledLogo = styled.img`
height: 40px;
width: 180px;
margin: 22px 0px;
`


const Header = () => (

  <Container>
    <StyledLogo src={ LogoSVG } alt="frontend developer react" />
    <Nav />
  </Container>
)


export default Header;