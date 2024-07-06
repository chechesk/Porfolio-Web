import React, { useState, useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import { useDarkMode } from '../Config/DarkZone';
import LanguageSwitcher from '../Config/LanguageSwitcher';
import BotonDZ from '../Config/DarkZoneSwitch';

const Nav = ({ t }) => {
  const { isDarkMode } = useDarkMode();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      closeNav();
    }
  };

  useEffect(() => {
    let timer;
    const handleScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsSticky(window.scrollY > 0);
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`flex justify-around ${isSticky ? 'sticky top-0 bg-white shadow' : ''}`}>
      <div alt="logo">  
        <h1 className='my-1 ml-14 text-center text-5xl whitespace-nowrap'> JR Dev </h1>
      </div>

      <div className="block md:hidden">
        <button onClick={toggleNav} className="text-gray-600 focus:outline-none">
          <svg className="w-6 h-6 m-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isNavOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      <div className={`hidden md:block ${isNavOpen ? 'block' : 'hidden'}`} alt="Nav">
        <ul className="flex flex-col md:flex-row text-center mt-2 md:mt-0">
          <li className='h-[40px] pt-3 text-center w-[140px] text-sm md:text-2xl'>
            <a href="#home" onClick={() => handleScrollTo('home')} className='text-center'>{t('navbar:home')}</a>
          </li>
          <li className='text-center pt-3 gap-x-4 w-[140px] text-sm md:text-2xl'>
            <a href="#about" onClick={() => handleScrollTo('about')} className='text-center'>{t('navbar:about')}</a>
          </li>
          <li className='text-center pt-3 gap-x-4 w-[140px] text-sm md:text-2xl'>
            <a href="#skills" onClick={() => handleScrollTo('skills')} className='text-center'>{t('navbar:skill')}</a>
          </li>
          <li className='text-center pt-3 gap-x-4 w-[140px] text-sm md:text-2xl'>
            <a href="#projects" onClick={() => handleScrollTo('projects')} className='text-center'>{t('navbar:projects')}</a>
          </li>
          {/* <li className='text-center pt-3 gap-x-4 w-[140px] text-sm md:text-2xl'>
            <a href="#contact" onClick={() => handleScrollTo('contact')} className='text-center'>{t('navbar:contact')}</a>
          </li> */}
        </ul>
      </div>
      
      <div className="hidden md:block mr-24" alt="Icon">
        <ul className='flex flex-wrap mt-4 mr-00 md:mr-10 gap-4'>
          <li>
            <LanguageSwitcher/>
          </li>
          <li>
            <BotonDZ/>
          </li>
        </ul>
      </div>
      {isNavOpen && (
        <div className="md:hidden w-full">
          <ul className="flex flex-col text-center mt-2">
            <li className='pt-3'>
              <a href="#home" onClick={() => handleScrollTo('home')} className='text-center'>{t('navbar:home')}</a>
            </li>
            <li className='pt-3'>
              <a href="#about" onClick={() => handleScrollTo('about')} className='text-center'>{t('navbar:about')}</a>
            </li>
            <li className='pt-3'>
              <a href="#skills" onClick={() => handleScrollTo('skills')} className='text-center'>{t('navbar:skill')}</a>
            </li>
            <li className='pt-3'>
              <a href="#projects" onClick={() => handleScrollTo('projects')} className='text-center'>{t('navbar:projects')}</a>
            </li>
            {/* <li className='pt-3'>
              <a href="#contact" onClick={() => handleScrollTo('contact')} className='text-center'>{t('navbar:contact')}</a>
            </li> */}
            <li className='pt-3'>
              <LanguageSwitcher/>
            </li>
            <li className='pt-3'>
              <BotonDZ/>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default withTranslation()(Nav);