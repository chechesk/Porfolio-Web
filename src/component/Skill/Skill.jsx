import React from "react";
import skillsData from "../data/skilldata";
import Card_Skill from "../Card/Card-Skill";
 import './Skill.css';


const Skill = () => {
  // console.log(skillsData);
  return (
    <div className="cards-skill">
      {skillsData.map((p, index) => (
        <div key={index}>
      <Card_Skill 
          key={p.id}
          id={index} 
          name={p.name}
          image={p.image}
          description_cut={p.description_cut}
          description={p.description}
          level={p.level}
          color={p.color}
          />
          </div>
    ))}
    </div>
  )
}
 


export default Skill;