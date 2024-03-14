import ActionButton from '../../ActionButton/ActionButton';
import './WhoWeAre.css'

function WhoWeAre() {



  return (
  <>
  <div className="who-we-are">
    <div className='info'>
        <h2 className='outfit-extrabold'>Who We Are</h2>
        <p className='outfit-bold'>We're an independent agency of developers and designers committed to realizing your ideas. </p>
        <p className='outfit-bold'>Our focus is on innovative web solutions tailored to your needs. </p> 
        <div className='who-we-are-action-button'><ActionButton text={'BUILD TOGETHER'}/></div>
        
    </div>
    <div className='images'>
      <div className="image">
        <img src="./../../../../images/WhoWeAreImage1.jpeg" alt="" />
      </div>
      <div className="image image-2">
        <img src="./../../../../images/WhoWeAreImage2.jpeg" alt="" />
      </div>
    </div>
   
  </div>
  
  </>
  );
}

export default WhoWeAre

