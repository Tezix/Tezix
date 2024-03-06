import './App.css';
import HomePage from './pages/HomePage/HomePage';
import IntroPage from './pages/IntroPage/IntroPage';
import  { useState, useEffect } from 'react';
import FontFaceObserver from 'fontfaceobserver';

function App() {
  const [showNavbarAndBackground, setShowNavbarAndBackground] = useState(false);

  useEffect(() => {
    const font = new FontFaceObserver('Outfit'); // Replace 'Outfit' with the font family name you're using

    font.load().then(() => {
      const timer = setTimeout(() => {
        setShowNavbarAndBackground(true);
      }, 2000);
    return () => clearTimeout(timer);

    });



   

  }, []);

  return (
    <>
          {showNavbarAndBackground ?
            <HomePage/>
            :
            <IntroPage />
          }
    </>
  );
}

export default App;
