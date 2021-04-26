import React from 'react'
import styled from 'styled-components';

import arrowIcon from "./assets/img/svg/arrowIcon.svg";

const Link = styled.a`
display:inline-block;
padding-right:59px;
text-transform:uppercase;
font-weight: normal;
font-size: 16px;
line-height: 24px;
color: #006DFE;
text-decoration:none;
background:url(${props => props.image}) no-repeat 95% center;
transition:0.3s;

:hover,:focus{
    background:url(${props => props.image}) no-repeat right center;
}
}
`;

const Arrow = ({ children, link }) => {
    return (
        <Link href={link ? link : '#'} image={arrowIcon}>{children}</Link>
    )
}

export default Arrow
