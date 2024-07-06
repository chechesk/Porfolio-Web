import React, { useState } from "react";
import CardModel from "../Card/Cardd";
import { Link } from "react-router-dom";
import CardDetail from "../Detail/Detail";
import cardsData from "../data/data";
import { useTranslation } from "react-i18next";
import "./cards.css";

export default function Cards() {
  const [selectedCard, setSelectedCard] = useState(null);
  const { t, i18n } = useTranslation();

  const handleCardSelect = (card) => {
    setSelectedCard(card);
  };

  return (
    <div className="">
      <section id="projects" />
      <div className="flex card-container">
        {cardsData.map((card, index) => (
          <div
            key={card.id}
            className={`card ${
              selectedCard && selectedCard.id === card.id
                ? "center"
                : index === 0
                ? "left"
                : "right"
            }`}
            onClick={() => handleCardSelect(card)}
          >
            <Link
              to={`/projects/${card.id}`}
              key={card.id}
              className="card-link"
            >
              <CardModel
                className="text-white dark:text-white"
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
  );
}
