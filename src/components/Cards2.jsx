import botonL from '../assets/botonL.png';
import botonR from '../assets/botonR.png';

const Cards2 = ({ image, title, onPrev, onNext }) => {

  return (
    <div className="flex flex-col items-center gap-6 text-center">
         {/* Imagen circular */}
        <div className="w-64 h-64 rounded-full flex items-center justify-center">
            <img src={image} alt={title} className="w-64 h-64 object-contain" />
        </div>

         {/* Texto + botones */}
      <div className="flex items-center gap-6">
        <button onClick={onPrev} className="cursor-pointer">
          <img src={botonL} alt="Prev" />
        </button>

        <h3 className="text-white font-semibold text-lg max-w-45">
          {title}
        </h3>

        <button onClick={onNext} className="cursor-pointer">
          <img src={botonR} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default Cards2;