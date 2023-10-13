import './App.css'
import Home from './component/Home/home'
import { Route, Routes } from 'react-router-dom'
import About from './component/About/About'
import Nav from './component/Nav/Nav'
import Project from './component/Project/Project'
import Skill from './component/Skill/Skill'
import Contact from './component/Contact/Contact'
import { DarkModeProvider, useDarkMode } from './component/Config/DarkZone'
import CardDetail from './component/Detail/Detail'
import cardsData from './component/data/data'
import NotFound from './component/404/404'


function App() {
  const { isDarkMode, toggleDarkMode  } = useDarkMode();


  
  return (
    <DarkModeProvider>
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
    <header>
      <h1><img src="https://cyberzon3.com/img/Logo.fw.png" alt="My Image" className='logo'></img></h1>
      <label className="ui-switch">
      <input
        type="checkbox"
        checked={isDarkMode} // Marca automáticamente el interruptor según el estado del modo oscuro
        onChange={toggleDarkMode} // Cuando se hace clic, llama a la función para alternar el modo oscuro
      />
      <div className="slider">
        <div className="circle"></div>
      </div>
    </label>
      {/* <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
      </button> */}
     <Nav/>
    </header>
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/about' Component={About} />
      <Route path='/projects' Component={Project} />
      <Route path="/projects/:id" element={<CardDetail cardsData={cardsData} />} />
      <Route path='/skills' Component={Skill} />
      <Route path='/contact' Component={Contact} />
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
