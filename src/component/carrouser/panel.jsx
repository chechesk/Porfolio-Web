import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './panel.css'

const technologies = [
  { id: 1, nombre: 'JavaScript', imagen: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' },
  { id: 2, nombre: 'HTML', imagen: 'https://cdn-icons-png.flaticon.com/512/732/732212.png' },
  { id: 3, nombre: 'CSS', imagen: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/css-icon.png' },
  { id: 4, nombre: 'React', imagen: 'https://www.cyberzon3.com/img/React.png'},
  { id: 5, nombre: 'MongoDB', imagen: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_plain_wordmark_logo_icon_146423.png'},
  { id: 6, nombre: 'Express', imagen: 'https://www.cyberzon3.com/img/express.png'},
  { id: 7, nombre: "Node.js", imagen: "https://static-00.iconduck.com/assets.00/node-js-icon-1901x2048-mk1e13df.png" },
  { id: 8, nombre: "Sequelize", imagen: "https://www.cyberzon3.com/img/Sequelize.png"},
  { id: 9, nombre: "Docker", imagen: "https://www.cyberzon3.com/img/Docker.png" },
  { id: 10, nombre: "RESTful APIs", imagen: "https://www.cyberzon3.com/img/restApi.png" },
  { id: 11, nombre: "Git", imagen: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" },
  { id: 12, nombre: "GitHub", imagen: "https://www.cyberzon3.com/img/GitHub-Mark.png" },
  { id: 13, nombre: "Redux", imagen: "https://www.cyberzon3.com/img/Redux.png" },
  { id: 14, nombre: "Wordpress", imagen: "https://w7.pngwing.com/pngs/510/329/png-transparent-wordpress-com-blog-computer-icons-wordpress-emblem-trademark-logo.png" },
  // Agrega aquí más tecnologías con sus respectivas imágenes
];

const CustomPrevArrow = (props) => (
  <div {...props} className="custom-prev-arrow">
    Prev
  </div>
);

const CustomNextArrow = (props) => (
  <div {...props} className="custom-next-arrow">
    Next
  </div>
);

const Carousel = () => {
  const settings = {
    showArrows:true,
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
    
   };

  return (
    <div className='container'>
     
    <div className='carousel'>
      <Slider {...settings}>
        {technologies.map((tech) => (
          <div key={tech.id}>
            <h3 className='H3'>{tech.nombre}</h3>
            <img className='IMG'
              src={tech.imagen}
              alt={tech.nombre}
            />
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default Carousel;