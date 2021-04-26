import React from 'react'
import styled from 'styled-components';
import Arrow from '../Arrow';

const Wrapper = styled.div`
width:320px;
display:flex;
flex-direction:column;
margin:0 0 112px 52px;

:first-child{
    margin-left:0;
}
`;
const Title = styled.p`
margin-top:37px;
font-weight: 500;
font-size: 18px;
line-height: 24px;
`;
const Text = styled.p`
font-size: 16px;
margin-top:26px;
font-weight: normal;
`;
const Icon = styled.img`
display:block;
max-width:66px;
`;
const Link = styled.div`
max-width:168px;
`;

export const BenefitCard = ({ icon, title, children }) => {
    return (
        <Wrapper>
            <Icon src={icon} alt="" />
            <Title>{title}</Title>
            <Text>{children}</Text>
            <Link>
                <Arrow>
                    Learn more
            </Arrow>
            </Link>
        </Wrapper>
    )
}
