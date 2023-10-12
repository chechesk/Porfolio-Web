import React from "react";



  const Cardd = ({id,nombre,descripcion,imagen,point,tecnologies})=> {
      return (
        <div className="card" > 
         <h3>{nombre}</h3>
         <img className="cardImg" src={imagen} alt="Imagen" />
           <h3> {descripcion} </h3>
           {/* <h5>Tecnologies: {tecnologies && tecnologies.map( e => {
               // console.log(e)
                let response = "";
                if(e.name){
                    response = e.name + " | "
                } else if ( e) {
                    response = e + " | "
                                }
                return response;
            })}</h5> */}
                <h3 className="healthscore">Health Score: ⭐{point}  </h3> 
      </div>
      )
    
}

export default Cardd;