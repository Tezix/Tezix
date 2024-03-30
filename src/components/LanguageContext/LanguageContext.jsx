import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
const useLanguage = () => useContext(LanguageContext);

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en')

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
export {
    LanguageContext,
    useLanguage,
    LanguageProvider
  }
  