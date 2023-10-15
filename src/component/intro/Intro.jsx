import React, { Component } from 'react'
import img from '../../assets/1684808450050.jpeg'
import './intro.css'

export default class Intro extends Component {
  render() {
    return (
      <div class="parent">
            <div class="div1">            
                  <img src='https://www.cyberzon3.com/img/React.png'className='res' alt='imagen1'/>
                  <img src='https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_plain_wordmark_logo_icon_146423.png' className='res'alt='imagen2'/>
            </div>
      <div class="icones">  
             <img className="avatar-img" 
                    src={img}
                    alt="Imagen"
                  /> 
          <div><h2 className='title'>Jose Romero</h2></div>
          <div><h2 className='titles'>Full Stack Developers</h2></div>
      </div>
              <div class="icones">          
           <img src='https://www.cyberzon3.com/img/express.png' className='res' alt='imagen3'/>
           <img src='https://static-00.iconduck.com/assets.00/node-js-icon-1901x2048-mk1e13df.png' className='res'alt='imagen4'/>
         </div>
      </div>
    )
  }
}
