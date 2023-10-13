import React from "react";
import './Skill.css'
import { SkillBars } from 'react-skills';
import skillsData from "../data/skilldata";



const Skill = () => {
  return (
    <div className="container-skill">
      <h2>Habilidades</h2>
    <div className="skill-container">
    <SkillBars skills={skillsData} />
    </div>
    </div>
  );
};

export default Skill;