import React from "react";


export default function Detail () {
    return(
        
        <div className="CardContainerD">
          <div className="tittle">
            <h2>{detail.name}</h2>
          </div>
          <img className="imgContainer" src={detail.image} alt="Photos"></img>
          <h3>Description</h3>
          <h3 >Summary</h3>
      {/* componente que convierte los parametros de pagina HTML para renderizarlo en el DOM */}
     
  
          
        <Link to="/">
          <button className="botback">Home</button>
        </Link>
        
        <br></br>
      </div>
    )
}