import React from 'react'
import styled from 'styled-components'

import logo from '../assets/img/svg/odigo-logo.svg'

const Wrapper = styled.footer`
height:370px;
background: #0E1D28;
display:flex;
justify-content:space-around;
align-items:center;
`;
const Logo = styled.img`
align-items:flex-start;
height:64px;
`;
const LinkWrapper = styled.div`
width:50%;
display:flex;
justify-content:space-between;
flex-wrap:wrap;
`;
const LinkContainer = styled.div`
display:flex;
flex-direction:column;
`;
const Link = styled.a`
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
text-decoration:none;

&:first-child{
    font-weight: 500;
font-size: 18px;
line-height: 24px;
}

&:hover,:focus{
    opacity:.75;
}
`;
const Footer = () => {
    return (
        <Wrapper>
            <Logo src={logo} />
            <LinkWrapper>
                <LinkContainer>
                    <Link href="#!">Company</Link>
                    <Link href="#!">About</Link>
                    <Link href="#!">Team</Link>
                    <Link href="#!">Careers</Link>
                    <Link href="#!">Privacy Policy</Link>
                </LinkContainer>

                <LinkContainer>
                    <Link href="#!">Locations</Link>
                    <Link href="#!">Tokyo</Link>
                    <Link href="#!">Kyoto</Link>
                    <Link href="#!">Osaka</Link>
                    <Link href="#!">Hokkaido</Link>
                </LinkContainer>

                <LinkContainer>
                    <Link href="#!">Social Media</Link>
                    <Link href="#!">Facebook</Link>
                    <Link href="#!">Twitter</Link>
                    <Link href="#!">Instagram</Link>
                    <Link href="#!">YouTube</Link>
                </LinkContainer>
            </LinkWrapper>
        </Wrapper>
    )
}

export default Footer
