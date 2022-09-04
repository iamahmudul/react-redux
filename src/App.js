import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
