import React, { Component } from 'react'
import './Project.css'
import Cards from '../Cards/cards'



export default class Project extends Component {
  render() {
    return (
     <div className='containers'>
     <h2>Project</h2>
     <Cards/>
     </div>
    )
  }
}
