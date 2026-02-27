import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-[#302C42]'>
        <div className='max-w-7xl mx-auto flex items-center justify-between px-5 py-4'>
            <div className='w-10 h-10'>
                 {/* Aquí va tu icono */}
                    <a href="/"><img src='/IconV.png' alt='Logo'/></a>
            </div>
            {/* Menú de navegación para pantallas grandes */}
            <div className='hidden lg:flex items-center gap-10 text-white text-sm font-medium'>
                <a href="#about-us" className='hover:text-[#C0B7E8] transition-colors duration-300'>Sobre nosotros</a>
                <a href="#services" className='hover:text-[#C0B7E8] transition-colors duration-300'>Servicios</a>
                <a href="#technology" className='hover:text-[#C0B7E8] transition-colors duration-300'>Tecnología</a>
                <a href="#contact" className='hover:text-[#C0B7E8] transition-colors duration-300'>Contacto</a>
            </div>
            {/* BOTON DESKTOP */}
            <div className='hidden lg:flex items-center gap-4 cursor-pointer'>
                <a href='#about-us' className='px-6 py-2 rounded-full border border-white text-white text-sm font-bold hover:bg-white hover:text-[#302C42] transition'>
                    Sobre nosotros
                </a>
                <a className='px-6 py-2 rounded-full text-sm text-[#302C42] font-semibold bg-gradient-to-r from-[#C0B7E8] to-[#8176AF] hover:opacity-90 transition'>
                    Unete a Nexux
                </a>
            </div>
            {/* Botón hamburguesa */}
            <button
                aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-8 h-8 flex items-center justify-center lg:hidden"
                >
                {/* Línea superior */}
                <span
                    className={`absolute h-0.5 w-6 bg-linear-to-r from-[#C0B7E8] to-[#8176AF] transition-all duration-300
                    ${isOpen ? "rotate-45" : "-translate-y-2"}`}
                />

                {/* Línea del medio */}
                <span
                    className={`absolute h-0.5 w-6 bg-linear-to-r from-[#C0B7E8] to-[#8176AF] transition-all duration-300
                    ${isOpen ? "opacity-0" : "opacity-100"}`}
                />

                {/* Línea inferior */}
                <span
                    className={`absolute h-0.5 w-6 bg-linear-to-r from-[#C0B7E8] to-[#8176AF] transition-all duration-300
                    ${isOpen ? "-rotate-45" : "translate-y-2"}`}
                />
            </button>
        </div>

        {/* Menú desplegable */}
        <div className={`absolute top-full left-0 w-full bg-[#302C42]/95 backdrop-blur-sm transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
            <ul className='flex flex-col items-center gap-6 py-8 text-white text-lg font-medium'>
                <a href="#about-us" onClick={closeMenu}><li className='cursor-pointer'>Sobre nosotros</li></a>
                <a href="#services" onClick={closeMenu}><li className='cursor-pointer'>Servicios</li></a>
                <a href="#technology" onClick={closeMenu}><li className='cursor-pointer'>Tecnología</li></a>
                <a href="#contact" onClick={closeMenu}><li className='cursor-pointer'>Contacto</li></a>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;