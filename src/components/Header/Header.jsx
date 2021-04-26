import React from 'react'
import styled from 'styled-components';

import logo from '../assets/img/svg/odigo-logo.svg';

import Nav from './Nav/Nav';

const Wrapper = styled.div`
display:flex;
justify-content:space-around;
align-items:flex-end;
padding-top:36px;
padding-bottom:20px;
width:100%;
background:${props => props.active ? '#0E1D28' : null} ;
transition:.2s linear;
position:fixed;
top:0;
left:0;
z-index:10;
`;

const Logo = styled.img``;
const Header = ({ isActive }) => {
    return (
        <Wrapper active={isActive}>
            <Logo src={logo} />
            <Nav />
        </Wrapper>
    )
}

export default Header
