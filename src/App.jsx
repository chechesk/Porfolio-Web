//import './App.css'
import Home from './component/Home/home'
import { Route, Routes } from 'react-router-dom'
import About from './component/About/About'
import Nav from './component/Nav/Nav'
import Project from './component/Project/Project'
import Skill from './component/Skill/Skill'
import Contact from './component/Contact/Contact'

function App() {

  return (
    <div className='App'>
     Portafolio
     <Nav/>
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/about' Component={About} />
      <Route path='/projects' Component={Project} />
      <Route path='/skills' Component={Skill} />
      <Route path='/contact' Component={Contact} />
    </Routes>
    </div>
  )
}

export default App
