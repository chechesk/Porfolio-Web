import React from "react";
import Form from "./Form";
import Contact from "./Contact";
import './cont-form.css'

const ContForm = () =>{
    return (
        <div className="grid grid-cols-1 mx-[3.5rem] md:grid-cols-2">
            <Form/> <Contact/>

        </div>
    )
}

export default ContForm