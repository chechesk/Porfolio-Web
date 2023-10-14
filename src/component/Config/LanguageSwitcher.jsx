import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css'

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="language-switcher">
      <button
        onClick={() => changeLanguage('es')}
        className={i18n.language === 'es' ? 'active' : ''}
      >
        Español
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={i18n.language === 'en' ? 'active' : ''}
      >
        English
      </button>
    </div>
  );
};

export default LanguageSwitcher;
