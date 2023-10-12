import React from "react";
import Card from "../Card/Cardd";
//import { Link } from "react-router-dom";


const data = [
    {
      id: 1,
      nombre: 'Wordpress',
      descripcion: ' ',
      imagen: "{Food}",
      point: '3',
      tecnologies: [
        { id: 1, nombre: 'Cpanel-Hosting' },
        { id: 2, nombre: 'Webmail' },
        { id: 3, nombre: 'Dominio' },
      ],
    },
    {
      id: 2,
      nombre: 'Project Individuality Food',
      descripcion: ' apply the technologies learned in the bootcamps with nodejs, express, react, redux, sequelize, css.',
      imagen: "{Food}",
      tecnologies: [
        { id: 1, nombre: 'Express' },
        { id: 2, nombre: 'Sequelize' },
        { id: 3, nombre: 'Redux' },
        { id: 4, nombre: 'React' },
        { id: 5, nombre: 'Nodejs' },
        { id: 6, nombre: 'JavaScript' },
      ],
    },
    {
      id: 3,
      nombre: 'Cyberzon3',
      descripcion: 'travel e-commerce integration project.',
      imagen: "{Cyberzon3}",
      tecnologies: [
        { id: 1, nombre: 'Express' },
        { id: 2, nombre: 'MongoDB' },
        { id: 3, nombre: 'Redux' },
        { id: 4, nombre: 'React' },
        { id: 5, nombre: 'Nodejs' },
        { id: 6, nombre: 'JavaScript' },
      ],
    },
  ];

export default function Cards  (){

    <div className="CardsContainer">
    {data?.map((p)=>{
        //console.log(data);
        return(

            <div className="" key={p.id} >
            {/* <Link to={"/home/"+p.id }> */}
                <Card className="card"
                                    id = {p.id} 
                                    key = {p.id}
                                    nombre = {p.nombre}
                                    imagen = {p.imagen}
                                    descripcion = {p.descripcion}
                                    tecnologies = {p.tecnologies}
                                    point = {p.point}
                               
                                    />
                      
            {/* </Link> */}
        </div>
    )
    })}
       </div>
    
}
