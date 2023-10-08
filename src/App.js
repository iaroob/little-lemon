import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Home from './components/HomePage';
import BookingPage from './components/BookingPage';
import {Route, Routes, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <div>
        <Header>
          <Nav></Nav>
        </Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
        </Routes>
        </div>
        </BrowserRouter>
  );
}

export default App;
