import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [scrolling, setScrolling] = useState(false);


  useEffect(() => {
    function handleScroll() {
        if (window.scrollY > 100) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
        window.removeEventListener('scroll', handleScroll)
    }
}, [])


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <div className={`top-nav ${scrolling ? 'scroll-down' : ''}`}>
        <div className='logo-mini'>
          <img src="/images/logo-nav.svg" alt="logo" />
        </div>
        {windowWidth >= 450 && (
          <div className='menu-desktop outfit-thin'>
            <Link to="#">About</Link>
            <Link to="#">Projects</Link>
            <Link to="#">Contact</Link>
            <Link to="#">Services</Link>
          </div>
        )}
        <div className="get-in-touch-button">
          <Link to="#">GET IN TOUCH</Link> 
        </div>
      </div>

      <div className="bottom-nav">
      {windowWidth < 450 && (
        <div className='menu-mobile outfit-regular'>
MENU
</div>

      )}
      </div>
    </>
  );
}

export default Navbar;

