import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';
import ActionButton from '../ActionButton/ActionButton';
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
        <a href="#" className='logo-link'>
          <img src="/images/logo-nav.svg" alt="logo" />
        </a>
        </div>
        {windowWidth >= 450 && (
          <div className='menu-desktop outfit-thin'>
            <Link to="#">About</Link>
            <Link to="#">Projects</Link>
            <Link to="#">Contact</Link>
            <Link to="#">Services</Link>
          </div>
        )}
        <div className="action-button">
        <ActionButton text={'GET IN TOUCH'} />
        </div>
      </div>

      {windowWidth < 450 && (
        <div className='menu-mobile outfit-regular'>
MENU
</div>

      )}
    </>
  );
}

export default Navbar;

