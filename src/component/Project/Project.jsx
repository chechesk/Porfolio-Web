import React, { useState, useRef } from 'react';
import './Project.css';
import Cards from '../Cards/cards';
import { withTranslation } from 'react-i18next';

const Project = ({ t }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollContainer = useRef(null);

    const handleScroll = () => {
        const scrollLeft = scrollContainer.current.scrollLeft;
        const itemWidth = scrollContainer.current.clientWidth // Asumiendo que cada tarjeta tiene el ancho del contenedor
        const totalWidth = scrollContainer.current.scrollWidth;
        const maxScrollLeft = totalWidth - itemWidth;
        const index = Math.round(scrollLeft / (maxScrollLeft / (3 - 1)));  // Ajusta el número total de tarjetas aquí
    
        if (index >= 0 && index < 3) {  // Asegúrate de que el índice no exceda los límites
            setActiveIndex(index);
        }
    };

    const scrollToIndex = (index) => {
        const itemWidth = scrollContainer.current.clientWidth; // O define el ancho de cada tarjeta si es diferente
        scrollContainer.current.scrollTo({ left: itemWidth * index, behavior: 'smooth' });
        setActiveIndex(index);
    };

    const handleArrowClick = (direction) => {
        const newIndex = direction === 'left' ? activeIndex - 1 : activeIndex + 1;
        if (newIndex >= 0 && newIndex < 3) {  // Verifica los límites para los índices
            scrollToIndex(newIndex);
        }
    };

    return (
        <div className='mx-[14%] '>
            {/* <button className='buton '  onClick={() => handleArrowClick('left')}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>

            </button> */}
            <div className='containers overflow-x-auto' ref={scrollContainer} onScroll={handleScroll}>
           
            <div>
                <div className='containers-project'>
                    <Cards />
                </div>
       
            </div>
            </div>
            <div className="flex justify-center space-x-2 mt-4 custom-range:hidden">
                {[...Array(3)].map((_, index) => (
                    <div key={index} className={`w-3 h-3 rounded-full cursor-pointer ${index === activeIndex ? 'bg-blue-500' : 'bg-gray-400'}`}
                        onClick={() => scrollToIndex(index)}>
                    </div>
                ))}
            </div>
            <div className="flex justify-center space-x-2 mt-4 sm:hidden">
                {[...Array(9)].map((_, index) => (
                    <div key={index} className={`w-3 h-3 rounded-full cursor-pointer ${index === activeIndex ? 'bg-blue-500' : 'bg-gray-400'}`}
                        onClick={() => scrollToIndex(index)}>
                    </div>
                ))}
            </div>
          
            {/* <button className='buton' onClick={() => handleArrowClick('right')}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>

            </button> */}
        </div>
    );
}

export default withTranslation()(Project);