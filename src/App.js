import React from 'react';

// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';


// import components
import Header from "./components/Header";
import Hero from './components/Hero';
import Cards from './components/Cards';
import Facts from './components/Facts';
import Features from './components/Features';
import Courses from './components/Courses';
import Pricing from './components/Pricing';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {

  // aos init
  Aos.init({
    duration : 1800,
    offset:100,
    
  })

  return(
    <div className="overflow-hidden ">
      <Header />
      <Hero/>
      <Cards/>
      <Facts/>
      <Features/>
      <Courses/>
      <Pricing/>
      <Newsletter/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
