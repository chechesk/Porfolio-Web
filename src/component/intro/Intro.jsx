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
            <h2 className='intro'>Jose Gregorio Romero Mendoza</h2>
            <h2 className='intro'>Full Stack Developers</h2>
            <h2 className='intro'>MERS</h2>
           <ul className='li'>M - MongoDB</ul>
           <ul className='li'>E - ExpressJS</ul>
           <ul className='li'>R - ReactJS</ul>
           <ul className='li'>N - NodeJS</ul>
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
