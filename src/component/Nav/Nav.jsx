import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { useDarkMode } from '../Config/DarkZone';
import './Nav.css';


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
    <nav className={`nav ${isSticky ? 'sticky' : ''} ${isNavOpen ? 'nav-open' : ''}`}>

      <div className="nav__large">
        
        <ul className="nav__link">
          <li>
            <Link to="/" onClick={closeNav} className='Link'>{t('navbar:home')}</Link>
          </li>
          <li>
            <Link to="/about" onClick={closeNav}>{t('navbar:about')}</Link>
          </li>
          <li>
            <Link to="/skills" onClick={closeNav}>{t('navbar:skill')}</Link>
          </li>
          <li>
            <Link to="/projects" onClick={closeNav}>{t('navbar:projects')}</Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeNav}>{t('navbar:contact')}</Link>
          </li>
        </ul>
      </div>

      {/* Contenido para dispositivos móviles */}
      <div className="nav__mobile">
        <button className="menu-icon" onClick={toggleNav}>
          ☰
        </button>
        <ul className={`nav__link-mobile ${isNavOpen ? "nav-open" : ""}`}>
          <li>
            <Link to="/" onClick={closeNav}>
            <button className="buttonA">{t('navbar:home')}</button>
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeNav}>
            <button className="buttonA">{t('navbar:about')}</button>
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeNav}>
            <button className="buttonA">{t('navbar:contact')}</button>
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={closeNav}>
            <button className="buttonA">{t('navbar:projects')}</button>
            </Link>
          </li>
          <li>
            <Link to="/skills" onClick={closeNav}>
            <button className="buttonA">{t('navbar:skill')}</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>

  );
};

export default withTranslation()(Nav);