import React, { Component } from 'react'
import Intro from '../intro/Intro'
import Carousel from '../carrouser/panel'
import Skill from '../Skill/Skill'
import Project from '../Project/Project'
import About from '../About/About'
import Footer from '../Footer/Footer'

export default class home extends Component {
  render() {
    return (
      <div>
      <Intro/>
       <Carousel/>
       <About/>
       <Skill/>
     <Project/>
       <Footer/>
      </div>
    )
  }
}
