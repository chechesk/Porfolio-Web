import React from "react";
import skillsData from "../data/skilldata";
import Card_Skill from "../Card/Card-Skill";
import { useTranslation } from "react-i18next";
 import './Skill.css';


const Skill = () => {
  const { t, i18n } = useTranslation();
  // console.log(skillsData);
  return (
    <div className=""> 

    
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
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
    </div>
  )
}
 


export default Skill;