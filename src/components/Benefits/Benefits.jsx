import React from 'react'
import styled from 'styled-components';

import churchIcon from "../../components/assets/img/svg/churchIcon.svg";
import menIcon from "../../components/assets/img/svg/menIcon.svg";
import buildIcon from "../../components/assets/img/svg/buildIcon.svg";

import { BenefitCard } from './BenefitCard';

const Wrapper = styled.div`
max-width:1262px;
background: white;
box-shadow: 0px 2px 20px rgba(21, 24, 36, 0.15993);
margin:0 auto;
margin-top:153px;
position:relative;
`;
const Title = styled.h2`
width:100%;
padding:83px 100px 88px 100px;
font-weight: 500;
font-size: 35px;
line-height: 42px;
background:#fff;
`;
const BenefitsCards = styled.div`
display:flex;
justify-content:center;
padding:0 100px;
`;
export const Benefits = () => {
    return (
        <Wrapper>
            <Title>
                Benefits of Odigo
            </Title>
            <BenefitsCards>
                <BenefitCard icon={churchIcon} title={'Welcome to Odigo!'} >
                    Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.
</BenefitCard>

                <BenefitCard icon={menIcon} title={'Your Personal Japan Guide!'} >
                    Jump off balcony, onto stranger's head. Chase ball of string hide when guests come overgergerge rgerherher  herherherherherherherherherherh re her her he he h  .
</BenefitCard>

                <BenefitCard icon={buildIcon} title={'Promoting Local Businesses'} >
                    Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.
</BenefitCard>
            </BenefitsCards>
        </Wrapper>
    )
}
