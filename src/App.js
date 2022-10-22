import React, { useState, useEffect } from 'react';
import Header from './Header';
import './App.css';
import Footer from './Footer';
import Body from './BodyComponents/Body';

function App() {
  const [scrolled, set_scrolled] = useState(0);
    useEffect(() => {
        function handleScroll() {
            set_scrolled(window.pageYOffset);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
      <>
          <Header scrolled={scrolled}/>
          <Body />
          <Footer />
      </>
    );
}

export default App;
