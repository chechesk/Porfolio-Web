import React from "react";
import { useParams } from "react-router-dom";

export default function CardDetail({ cardsData }) {
  const { id } = useParams();
  const selectedCard = cardsData.find((card) => card.id === Number(id));
  if (!selectedCard) {
    // Manejar el caso en que no se encuentra la tarjeta
    return <div>Tarjeta no encontrada.</div>;
  }

  return (
    <div className="">
      <div className="">
        <h2>{selectedCard.nombre}</h2>
        <img src={selectedCard.imagen} alt="imagen" style={{  width: "500px", height: "400px" }} />
        <p>{selectedCard.descripcion}</p>
        <ol>
      {selectedCard.tecnologies.map((tech) => (
        <li key={tech.id}>{tech.nombre}</li>
      ))}
    </ol>
      </div>
    </div>
  );
}