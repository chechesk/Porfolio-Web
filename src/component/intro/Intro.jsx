import React, { Component } from "react";
import img from "../../assets/1684808450050.jpeg";
import Social from "../Social/social";
import "./intro.css";

export default class Intro extends Component {
  render() {
    return (
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className=" place-self-center">
              
                <h2 className="text-center text-2xl font-bold my-4">
                  Jose Gregorio Romero Mendoza
                </h2>
                <h2 className="text-center text-2xl font-bold my-4">
                  Full Stack Developer
                </h2>
              
                  <div className=" flex justify-center my-4">
                  <img
                  src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_plain_wordmark_logo_icon_146423.png"
                  className="w-[80px] h-[80px]  mx-4 "
                  alt="Mongo"
                />
                <img
                  src="https://www.cyberzon3.com/img/express.png"
                  className="w-[80px] h-[80px]  mx-4 gap-x-4 "
                  alt="Express"
                />
                <img
                  src="https://www.cyberzon3.com/img/React.png"
                  className="w-[80px] h-[80px]  mx-4 gap-x-4 hover:shadow-lg hover:fill-current transition duration-300"
                  alt="React"
                />
                <img
                  src="https://static-00.iconduck.com/assets.00/node-js-icon-1901x2048-mk1e13df.png"
                  className="w-[80px] h-[80px]  mx-4 gap-x-4 "
                  alt="Note"
                />
                  </div>
           <div className="flex justify-center my-4">
                <Social />
           </div>
       
            </div>

            <div className="icones flex justify-center">
              <img
                className=" h-[490px] w-[600px] rounded-xl"
                src="https://www.amd.com/content/dam/amd/en/images/abstract/648568-developer-code.jpg"
                alt="Imagen"
              />
              
            </div>
          </div>

     
    );
  }
}
