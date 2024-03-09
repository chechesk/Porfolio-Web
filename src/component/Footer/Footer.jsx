import React from "react";
import Social from "../Social/social";
import './Footer.css'
import ContForm from "../Contact/Cont-Form";


const Footer = () =>{
    return (
        <div className="Footer">
            {/* <ContForm/> */}
    <h3 className="foot-center">   JR dev © 2023 Todos los Derechos Reservados </h3> <Social/>
    </div>
    )
}

export default Footer