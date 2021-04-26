import React from 'react'
import styled from 'styled-components';

const Wrapper=styled.h2`
font-weight: 500;
font-size: 35px;
position:relative;
padding-bottom:10px;
::after{
    dispay:block;
    content:'';
    width:263px;
    height:3px;
    position:absolute;
    background-color:#006DFE;
    bottom:0;
    left:0;
}
`;
const TitleWithBorder = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default TitleWithBorder
