import React, { useState, useEffect } from 'react';
import Header from './Header';
import './App.css';
import Footer from './Footer';
import Body from './BodyComponents/Body';

function App() {
  const [scrolled, set_scrolled] = useState(0);
  const [theme, set_theme] = useState(localStorage.getItem('theme') || 'light');
    useEffect(() => {
        function handleScroll() {
            set_scrolled(window.pageYOffset);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
    }, [theme]);

    return (
      <div className={`App ${theme}`}>
          <Header scrolled={scrolled} theme={theme} set_theme={set_theme} />
          <Body />
          <Footer theme={theme}/>
      </div>
    );
}

export default App;
