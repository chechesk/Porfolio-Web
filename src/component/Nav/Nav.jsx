import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { useDarkMode } from '../Config/DarkZone';

const Nav = () => {
  const { isDarkMode } = useDarkMode();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };


  return (
    <nav className={`nav ${isNavOpen ? 'nav-open' : ''}`}>
      {/* Contenido para pantallas grandes */}
      <div className="nav__large">
        <ul className="nav__link">
          <li>
            <Link to="/" onClick={closeNav}>Inicio</Link>
          </li>
          <li>
            <Link to="/about" onClick={closeNav}>Acerca de Mí</Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeNav}>Contacto</Link>
          </li>
          <li>
            <Link to="/projects" onClick={closeNav}>Proyectos</Link>
          </li>
          <li>
            <Link to="/skills" onClick={closeNav}>Habilidades</Link>
          </li>
        </ul>
      </div>

      {/* Contenido para dispositivos móviles */}
      <div className="nav__mobile">
        <ul className={`nav__link-mobile ${isNavOpen ? 'show' : ''}`}>
          <li>
            <Link to="/" onClick={closeNav}>Inicio</Link>
          </li>
          <li>
            <Link to="/about" onClick={closeNav}>Acerca de Mí</Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeNav}>Contacto</Link>
          </li>
          <li>
            <Link to="/projects" onClick={closeNav}>Proyectos</Link>
          </li>
          <li>
            <Link to="/skills" onClick={closeNav}>Habilidades</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
