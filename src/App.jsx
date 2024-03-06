import './App.css';
import HomePage from './pages/HomePage/HomePage';
import IntroPage from './pages/IntroPage/IntroPage';
import  { useState, useEffect } from 'react';

function App() {
  const [showNavbarAndBackground, setShowNavbarAndBackground] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNavbarAndBackground(true);
    }, 2000);

    return () => clearTimeout(timer);
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
