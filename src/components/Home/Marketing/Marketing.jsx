import './Marketing.css'
import { useLanguage } from '../../LanguageContext/LanguageContext'
import dataLanguage from './../../../languages/home.json'

function Marketing() {
  const { language } = useLanguage()

  return (
    <div id='marketing' className="marketing">
    <div className="marketing-title">
      <h2 className='outfit-extrabold'>{dataLanguage.Marketing.h2[language]}</h2>
    </div>
    <div className='marketing-info'>
      <p className='outfit-regular'>{dataLanguage.Marketing.p[language]}</p>
    </div>
  </div>
  );
}

export default Marketing

