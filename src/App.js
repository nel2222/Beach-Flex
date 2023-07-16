import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/hero';
import Destination from './components/Destination';
import Search from './components/Search';
import Select from './components/Select';
import Carousel from './components/Carousel';
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Destination/>
      <Search/>
      <Select/>
      <Carousel/>
      <Footer/>
    </div>

  );
}

export default App;
