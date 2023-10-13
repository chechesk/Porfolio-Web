import React from "react";
import './Skill.css';
import { SkillBars } from 'react-skills';
import skillsData from "../data/skilldata";
import { withTranslation } from 'react-i18next';

const Skill = ({ t }) => {
  return (
    <div className="container-skill">
      <h2>{t('skills:title')}</h2>
      <div className="skill-container">
        <SkillBars skills={skillsData} />
      </div>
    </div>
  );
};

export default withTranslation()(Skill);