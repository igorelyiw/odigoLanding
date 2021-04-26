import React from 'react';
import styled from 'styled-components';

import Tottori from '../assets/img/Tottori.png';
import Kioto from '../assets/img/Kioto.png';

import ToursCard from './ToursCard';


const Wrapper=styled.div`
width:100%;
margin-top:100px;
padding-left:20px;
`;

const text="Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this if i had the energy but under the bed, for attack the child, open the door, ";

const Tours = () => {
    return (
        <Wrapper>
            <ToursCard image={Tottori}/>
            <ToursCard reverse={true} image={Kioto} text={text} city='prefecture' title='Featured Neighborhood: Kyoto’s Arashiyama'/>
        </Wrapper>
    )
}

export default Tours
