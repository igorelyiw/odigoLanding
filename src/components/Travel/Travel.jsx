import React from 'react'
import styled from 'styled-components';

import Arrow from '../Arrow';
import TitleWithBorder from '../TitleWithBorder';

import TravelCaptions from './TravelCaptions';

const Wrapper = styled.div`
width:100%;
margin-top:85px;
`;
const TitleWrapper = styled.div`
display:flex;
flex-direction:row;
align-items:baseline;
justify-content:space-between;
padding-left:30px;
`;

const Travel = () => {
    return (
        <Wrapper>
            <TitleWrapper>
                <TitleWithBorder>
                    Get inspired for your next trip
            </TitleWithBorder>
                <Arrow>
                    view all
            </Arrow>
            </TitleWrapper>
            <TravelCaptions />
        </Wrapper>
    )
}

export default Travel
