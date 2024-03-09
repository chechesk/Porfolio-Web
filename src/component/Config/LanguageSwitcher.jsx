import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css'

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className=" ">
      <button
        onClick={() => changeLanguage('es')}
        className={i18n.language === 'es' ? 'active text-md ' : ' text-sm mx-4'}
      >
        SP
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={i18n.language === 'en' ? 'active text-md  ' : ' text-sm ml-5' }
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
