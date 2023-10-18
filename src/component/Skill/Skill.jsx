import React from "react";
import skillsData from "../data/skilldata";
import Card_Skill from "../Card/Card-Skill";
import { useTranslation } from "react-i18next";
 import './Skill.css';


const Skill = () => {
  const { t, i18n } = useTranslation();
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
          description_cut={t(`project:${p.id}.description_cut`)}
          description={t(`project:${p.id}.description`)}
          level={p.level}
          color={p.color}
          />
          </div>
    ))}
    </div>
  )
}
 


export default Skill;