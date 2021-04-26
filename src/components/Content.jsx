import React from 'react';
import styled from 'styled-components';

import circleIcon from '../components/assets/img/svg/circleIcon.svg';

const Title = styled.h1`
max-width:619px;
font-size: 50px;
line-height: 60px;
color:white;
`;
const Text = styled.p`
max-width:546px;
color:white;
font-size: 16px;
line-height: 24px;
margin-top:22px;
`;
const Wrapper = styled.div`
margin-top:184px;
padding-left:30px;
`;
const SearchForm = styled.div`
display:flex;
flex-wrap:wrap;
`;
const Input = styled.input`
width:297px;
background:transparent url(${circleIcon}) no-repeat left 7px;
background-size:20px;
padding-left:43px;
padding-bottom:22px;
color: #FFFFFF;
margin-right:60px;
font-weight: 500;
font-size: 18px;
border:0;
border-bottom:2px solid #BFC0C5;
::placeholder{
    color: #FFFFFF;
    font-size: 18px;
font-weight: 500;
}
`;
const SubmitButton = styled.button`
color:white;
font-size: 24px;
padding:15px 39px;
background: #1B7DFF;
border:0;

:hover,:focus,:active{
    background:#1059b9;
}
`;

export const Content = () => {
    return (
        <Wrapper>
            <Title>
                Discover Amazing places in Japan
            </Title>
            <Text>
                Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this if i had the energy but under the bed, for attack the child, open the door,
            </Text>
            <SearchForm>
                <Input placeholder='What would you like to do?' />
                <Input placeholder='Where would you like to go?' />
                <SubmitButton type="submit">Search</SubmitButton>
            </SearchForm>
        </Wrapper>
    )
}
