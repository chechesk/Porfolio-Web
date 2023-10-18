import React from "react";
import { useTranslation } from "react-i18next";
import './Card.css'


  const CardModel  = ({id,nombre,descripcion,imagen,point,tecnologies})=> {
    const { t, i18n } = useTranslation();
    const generateStars = (point) => {
      const stars = [];
      for (let i = 1; i <= point; i++) {
        stars.push(
          <React.Fragment key={i}>
            <input type="radio" name={`rating-${id}`} id={`star${i}-${id}`} value={i} />
            <label htmlFor={`star${i}-${id}`}></label>
          </React.Fragment>
        );
      }
      return stars;
    };

      return (
        <section className="articles">
      <article>
        <div className="article-wrapper">
          <figure>
            <img src={imagen} alt="img-card" />
          </figure>
          <div className="article-body">
            <h2 className="title-card">{nombre}</h2>
            <p className="article-info">   {descripcion}         </p>
            <p className="article-tec">{t('technologies:title')}: {tecnologies.map((tech) => tech.nombre).slice(0,5).join(', ')}</p>
            <a href="#" className="read-more">
              Read more 
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fillRule="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <div className="rating">
              {generateStars(point)}
            </div> 
          </div>
        </div>
      </article>
     </section> 
      ) 
    
}

export default CardModel ;