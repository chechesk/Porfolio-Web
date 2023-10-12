import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './panel.css'

const technologies = [
  { id: 1, nombre: 'JavaScript', imagen: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' },
  { id: 2, nombre: 'HTML', imagen: 'https://cdn-icons-png.flaticon.com/512/732/732212.png' },
  { id: 3, nombre: 'CSS', imagen: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/css-icon.png' },
  { id: 4, nombre: 'React', imagen: 'https://w7.pngwing.com/pngs/18/497/png-transparent-black-and-blue-atom-icon-screenshot-react-javascript-responsive-web-design-github-angularjs-github-logo-electric-blue-signage.png'},
  { id: 5, nombre: 'MongoDB', imagen: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_plain_wordmark_logo_icon_146423.png'},
  { id: 6, nombre: 'Express', imagen: 'https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png'},
  { id: 7, nombre: "Node.js", imagen: "https://static-00.iconduck.com/assets.00/node-js-icon-1901x2048-mk1e13df.png" },
  { id: 8, nombre: "Sequelize", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhncYuYJaOz9pGhye_b7LX36J4RTK-vhIFX3nlxEjIx8byXC7SsaNYvdz1tCp4YrC2JM&usqp=CAU"},
  { id: 9, nombre: "Docker", imagen: "https://w7.pngwing.com/pngs/627/244/png-transparent-docker-logo-logos-logos-and-brands-icon-thumbnail.png" },
  { id: 10, nombre: "RESTful APIs", imagen: "https://lh3.googleusercontent.com/-XvJzhz3pfH0/XjYG_xWkESI/AAAAAAAAJ9c/AYlgAtRknEU2W5fMcFhQoL6rmO8EBtIDQCK8BGAsYHg/s0/2020-02-01.png" },
  { id: 11, nombre: "Git", imagen: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" },
  { id: 12, nombre: "GitHub", imagen: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" },
  { id: 13, nombre: "Redux", imagen: "https://assets.stickpng.com/images/5848309bcef1014c0b5e4a9a.png" },
  // Agrega aquí más tecnologías con sus respectivas imágenes
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className='container'>
     
    <div className='carousel'>
      <Slider {...settings}>
        {technologies.map((tech) => (
          <div key={tech.id}>
            <h3>{tech.nombre}</h3>
            <img
              src={tech.imagen}
              alt={tech.nombre}
              style={{ maxWidth: '70px', maxHeight: '70px' }}
            />
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default Carousel;