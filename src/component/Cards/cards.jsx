import React from "react";
import CardModel from "../Card/Cardd";
import { Link } from "react-router-dom";
import './cards.css'
import CardDetail from "../Detail/Detail";
import cardsData from "../data/data";
import { useTranslation } from "react-i18next";





export default function Cards  (){
  const [selectedCard, setSelectedCard] = React.useState(null);
  const { t, i18n } = useTranslation();
  const handleCardSelect = (card) => {
    setSelectedCard(card);
  };

return(
  <div className="card-container">
    <section id="projects"/>
      <div className="articles">
        {cardsData.map((card) => (
          <div key={card.id} onClick={() => handleCardSelect(card)}>
            <Link to={`/projects/${card.id}`} key={card.id} className="card-link">
            <CardModel
              className=""
              key={card.id}
              id={card.id}
              nombre={t(`cards:${card.id}.nombre`)}
              descripcion={t(`cards:${card.id}.descripcion`)}
              imagen={card.imagen}
              point={card.point}
              tecnologies={card.tecnologies}
            />
            </Link>
          </div>
        ))}
      </div>
      {selectedCard && <CardDetail card={selectedCard} />}
    </div>
    )
}
