import logoFooter from "../assets/logoFooter.png";
import IconoFooter from "../assets/IconoFooter.png";
import IconV from "../assets/IconV.png";

const PageFooter = () => {
  return (
    <footer className="w-full px-6 lg:px-16 py-12 text-white">

      {/* CONTENEDOR PRINCIPAL */}
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">

        {/* LOGO */}
        <div className="flex flex-col items-center lg:items-start lg:hidden">
          <img src={logoFooter} alt="Nexux Logo" className="w-90 lg:w-62 h-auto" />
        </div>

        <div className="hidden lg:block">
          <img src={IconV} alt='Logo' className="w-30"/>
        </div>

        {/* MENU 1 */}
        <div className="hidden lg:flex flex-col gap-3 text-sm tracking-wide">
          <span className="cursor-pointer hover:text-[#C0B7E8]">SOBRE NOSOTROS</span>
          <span className="cursor-pointer hover:text-[#C0B7E8]">SERVICIOS</span>
          <span className="cursor-pointer hover:text-[#C0B7E8]">TECNOLOGIA</span>
          <span className="cursor-pointer hover:text-[#C0B7E8]">UNETE A NEXUX</span>
        </div>

        {/* MENU 2 */}
        <div className="hidden lg:flex flex-col gap-3 text-sm tracking-wide">
          <span className="cursor-pointer hover:text-[#C0B7E8]">F.A.Q</span>
          <span className="cursor-pointer hover:text-[#C0B7E8]">MAPA DEL SITIO</span>
          <span className="cursor-pointer hover:text-[#C0B7E8]">CONDICIONES</span>
          <span className="cursor-pointer hover:text-[#C0B7E8]">LICENCIAS</span>
        </div>

        {/* SOCIAL + CTA */}
        <div className="flex flex-col items-center lg:items-start">
          <span className="text-lg font-semibold">SOCIALIZA CON NEXUX</span>

          <img
            src={IconoFooter}
            alt="Iconos sociales"
            className="w-64 lg:w-56 mt-4 cursor-pointer"
          />

          <button className="mt-6 w-60 h-11 bg-linear-to-r from-[#C0B7E8] to-[#8176AF] text-[#2f2b44] font-semibold rounded-3xl cursor-pointer">
            CONSTRUYE TU MUNDO
          </button>
        </div>
      </div>

      {/* LINEA */}
      <div className="w-full h-[1px] bg-[#C0B7E8]/30 my-10"></div>

      {/* COPYRIGHT */}
      <div className="text-center text-sm tracking-wide">
        <span>2025 NEXUX — Todos los derechos reservados</span>
      </div>

    </footer>
  );
};

export default PageFooter;