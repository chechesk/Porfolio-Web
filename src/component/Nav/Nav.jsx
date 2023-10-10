import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'
import { useDarkMode } from '../Config/DarkZone';

function Nav() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav className='Nav'>
       {/* <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
      </button> */}
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/about">Acerca de Mí</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
        <li>
          <Link to="/projects">Proyectos</Link>
        </li>
        <li>
          <Link to="/skills">Habilidades</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;