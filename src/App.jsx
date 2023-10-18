import './App.css'
import { Helmet } from 'react-helmet'
import Home from './component/Home/home'
import { Route, Routes } from 'react-router-dom'
import About from './component/About/About'
import Nav from './component/Nav/Nav'
import Project from './component/Project/Project'
import Skill from './component/Skill/Skill'
import { DarkModeProvider } from './component/Config/DarkZone'
import CardDetail from './component/Detail/Detail'
import cardsData from './component/data/data'
import NotFound from './component/404/404'
import LanguageSwitcher from './component/Config/LanguageSwitcher'
import BotonDZ from './component/Config/DarkZoneSwitch'
import ContForm from './component/Contact/Cont-Form'
import { pageTitle,pageDescription,keywords } from './component/Config/Helmet'

function App() {


  return (
    
    <DarkModeProvider>
    <div className='App'>
    <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keywords.join(', ')} />
        <meta property="og:image" content="https://www.cyberzon3.com/img/thumbnail.png" />
        <meta property="og:url" content="https://www.cyberzon3.com/img/thumbnail.png" />
        {/* Otros metadatos aquí */}
      </Helmet>
    <header>
      <h1><img src="https://www.cyberzon3.com/img/Logo.fw.png" alt="My Image" className='logo'></img></h1>
    <BotonDZ/>
    <LanguageSwitcher/>
     <Nav/>
    </header>
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/about' Component={About} />
      <Route path='/projects' Component={Project} />
      <Route path="/projects/:id" element={<CardDetail cardsData={cardsData} />} />
      <Route path='/skills' Component={Skill} />
      <Route path='/contact' Component={ContForm} />
      <Route exact path='*' Component={NotFound}/>

    </Routes>
    
    </div>
    </DarkModeProvider>
  )
}
function AppWithDarkMode() {
  return (
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  );
}
export default AppWithDarkMode
