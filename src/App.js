import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; // Ensure this import is correct
import SignUp from './components/SignUp';
import AllCourses from './components/AllCourses';
import Checkout from './components/Checkout';
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
import SignIn from './components/SignIn';
import Gallery from './components/Gallery';

import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  // aos init
  Aos.init({
    duration: 1800,
    offset: 100,
  });

  return (
    <CartProvider> {/* Ensure CartProvider wraps the Router */}
      <Router>
        <Header />
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/AllCourses" element={<AllCourses />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/" element={
            <>
              <Hero />
              <Cards />
              <Facts />
              <Features />
              <Courses />
              <Pricing />
              <Newsletter />
              <Contact />
              <Footer />
            </>
          } />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;