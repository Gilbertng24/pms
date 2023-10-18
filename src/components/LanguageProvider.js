import React, { createContext, useState, useContext, useEffect } from "react";
import i18next from "i18next";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");  //initial to English

  useEffect(() => {
    i18next.changeLanguage(language);
  }, []);

  const changeLanguage = (newLanguage) => {
    i18next.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  const translate = (key) => {
    return i18next.t(key);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export default LanguageProvider;
