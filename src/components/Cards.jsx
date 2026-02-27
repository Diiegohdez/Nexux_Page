

const Cards = ({ title, description, image, buttonText }) => {
    return (
        <div className='w-75 h-106 shrink-0 bg-[#3A3456] rounded-[40px] px-6 pt-10 pb-8 flex flex-col items-center text-center'>
            
            {/* imagen */}
            <div className='w-[180px] h-[185px] rounded-full overflow-hidden mb-6'>
                <img src={image} alt='Icon' className='w-full h-full object-fill' />
            </div>

            {/* título */}
            <h3 className='text-white font-semibold mb-2'>
                {title}
            </h3>

            <div className='w-12 h-px bg-[#C0B7E8]/40 mb-4' />

            {/* descripción */}
            <p className='text-[#C0B7E8] text-sm leading-relaxed mb-6'>
                {description}
            </p>

            {/* botón */}
            <button className='mt-auto w-full h-[48px] rounded-full bg-gradient-to-r from-[#C0B7E8] to-[#8176AF] text-[#302C42] font-semibold text-sm cursor-pointer'>
                {buttonText}
            </button>
        </div>
    )
}

export default Cards