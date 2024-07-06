import React, { Component } from 'react';
import { Fade } from 'react-awesome-reveal';
import Intro from '../intro/Intro';
import Carousel from '../carrouser/panel';
import Skill from '../Skill/Skill';
import Project from '../Project/Project';
import About from '../About/About';
import Footer from '../Footer/Footer';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className='mt-10'>
        <Fade triggerOnce={true}>
          <div id="home"><Intro /></div>
        </Fade>
        <Fade triggerOnce={true}>
          <div id="carousel"><Carousel /></div>
        </Fade>
        <Fade triggerOnce={true}>
          <div id="about"><About /></div>
        </Fade>
        <Fade triggerOnce={true}>
          <div id="skills"><Skill /></div>
        </Fade>
        <Fade triggerOnce={true}>
          <div id="projects"><Project /></div>
        </Fade>
        <Fade triggerOnce={true}>
          <div id="contact"><Footer /></div>
        </Fade>
      </div>
    );
  }
}