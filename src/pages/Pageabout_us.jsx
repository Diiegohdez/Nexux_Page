import Maskgroup2 from '../assets/Maskgroup2.png';

const Pageabout_us = () => {
    return (
        <div id='about-us' className=" pt-2 py-8 flex flex-col items-center lg:flex-row justify-center max-w-7xl mx-auto px-6 lg:px-0 lg:gap-48">
            {/*TÍTULO*/}
            <div className='lg:flex-col'>
                <div className="mt-16 lg:mt-12 2xl:mt-0 px-6 text-center">
                    <h1>
                        <span className="text-white text-4xl lg:text-5xl font-bold">Introducción</span>
                        <br />
                        <span></span> <span className="font-stretch-semi-condensed text-[#C0B7E8] text-3xl lg:text-4xl">A NEXUX VR</span>
                    </h1>
                </div>

                {/*IMAGEN*/}
                <div className="w-[280PX] lg:w-[400px] h-72 lg:h-[320px] rounded-[48px]  flex items-center justify-center mt-8 lg:mt-20 relative">
                    <img src={Maskgroup2} alt="About Us" className='w-full h-auto object-contain' />
                </div>
            </div>
            {/*texto*/}
            <div className='lg:flex-col text-center lg:text-right'>
            <div className='text-white lg:max-w-xl mt-6 lg:mt-0 2xl:mt-0'>
                    <h1 className='hidden lg:block lg:mb-16'>
                        <span className="text-white text-5xl font-bold">Acerca</span>
                        <br />
                        <span></span> <span className="font-stretch-semi-condensed text-[#C0B7E8] text-4xl">DE NEXUX VR</span>
                    </h1>
                <p className='text-[14px] lg:text-lg'>Eget mi proin sed libero enim sed faucibus turpis. Nisl
                    rhoncus mattis rhoncus urna neque viverra justo. Vivamus
                    at augue eget arcu dictum. Ultrices gravida dictum fusce
                    ut placerat orci. Aenean et tortor at risus viverra adipisci
                    ng at in. Mattis aliquam faucibus purus in massa. Est
                    placerat in egestas erat imperdiet sed.
                </p>
            </div>

            {/*BOTÓN*/}
            <div className='relative z-10 mt-8 lg:mt-16 justify-center flex lg:justify-end'>
                <button className='px-14 py-4 rounded-full font-semibold text-[#2f2b44] bg-linear-to-r from-[#C0B7E8] to-[#8176AF] cursor-pointer'>
                    CONSTRUYE TU MUNDO
                </button>
            </div>
            </div>
        </div>
    )
}

export default Pageabout_us