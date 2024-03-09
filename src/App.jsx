import './App.css'
import { Helmet } from 'react-helmet'
import Home from './component/Home/home'
import { Navigate, Route, Routes } from 'react-router-dom'
import About from './component/About/About'
import Nav from './component/Nav/Nav'
import Project from './component/Project/Project'
import Skill from './component/Skill/Skill'
import { DarkModeProvider } from './component/Config/DarkZone'
import CardDetail from './component/Detail/Detail'
import cardsData from './component/data/data'
import NotFound from './component/404/404'

import ContForm from './component/Contact/Cont-Form'
import { pageTitle,pageDescription,keywords } from './component/Config/Helmet'
import login from './component/Login/login'
import Register from './component/Registro/registro'
import Perfil from './component/perfil/perfil'
import React from 'react';


// Función para verificar si el usuario está autenticado
const isAuthenticated = () => {
  // Implementa tu lógica de autenticación aquí
  return localStorage.getItem('userData') !== null;
};


// Componente de enrutamiento protegido
const ProtectedRoute = ({ path, element: Element }) => {
  return isAuthenticated() ? <Route path={path} element={<Element />} /> : <Navigate to="/login" />;
};

function App() {
  return (
    <DarkModeProvider>
      <div className=' '>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keywords.join(', ')} />
        <meta property="og:image" content="https://www.cyberzon3.com/img/thumbnail.png" />
        <meta property="og:url" content="https://www.cyberzon3.com/img/thumbnail.png" />
      </Helmet>
    <header>
      <div className='   '>

      
   
     <Nav/>
      </div>
    </header>

        <Routes>
        <Route path='/' Component={Home} />
      <Route path='/about' Component={About} />
      <Route path='/projects' Component={Project} />
      <Route path="/projects/:id" element={<CardDetail cardsData={cardsData} />} />
      <Route path='/skills' Component={Skill} />
      <Route path='/contact' Component={ContForm} />
      <Route path='/login' Component={login} />
      <Route path='/register' Component={Register} />
      <Route path='/perfil' Component={Perfil} />
      {/* <ProtectedRoute path="/login"></ProtectedRoute> */}
      <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </DarkModeProvider>
  );
}

function AppWithDarkMode() {
  return (
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  );
}

export default AppWithDarkMode;
