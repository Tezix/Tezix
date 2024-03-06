import './HomePage.css'
import Background from './../../components/BackgroundHero/Background';
import Navbar from './../../components/Navbar/Navbar';
import Hero from './../../components/Hero/Hero';

function HomePage() {

  
    return (
      <>
        <>
          <Navbar/>
          <Background />
          <div id='Hero'>
            <Hero />
            </div>
        </>

      </>
    )
  }
  
  export default HomePage
  