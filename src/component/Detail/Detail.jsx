import React from "react";
import { useParams } from "react-router-dom";
import { withTranslation } from 'react-i18next';
import './Detail.css';

function CardDetail({ cardsData, t }) {
  const { id } = useParams();
  const selectedCard = cardsData.find((card) => card.id === Number(id));
console.log(selectedCard);
  if (!selectedCard) {
    // Manejar el caso en que no se encuentra la tarjeta
    return <div>Tarjeta no encontrada.</div>;
  }

  return (
    <div className="container-about">
      <div className="details">  
        <h2>{t(`cards:${selectedCard.id}.nombre`)}</h2>
        <img src={selectedCard.imagen} alt="Imagen" className="imagDet" />
        <p>{t(`cards:${selectedCard.id}.descripcion`)}</p>
        <ol>
          {selectedCard.tecnologies.map((tech) => (
            <li key={tech.id}>{tech.nombre}</li>
          ))}
        </ol>
        
        <p><a href={selectedCard.URL}>URL</a></p>
      </div>
    </div>
  );
}

export default withTranslation()(CardDetail);
