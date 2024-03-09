import './Hero.css'
function Hero() {



  return (
  <>
    <div className='hero'>
      <div className='title'>
        <div className="text">
          <div className='static-text-top'>
            <h1 className='outfit-extralight'>We help you</h1>
          </div>
          <div className='moving-text-top'>
            <h2 className='outfit-regular'>building</h2>
            <h2 className='outfit-regular'>enhacing</h2>
            <h2 className='outfit-regular'>reaching</h2>
            <h2 className='outfit-regular'>building</h2>
          </div>
        </div>
        <div className="text">
          <div>
            <h1 className='outfit-extralight'>your</h1>
          </div>
          <div className='moving-text-bottom'>
            <h2 className='outfit-regular'>ideas</h2>
            <h2 className='outfit-regular'>business</h2>
            <h2 className='outfit-regular'>goals</h2>
            <h2 className='outfit-regular'>ideas</h2>
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="card"><h2 className="outfit-extralight">Web development</h2></div>
        <div className="card"><h2 className="outfit-extralight">Design UX/UI</h2></div>
        <div className="card"><h2 className="outfit-extralight">Marketing</h2></div>
      </div>
    </div>
  </>
  );
}

export default Hero;

