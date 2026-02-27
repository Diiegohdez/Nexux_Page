import Slider from "../components/Slider";
import imgvrx from "../assets/imgvrx.png";

const PageTechnology = () => {
  return (
    <div id='services' className="scroll-mt-10 pt-6 py-16 flex flex-col items-center lg:pt-20 lg:py-24">
      {/*TÍTULO*/}
      <div className="mt-2 px-6 text-center">
        <h1>
          <span className="text-white text-4xl lg:text-5xl font-bold">CONSTRUIR</span>
          <br />
          <span></span> <span className="font-stretch-semi-condensed text-[#C0B7E8] text-3xl lg:text-4xl">CON NEXUX</span>
        </h1>
      </div>

      {/*CARDS*/}
      <Slider />

      {/*IMAGEN + TEXTO*/}
      <div className="flex flex-col items-center text-center px-6 mt-4 lg:mt-8">
        <img src={imgvrx} alt="Technology" className="w-full max-w-sm rounded-2xl lg:max-w-3xl" />
      </div>

    </div>
  )
}

export default PageTechnology