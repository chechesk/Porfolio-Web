import React from 'react'
import './Project.css'
import Cards from '../Cards/cards'
import { withTranslation } from 'react-i18next'


const Project = ({t}) => {
 
    return (
     <div className='containers'>
     <h2>{t('projects:title')}</h2>
        <div className='containers-project'>
     <Cards/>
     </div>
     </div>
    )
  
}
export default withTranslation() (Project)