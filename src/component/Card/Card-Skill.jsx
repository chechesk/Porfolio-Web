import React from 'react'
import './Card-Skill.css'

 const Card_Skill = ({
    id, 
    name,
    image,
    description_cut,
    description,
    level,
    color,
})=> {
  
    return (
      <div className='container_skill'>
<div className="card_skill">
        <div className="card_skill_center">  
          <img src={image} alt="Image-skill" className='svg' />
          <h2 className='h2'>{name}</h2>
          <p>{description_cut}</p>
    </div>

  <div className="card_skill__content">
    <p className="card_skill__title">{name}</p>
    <p className="card_skill__description">{description}</p>
  </div>
</div>
</div>
    )
  }


export default Card_Skill
