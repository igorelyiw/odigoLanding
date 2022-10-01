import './App.css';
import styled from 'styled-components';
import bg from './components/assets/img/Hero.jpg'
import { Content } from './components/Content';
import { Benefits } from './components/Benefits/Benefits';
import Travel from './components/Travel/Travel';
import Tours from './components/Tours/Tours';
import Places from './components/Places/Places';
import HeaderContainer from './components/Header/HeaderContainer';
import Video from './components/Video';
import Footer from './components/Fotter/Footer';

function App() {
  return (
    <Container background={bg}>
      <Wrapper>
<HeaderContainer/>
<Content/>
<Benefits/>
<Travel/>
<Tours/>
<Places/>
<Video/>
<Footer/>
      </Wrapper>
      test
    </Container>

  );
}

const Container = styled.div`
position:absolute;
top:0;
bottom:0;
left:0;
right:0;
background:url(${props=>props.background});
`;
const Wrapper=styled.div`
max-width:1060px;
height:100vh;
margin:0 auto;
`
export default App;
