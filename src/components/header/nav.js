import React from "react";
import styled from "styled-components";
import NavItem from "./nav-item";


const menuElements = [{
    text: 'O mnie',
    target: '#about'
}, {
    text: 'Doświadczenie',
    target: '#experience'
}, {
    text: 'Umiejętności',
    target: '#skills'
}, {
    text: 'Galeria',
    target: '#gallery'
}, {
    text: 'Kontakt',
    target: '#contact'
}];

const StyledUl = styled.ul`
display: flex;
align-items: center;
justify-content: right;
list-style-type: none;
padding:0;
margin:0;
`

const Nav = () => (
    <nav>
        <StyledUl>
            { menuElements.map(menuElement => <NavItem { ...menuElement } />) }
        </StyledUl>
    </nav>
)

export default Nav;
