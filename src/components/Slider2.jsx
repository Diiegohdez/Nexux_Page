import { useRef } from 'react';
import { DataCards2 } from '../data/Data';
import Cards2 from './Cards2';


const Slider2 = () => {

    const sliderRef = useRef(null); // Referencia al contenedor del slider

    const scrollLeft = () => { // Función para desplazar a la izquierda
        
        if (!sliderRef.current) return;

        const width = sliderRef.current.clientWidth;
        
        sliderRef.current.scrollBy({
            left: -width,
            behavior: 'smooth'
        });
    }

    const scrollRight = () => { // Función para desplazar a la derecha
        
        if (!sliderRef.current) return;

        const width = sliderRef.current.clientWidth;
        sliderRef.current.scrollBy({
            left: width,
            behavior: 'smooth'
        });
    }
  return (
    <div className='relative w-full flex flex-col items-center gap-6'>
        {/* Slider */}
        <div ref={sliderRef} className='flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth px-0 scrollbar-hide w-full'>\
            {DataCards2.map((card) => (
                <div key={card.id} className="min-w-full snap-center flex justify-center">
                    <Cards2 {...card} 
                    onPrev={scrollLeft}
                    onNext={scrollRight}
                    />
                </div>
            ))}
        </div>
    </div>
  );
};

export default Slider2;