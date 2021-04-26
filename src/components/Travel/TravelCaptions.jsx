import React from 'react'
import styled from 'styled-components'

import mount from '../../components/assets/img/1.png';
import kyoto from '../../components/assets/img/2.png';
import tokyo from '../../components/assets/img/3.png';
import niigata from '../../components/assets/img/4.png';
import sapporo from '../../components/assets/img/5.png';

const Wrapper = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:space-between;

`;
const BigImage = styled.img`
max-height:354px;
width:50%;

`;
const Image = styled.img`
max-height:354px;
width:33%;
`;
const TravelCaptions = () => {
    return (
        <Wrapper>
            <BigImage src={mount} alt="" />
            <BigImage src={kyoto} alt="" />
            <Image src={tokyo} alt="" />
            <Image src={niigata} alt="" />
            <Image src={sapporo} alt="" />
        </Wrapper>
    )
}

export default TravelCaptions
