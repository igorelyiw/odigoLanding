import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
max-width:1440px;
margin:0 auto;
position:relative;
`;
const VideoItem = styled.div`
padding-top:56.25%;
`;
const Content = styled.iframe`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
`;

const Video = () => {
    return (
        <Wrapper>
            <VideoItem />
            <Content src="https://www.youtube.com/embed/Gb0TQ7VeApY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Content>
        </Wrapper>
    )
}

export default Video
