import './WebDevelopment.css'
import { useLanguage } from '../../LanguageContext/LanguageContext'
import dataLanguage from './../../../languages/home.json'

function WebDevelopment() {
  const { language } = useLanguage()

  return (
  <div id='web' className="web-development">
    <div className="web-title">
      <h2 className='outfit-extrabold'>{dataLanguage.WebDevelopment.firstH2[language]}</h2>
      <h2 className='outfit-extrabold'>{dataLanguage.WebDevelopment.secondH2[language]}</h2>
    </div>
    <div className='web-info'>
      <p className='outfit-regular'>{dataLanguage.WebDevelopment.p[language]}</p>
    </div>
  </div>
  );
}

export default WebDevelopment;

