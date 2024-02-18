import './HomePage.css'
import  { useState, useEffect } from 'react';
import Background from './../../components/BackgroundHero/Background';
import Navbar from './../../components/Navbar/Navbar';
import Hero from './../../components/Hero/Hero';

function HomePage() {

  const [showNavbarAndBackground, setShowNavbarAndBackground] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNavbarAndBackground(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
    return (
      <>
          {showNavbarAndBackground && (
        <>
          <Navbar/>
          <Background />
          
          <div id='Hero'><Hero /></div>
        </>
      )}
      </>
    )
  }
  
  export default HomePage
  