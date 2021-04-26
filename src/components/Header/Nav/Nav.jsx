import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
display:flex;

`;
const ListItem = styled.div`
margin-right:82px;

a{
    font-size: 18px;
    line-height: 24px;
    color:white;
    text-decoration:none;
 }
  
:last-child{
  margin-right:0;
}

:focus,:hover,:active{
  opacity:.78;
}
`;

const Nav = () => {

  return (
    <Wrapper >
      <ListItem><a href="#">Articles</a></ListItem>
      <ListItem><a href="#">Locations</a></ListItem>
      <ListItem><a href="#">Videos</a></ListItem>
      <ListItem><a href="#">Sign in</a></ListItem>
    </Wrapper>
  )
}

export default Nav
