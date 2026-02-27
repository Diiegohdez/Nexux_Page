

const PageContact = () => {
  return (
    <div id="contact" className="min-h-screen pt-16 flex flex-col justify-center items-center">
        <div className="text-center px-4 py-4 w-80 lg:w-250 h-full bg-linear-to-r from-[#403A5F] to-[#211E2E] rounded-4xl lg:px-16">
          {/* TÍTULO Y SUBTÍTULO */}
            <h1 className="text-white text-4xl lg:text-5xl lg:mt-8 font-bold">Unete a Nexux</h1>
            <div className="flex items-center justify-center mt-4">
                <div className='w-40 lg:w-80 h-[2px] bg-[#C0B7E8]/40'/>
            </div>
            <div className="text-center font-stretch-semi-condensed text-[#C0B7E8] text-3xl lg:text-4xl mt-4 leading-tight max-w-md lg:max-w-2xl mx-auto">
              Construyamos tu experiencia de realidad virtual
            </div>
            {/* FORMULARIO DE CONTACTO */}
            <form action="" className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <input type="text" placeholder="Nombre" className="w-full h-12 border-2 border-white rounded-3xl text-amber-50 pl-6"/>
              <input type="text" placeholder="Apellido" className=" w-full h-12 border-2 border-white rounded-3xl text-amber-50 pl-6"/>
              <input type="text" placeholder="Teléfono" className="w-full h-12 border-2 border-white rounded-3xl text-amber-50 pl-6"/>
              <input type="email" placeholder="Correo Electrónico" className="w-full h-12 border-2 border-white rounded-3xl text-amber-50 pl-6"/>
              <div className="lg:col-span-2 flex justify-center">
                <textarea type="text" placeholder="Escribe tu mensaje aquí..." className="w-full lg:w-[90%] h-40 border-2 border-white rounded-3xl text-amber-50 pl-6 pt-4"></textarea>
              </div>
            </form>
            <button type="submit" className="w-72 h-12 bg-linear-to-r from-[#C0B7E8] to-[#8176AF] text-[#2f2b44] font-semibold rounded-3xl mt-4 cursor-pointer lg:mb-4">ENVIAR MENSAJE</button>
        </div>
    </div>
  )
}

export default PageContact