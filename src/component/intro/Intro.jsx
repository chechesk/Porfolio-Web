import React, { Component } from 'react'
import img from '../../assets/1684808450050.jpeg'
import './intro.css'
import Social from '../Social/social'

export default class Intro extends Component {
  render() {
    return (
        <div className="mi-componente">
        <div className="contenido">
          <div>
            <h2>Jose Gregorio Romero Mendoza</h2>
            <h2>Full Stack Developers</h2>
            <h2>MERS</h2>
           <ul>M - MongoDB</ul>
           <ul>E - ExpressJS</ul>
           <ul>R - ReactJS</ul>
           <ul>N - NodeJS</ul>
            <Social/>
          </div>
        </div>
        <div className="avatar">
          <img className="imagen"
            src={img}
            alt="Imagen"
          />
        </div>
      </div>
    )
  }
}
