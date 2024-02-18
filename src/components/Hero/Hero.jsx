import './Hero.css'
function Hero() {

  const animatedTextTop = 'building'
  const animatedTextBottom = 'ideas'

  return (
    <>
    <div className='hero'>
      <div className='title'>
        <div className="hide-text">
          <div className="top hero-text">
          <div className="text-0">
            <h1 className='outfit-extralight'>We help you</h1>
            </div>
            <div className="text-1">
            <h1 className='outfit-extralight'>We help you <span className='outfit-regular'>building</span></h1>
            </div>
            <div className="text-2">
            <h1 className='outfit-extralight'>We help you <span className='outfit-regular'>enhacing</span></h1>
            </div>
            <div className="text-3">
            <h1 className='outfit-extralight'>We help you <span className='outfit-regular'>accomplish</span></h1>
            </div>
            <div className="text-4">
            <h1 className='outfit-extralight'>We help you <span className='outfit-regular'>building</span></h1>
            </div>
          </div>
        </div>
        <div className="hide-text">
          <div className="bottom hero-text">
          <div className="text-0">
            <h1 className='outfit-extralight'>your</h1>
            </div>
            <div className="text-1">
            <h1 className='outfit-extralight'>your <span className='outfit-regular'>ideas</span></h1>
            </div>
            <div className="text-2">
            <h1 className='outfit-extralight'>your <span className='outfit-regular'>business</span></h1>
            </div>
            <div className="text-3">
            <h1 className='outfit-extralight'>your <span className='outfit-regular'>objectives</span></h1>
            </div>
            <div className="text-4">
            <h1 className='outfit-extralight'>your <span className='outfit-regular'>ideas</span></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default Hero;

