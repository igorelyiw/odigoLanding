import React from 'react';
import styled from 'styled-components';

import heartIcon from '../assets/img/svg/heartIcon.svg';
import commentsIcon from '../assets/img/svg/commentsIcon.svg';

const Wrapper = styled.div`
max-width:30%;
margin-right:20px;
margin-top:20px;
margin-bottom:69px;
`;
const ImageWrapper = styled.div`
position:relative;
width:100%;
`;
const ImageStats = styled.div`
width:100%;
height:54px;
padding:25px;
background: rgba(21, 24, 36, 0.6);
font-size: 18px;
line-height: 24px;
color: #FFFFFF;
display:flex;
align-items:center;
justify-content:space-between;
position:absolute;
bottom:0;
left:0;
`;
const Image = styled.img`
width:100%;
overflow:hidden;
`;
const Content = styled.p`
margin-top:45px;
margin-bottom:31px;
font-size: 16px;
line-height: 24px;
`;
const Link = styled.a`
width:118px;
font-size: 16px;
text-transform:uppercase;
padding:12px 19px;
margin-top:31px;
line-height: 19px;
color: #FFFFFF;
text-decoration:none;
background: #006DFE;
border:0;
transition:.3s;

:hover,:focus,:active{
    background:#1059b9;
}
`;
const ImageStatsTitle = styled.div`
text-transform:uppercase;
`;
const Stats = styled.div``;
const Span = styled.span`
padding-right:20px;
margin-left:14px;
background:url(${props => props.icon}) no-repeat right;
`;

const PlacesCard = ({ image, children }) => {
    return (
        <Wrapper>
            <ImageWrapper>
                <Image src={image}></Image>
                <ImageStats>
                    <ImageStatsTitle>dwvw</ImageStatsTitle>
                    <Stats>
                        <Span icon={heartIcon}>221</Span>
                        <Span icon={commentsIcon}>55</Span>
                    </Stats>
                </ImageStats>
            </ImageWrapper>
            <Content>
                {children}
            </Content>
            <Link href="#">
                see more
          </Link>
        </Wrapper>
    )
}

export default PlacesCard
