import Maskgroup from '../assets/Maskgroup.png';
import Groupvector from '../assets/Groupvector.svg';

const PageHome = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] relative overflow-hidden pt-16">

      {/* ===== VECTORES FONDO MOBILE ===== */}
      <div className="absolute inset-0 z-0 pointer-events-none lg:hidden">
        <img
          src={Groupvector}
          alt="Vector"
          className="absolute left-0 -mt-10 w-full opacity-60"
        />
      </div>

      {/* ===== VECTORES FONDO DESKTOP (solo derecha) ===== */}
      <div className="hidden lg:block absolute inset-y-0 2xl:right-55 lg:right-20 w-1/3 -mt-30 z-0 pointer-events-none">
        <img
          src={Groupvector}
          alt="Vector"
          className="absolute right-0 top-0 w-full opacity-60"
        />
      </div>

      {/* ===== CONTENIDO PRINCIPAL ===== */}
      <div className="lg:mt-20 flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto px-6">

        {/* ===== TEXTO IZQUIERDA ===== */}
        <div className="text-center lg:text-left max-w-xl z-10">

          <h1 className="text-3xl lg:text-5xl font-bold leading-tight text-white font-montserrat">
            <span className="text-[#C0B7E8] text-5xl lg:text-6xl">Sumérgete</span>
            <span> en las profundidades</span>
            <br />
            <span>de la </span>
            <span className="text-[#C0B7E8] text-5xl lg:text-6xl">Realidad Virtual</span>
          </h1>

          {/* TEXTO EXTRA SOLO DESKTOP */}
          <p className="hidden lg:block mt-6 text-gray-300 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            nisl tincidunt eget. Lectus mauris eros in vitae.
          </p>

          {/* BOTÓN */}
          <div className="mt-8">
            <button className="px-14 py-4 rounded-full font-semibold text-[#2f2b44] bg-linear-to-r from-[#C0B7E8] to-[#8176AF] cursor-pointer">
              CONSTRUYE TU MUNDO
            </button>
          </div>
        </div>

        {/* ===== IMAGEN DERECHA ===== */}
        <div className="relative mt-12 lg:mt-0 w-[330px] lg:w-[420px] h-[300px] lg:h-[360px] flex items-center justify-center">

          {/* fondo blur detrás de imagen */}
          <img
            src={Maskgroup}
            alt=""
            className="absolute inset-0 scale-[1.05] opacity-25 brightness-0 blur-[1px] pointer-events-none lg:h-[370px]"
          />

          {/* imagen principal */}
          <img
            src={Maskgroup}
            alt="VR"
            className="relative z-10 w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* ===== CONTENEDOR INFERIOR (SOLO DESKTOP) ===== */}
      <div className="hidden lg:flex relative z-10 max-w-6xl mx-auto mt-32 bg-[#3a3456]/90 backdrop-blur-md rounded-full px-10 py-6 items-center justify-between text-white">

        <div className="flex items-center gap-4">
          <span className="text-2xl">📍</span>
          <div>
            <p className="font-semibold">Visítanos</p>
            <p className="text-sm text-gray-300">Medellin, C# 98101, Colombia</p>
          </div>
        </div>

        <div className="h-10 w-px bg-gray-500"></div>

        <div className="flex items-center gap-4">
          <span className="text-2xl">📞</span>
          <div>
            <p className="font-semibold">Llámanos</p>
            <p className="text-sm text-gray-300">(110) 1111-1010</p>
          </div>
        </div>

        <div className="h-10 w-px bg-gray-500"></div>

        <div className="flex items-center gap-4 mr-4">
          <span className="text-2xl">✉️</span>
          <div>
            <p className="font-semibold">Envíanos un mensaje</p>
            <p className="text-sm text-gray-300">Contact@NexuxVTech.com</p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default PageHome;
