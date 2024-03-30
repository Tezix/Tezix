import './Design.css'
import { useLanguage } from '../../LanguageContext/LanguageContext'
import dataLanguage from './../../../languages/home.json'

function Design() {
  const { language } = useLanguage()

  return (
  <div id='design' className="design">
    <div className="design-title">
      <h2 className='outfit-extrabold'>{dataLanguage.Design.firstH2[language]}</h2>
      <h2 className='outfit-extrabold'>{dataLanguage.Design.secondH2[language]}</h2>
    </div>
    <div className='design-info'>
      <p className='outfit-regular'>{dataLanguage.Design.p[language]}</p>
    </div>
  </div>
  );
}

export default Design

