import React from 'react'
import styled from 'styled-components'

import TitleWithBorder from '../TitleWithBorder';
import Nagoya from '../assets/img/Nagoya.jpg'

import PlacesCard from './PlacesCard';
const Wrapper = styled.div`
width:100%;
padding-left:20px;
`;
const Content = styled.div`
width:100%;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
align-items:flex-start;
align-content:stretch;
`;

const text = "Jump off balconyа, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this.";
const Places = () => {
    return (
        <Wrapper>
            <TitleWithBorder>
                Today top places to visit
            </TitleWithBorder>
            <Content>
                <PlacesCard
                    image={Nagoya}
                >
                    {text}
                </PlacesCard>
                <PlacesCard
                    image={Nagoya}
                >
                    {text}
                </PlacesCard>
                <PlacesCard
                    image={Nagoya}
                >
                    {text}
                </PlacesCard>
                <PlacesCard
                    image={Nagoya}
                >
                    {text}
                </PlacesCard>
            </Content>
        </Wrapper>
    )
}

export default Places
