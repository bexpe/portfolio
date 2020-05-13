import React from "react";
import styled from "styled-components";

const StyledLi = styled.li`
    margin-right: 70px;
    &:last-child{
        margin-right: 0;
    }
`

// const StyledA = styled.a`
// font-family: 'Lato';
// font-size: 18pt;
// line-height: 46pt;
// font-weight: 300;
// color: #989898;
// text-decoration: none;
// text-transform: uppercase;

// `

const NavItem = ({ target, text }) => (
    <StyledLi>
        {/* <StyledA href={ target }>{ text }</StyledA> */ }
    </StyledLi>
)

export default NavItem;