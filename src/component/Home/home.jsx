import React, { Component } from 'react'
import Intro from '../intro/Intro'
import Carousel from '../carrouser/panel'
import Contact from '../Contact/Contact'
import Skill from '../Skill/Skill'
import Project from '../Project/Project'
import About from '../About/About'

export default class home extends Component {
  render() {
    return (
      <div>
       <Intro/>
       <Carousel/>
       <About/>
       <Skill/>
       <Project/>
       <Contact/>
      </div>
    )
  }
}
