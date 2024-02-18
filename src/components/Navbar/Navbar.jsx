import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar() {


  return (
    <>
    <div className='nav'>
      <div className='logo-mini'>
        <img src="src/assets/images/logo-nav.svg" alt="logo" />
      </div>
      <div className='menu-desktop outfit-thin'>
        <Link to="#">About</Link>
        <Link to="#">Projects</Link>
        <Link to="#">Contact</Link>
        <Link to="#">Services</Link>
      </div>
      <div className="get-in-touch-button">
        <Link to="#">GET IN TOUCH</Link> 
      </div>
    </div>
    </>
  );
}

export default Navbar;

