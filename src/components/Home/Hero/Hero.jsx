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
       <a href='#web' className="outfit-extralight"> <div className="card">Web development</div></a>
        <a href='#design'className="outfit-extralight"><div className="card">Design UX/UI</div></a>
        <a href='#marketing' className="outfit-extralight"><div className="card">Marketing</div></a>
      </div>
    </div>
  </>
  );
}

export default Hero;

