import Slider2 from "../components/Slider2";
import GroupB from "../assets/GroupB.png";

const PageBuild = () => {
    return (
        <div id="technology" className="flex flex-col pt-18 lg:pt-1">
            {/* TÍTULO */}
            <div className="text-center mt-8">
                <h1>
                    <span className="text-white text-4xl lg:text-5xl font-bold">COMO</span>
                    <br />
                    <span className="font-stretch-semi-condensed text-[#C0B7E8] text-3xl lg:text-4xl">LO CONSTRUIMOS</span>
                </h1>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center mb-15 mt-12 lg:hidden">
            {/* Slider Component */}
            <Slider2 />
            </div>
            <div className="hidden lg:flex justify-center items-center w-full lg:mt-12">
                <img src={GroupB} alt="Group B" className="w-230 lg:w-250 max-w-full object-cover "/>
            </div>
        </div>
    )
}

export default PageBuild;