import './Hero.css'
import { useLanguage } from '../../LanguageContext/LanguageContext'
import dataLanguage from './../../../languages/home.json'

function Hero() {
  const { language } = useLanguage()

  return (
  <>
    <div className='hero'>
      <div className='title'>
        <div className="text">
          <div className='static-text-top'>
            <h1 className='outfit-extralight'>{dataLanguage.hero.h1.top[language]}</h1>
          </div>
          <div className={`moving-${language} moving-text-top`}>
            <h2 className='outfit-regular'>{dataLanguage.hero.h2.top.firstWord[language]}</h2>
            <h2 className='outfit-regular'>{dataLanguage.hero.h2.top.secondWord[language]}</h2>
            <h2 className='outfit-regular'>{dataLanguage.hero.h2.top.thirdWord[language]}</h2>
            <h2 className='outfit-regular'>{dataLanguage.hero.h2.top.fourthWord[language]}</h2>
          </div>
        </div>
        <div className="text">
          <div>
            <h1 className='outfit-extralight'>{dataLanguage.hero.h1.bottom[language]}</h1>
          </div>
          <div className={`moving-${language} moving-text-bottom`}>
            <h2 className='outfit-regular'>{dataLanguage.hero.h2.bottom.firstWord[language]}</h2>
            <h2 className='outfit-regular'>{dataLanguage.hero.h2.bottom.secondWord[language]}</h2>
            <h2 className='outfit-regular'>{dataLanguage.hero.h2.bottom.thirdWord[language]}</h2>
            <h2 className='outfit-regular'>{dataLanguage.hero.h2.bottom.fourthWord[language]}</h2>
          </div>
        </div>
      </div>
      <div className="cards">
       <a href='#web' className="outfit-extralight"> <div className="card">{dataLanguage.hero.a.firstWord[language]}</div></a>
        <a href='#design'className="outfit-extralight"><div className="card">{dataLanguage.hero.a.secondWord[language]}</div></a>
        <a href='#marketing' className="outfit-extralight"><div className="card">{dataLanguage.hero.a.thirdWord[language]}</div></a>
      </div>
    </div>
  </>
  );
}

export default Hero;

