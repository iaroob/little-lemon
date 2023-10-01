import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import About from './components/About';
import Specials from './components/Specials';
import Testimonials from './components/Testimonials';
import Description from './components/Description';

function App() {
  return (
    <>
    <Header>
      <Nav></Nav>
    </Header>
    <Main>
      <About></About>
      <Specials></Specials>
      <Testimonials></Testimonials>
      <Description></Description>
    </Main>
    <Footer></Footer>
    </>
  );
}

export default App;
