import React from 'react';
import styled from 'styled-components';

import Arrow from '../Arrow';
const Wrapper = styled.div`
display:flex;
flex-direction:${props => props.reverse ? 'row-reverse' : null};
flex-wrap:wrap;
margin-top:80px;

:nth-first-child{
    margin-top:0;
}
`;
const Content = styled.div`
width:50%;
padding:0 50px;
`;
const Image = styled.img`
max-width:508px;
height:354px;
`;
const ImageWrapper = styled.div`
width:50%;
`;
const Title = styled.div`
max-width:357px;
font-weight: 500;
font-size: 30px;
line-height: 40px;
margin-top:20px;
`;
const Link = styled.div`;
margin-top:58px;
`;
const Text = styled.p`
margin-top:56px;
font-size: 16px;
line-height: 24px;
max-width:519px;
`;

const ToursCard = ({ title, city, text, image, reverse }) => {

    return (
        <Wrapper reverse={reverse}>
            <ImageWrapper>
                <Image src={image} alt='image' />
            </ImageWrapper>
            <Content>
                <Title>{title ? title : 'Prefecture in Focus: Tottori'}</Title>
                <Text>{text ? text : "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this if i had the energy but under the bed, for attack the child, open the door"}</Text>
                <Link>
                    <Arrow>
                        view {city ? city : 'Neghboard'}
                    </Arrow>
                </Link>
            </Content>
        </Wrapper>
    )
}

export default ToursCard
