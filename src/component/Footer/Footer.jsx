import React from "react";
import Social from "../Social/social";
import './Footer.css'
import ContForm from "../Contact/Cont-Form";
import FloatingImage from "./FloatImg";


const Footer = () =>{
    return (
        <div className=" justify-between row">
            {/* <ContForm/> */}
    <h3 className=" m-4">   JR dev © 2023 Todos los Derechos Reservados </h3> 
    <FloatingImage/>
    {/* <Social/> */}
    </div>
    )
}

export default Footer