import React, { Component } from 'react'
import { Fade } from 'react-awesome-reveal';
import Intro from '../intro/Intro'
import Carousel from '../carrouser/panel'
import Skill from '../Skill/Skill'
import Project from '../Project/Project'
import About from '../About/About'
import Footer from '../Footer/Footer'
import './Home.css'

export default class home extends Component {
  render() {
    return (
      <div className='Home'>
      <Fade triggerOnce={true}>
        <Intro />
      </Fade>
      <Fade triggerOnce={true}>
        <Carousel />
      </Fade>
      <Fade triggerOnce={true}>
        <About />
      </Fade>
      <Fade triggerOnce={true}>
        <Skill />
      </Fade>
      <Fade triggerOnce={true}>
        <Project />
      </Fade>
      <Fade triggerOnce={true}>
        <Footer />
      </Fade>
    </div>
    )
  }
}
