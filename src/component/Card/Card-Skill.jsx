import React from "react";
import "./Card-Skill.css";

const Card_Skill = ({
  id,
  name,
  image,
  description_cut,
  description,
  level,
  color,
}) => {
  return (
    <div className=" bg-slate-800 rounded-2xl py-2 px-4 h-[480px] w-[320px] mx-2 md:h-[580px] md:w-[290px] ml-[25%]">
      <div className="card_skill">
        <div className="card_skill_center">
          <img src={image} alt="Image-skill" className=" md:w-[180px] md:h-[180px] w-[100px] h-[100px] mx-[31%] my-[20%] md:mx-[20%] md:my-[20%] " />
          <h2 className="text-center m-2 text-xl text-white hidden">{name}</h2>
          <p className="text-white hidden">{description_cut}</p>
        </div>

        <div className="card_skill__content ">
          <p className=" text-xl text-white text-center">{name}</p>
          <p className=" text-sm text-justify my-2 text-white">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card_Skill;
