import './HomePage.css'
import Hero from '../../components/Home/Hero/Hero'
import WhoWeAre from '../../components/Home/WhoWeAre/WhoWeAre'
import WebDevelopment from '../../components/Home/WebDevelopment/WebDevelopment'
import Design from '../../components/Home/Design/Design'
import Marketing from '../../components/Home/Marketing/Marketing'

function HomePage() {
  
    return (
      <>
        <div id='Hero'>
          <Hero />
          <WhoWeAre />
          <WebDevelopment />
          <Design />
          <Marketing />
        </div>
      </>
    )
  }
  
  export default HomePage
  