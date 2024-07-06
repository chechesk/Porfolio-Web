import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './panel.css'

const technologies = [
  { id: 1, nombre: 'JavaScript', imagen: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' },
  { id: 2, nombre: 'HTML', imagen: 'https://cdn-icons-png.flaticon.com/512/732/732212.png' },
  { id: 3, nombre: 'CSS', imagen: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/css-icon.png' },
  { id: 4, nombre: 'React', imagen: 'https://gruporf.cl/img/React.png'},
  { id: 5, nombre: 'MongoDB', imagen: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_plain_wordmark_logo_icon_146423.png'},
  { id: 6, nombre: 'Express', imagen: 'https://gruporf.cl/img/express.png'},
  { id: 7, nombre: "Node.js", imagen: "https://static-00.iconduck.com/assets.00/node-js-icon-1901x2048-mk1e13df.png" },
  { id: 8, nombre: "Sequelize", imagen: "https://gruporf.cl/img/Sequelize.png"},
  { id: 9, nombre: "Docker", imagen: "https://gruporf.cl/img/Docker.png" },
  { id: 10, nombre: "RESTful APIs", imagen: "https://gruporf.cl/img/restApi.png" },
  { id: 11, nombre: "Git", imagen: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" },
  { id: 12, nombre: "GitHub", imagen: "https://gruporf.cl/img/GitHub-Mark.png" },
  { id: 13, nombre: "Redux", imagen: "https://gruporf.cl/img/Redux.png" },
  { id: 14, nombre: "Wordpress", imagen: "https://gruporf.cl/img/wordpress.png" },
  // Agrega aquí más tecnologías con sus respectivas imágenes
];



const Carousel = () => {
  const settings = {
    showArrows:true,
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
    
   };

  return (
    <div className='mt-8 mx-16'>
     
    <div className='w-auto'>
      <Slider {...settings}>
        {technologies.map((tech) => (
          <div key={tech.id} className='w-[40px]'>
            <h3 className='ml-2 hidden'>{tech.nombre}</h3>
            <img className='items-center h-[40px] md:h-[80px]'
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