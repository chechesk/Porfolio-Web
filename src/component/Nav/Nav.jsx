import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { useDarkMode } from '../Config/DarkZone';
import LanguageSwitcher from '../Config/LanguageSwitcher'
import BotonDZ from '../Config/DarkZoneSwitch'

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

  // Agregar un event listener para controlar el scroll y actualizar el estado 'isSticky'
  useEffect(() => {
    let timer;
    
    const handleScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (window.scrollY > 0) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }, 100); // Espera 100 milisegundos después del último evento de scroll para actualizar la clase.
    };

    window.addEventListener('scroll', handleScroll);

    // Remover el event listener al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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

      <div className={`hidden md:block  ${isNavOpen ? 'block' : 'hidden'}`} alt="Nav">
        <ul className="flex flex-col md:flex-row text-center mt-2 md:mt-0">
          <li className='h-[40px] pt-3 text-center w-[140px] text-sm md:text-2xl'>
            <Link to="/" onClick={closeNav} className='text-center Link'>{t('navbar:home')}</Link>
          </li>
          <li className='text-center pt-3 gap-x-4 w-[140px] text-sm md:text-2xl'>
            <Link to="/about" className='text-center whitespace-nowrap font-Robot' onClick={closeNav}>{t('navbar:about')}</Link>
          </li>
          <li className='text-center pt-3 gap-x-4 w-[140px] text-sm md:text-2xl'>
            <Link to="/skills" className='text-center' onClick={closeNav}>{t('navbar:skill')}</Link>
          </li>
          <li className='text-center pt-3 gap-x-4 w-[140px] text-sm md:text-2xl'>
            <Link to="/projects" className='text-center' onClick={closeNav}>{t('navbar:projects')}</Link>
          </li>
          <li className='text-center pt-3 gap-x-4 w-[140px] text-sm md:text-2xl'>
            <Link to="/contact" className='text-center' onClick={closeNav}>{t('navbar:contact')}</Link>
          </li>
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
              <Link to="/" onClick={closeNav} className='text-center Link'>{t('navbar:home')}</Link>
            </li>
            <li className='pt-3'>
              <Link to="/about" className='text-center whitespace-nowrap font-Robot' onClick={closeNav}>{t('navbar:about')}</Link>
            </li>
            <li className='pt-3'>
              <Link to="/skills" className='text-center' onClick={closeNav}>{t('navbar:skill')}</Link>
            </li>
            <li className='pt-3'>
              <Link to="/projects" className='text-center' onClick={closeNav}>{t('navbar:projects')}</Link>
            </li>
            <li className='pt-3'>
              <Link to="/contact" className='text-center' onClick={closeNav}>{t('navbar:contact')}</Link>
            </li>
            <li className='pt-3'>
              <LanguageSwitcher/>
            </li>
            <li className='pt-3  '>
              <BotonDZ/>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default withTranslation()(Nav);
