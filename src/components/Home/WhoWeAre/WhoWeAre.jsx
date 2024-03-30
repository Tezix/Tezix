import ActionButton from '../../ActionButton/ActionButton';
import './WhoWeAre.css'
import { useLanguage } from '../../LanguageContext/LanguageContext'
import dataLanguage from './../../../languages/home.json'

function WhoWeAre() {
  const { language } = useLanguage()

  return (
  <>
  <div className="who-we-are">
    <div className='info'>
        <h2 className='outfit-extrabold'>{dataLanguage.WhoWeAre.h2[language]}</h2>
        <p className='outfit-bold'>{dataLanguage.WhoWeAre.p1[language]}</p>
        <p className='outfit-bold'>{dataLanguage.WhoWeAre.p2[language]}</p> 
        <div className='who-we-are-action-button'><ActionButton text={dataLanguage.WhoWeAre.actionButton[language]}/></div>
        
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

