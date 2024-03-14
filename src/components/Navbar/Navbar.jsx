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
  const [menuMobileOpen, setMenuMobileOpen] = useState(false)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };


  const handleMobileLinkClick = () => {
    setTimeout(() => {
      setMenuMobileOpen(!menuMobileOpen)
    }, 300)
  }
  return (
    <>
      <div className={`top-nav ${scrolling ? 'scroll-down' : ''}`}>
      <div className='logo-mini'>
        <Link to="/" className='logo-link' onClick={scrollToTop}>
          <img src="/images/logo-nav.svg" alt="logo" />
        </Link>
        </div>
        {windowWidth >= 450 && (
          <div className='menu-desktop outfit-thin'>
            <Link to="#">About</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="#">Contact</Link>
            <Link to="#">Services</Link>
          </div>
        )}
        <div className="action-button">
        <ActionButton text={'GET IN TOUCH'} />
        </div>
      </div>

      {windowWidth < 450 && (
        <>
        <div className={`menu-mobile-hidden ${menuMobileOpen ? 'menu-mobile-open' : '' }`}>
          <div className='menu-mobile-links outfit-bold' onClick={()=>handleMobileLinkClick()}>
            <Link to="#">About</Link>
            <div className='hrdiv'><hr /></div>
            <Link to="/Projects">Projects</Link>
            <div className='hrdiv'><hr /></div>
            <Link to="#">Contact</Link>
            <div className='hrdiv'><hr /></div>
            <Link to="#">Services</Link>
          </div>
        </div>

        <div className={`menu-mobile outfit-regular`}  onClick={()=>setMenuMobileOpen(!menuMobileOpen)}>
        <img className={`menu-close-icon-hidden ${menuMobileOpen ? 'menu-close-icon-open' : '' }`} src="./../../../images/MobileMenuCloseButton.svg" alt="" />
        <img className={`menu-icon-open ${menuMobileOpen ? 'menu-icon-hidden' : '' }`}src="./../../../images/MobileMenu.svg" alt="" />
   
        </div>
        </>

      )}
    </>
  );
}

export default Navbar;

