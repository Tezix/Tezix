import { useEffect } from 'react';
import './Home.css';

function Home() {
  useEffect(() => {
    setTimeout(()=> {
      const logo = document.querySelector('.initial-logo');
      logo.classList.add('animate-logo');
    }, 1000 )
    
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  return (
    <>
      <div className='initial-logo'>
        <img src="src/assets/images/TezixLogo-XL.webp" alt="YEEE" />
      </div>
    </>
  );
}

export default Home;
