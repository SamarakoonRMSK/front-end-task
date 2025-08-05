export const Section = ({image,reverse}) => {
    return (
        <div className={`flex items-center  ${reverse ? "sm:flex-col-reverse md:flex-row-reverse":"sm:flex-col md:flex-row"} gap-[20px] xl:gap-[108px]
        sm:w-[335px] sm:mx-auto md:w-[688px]  lg:w-[896px] xl:w-[1064px] lg:h-[426px] xl:h-[494px]`}>
            <div className="sm:w-[275px] lg:w-[346px] lg:h-[346px] xl:h-[414px] xl:w-[414px]">
                <img alt='section_image_1' src={image} style={{ width: "100%" }} />
            </div>
            <div>
            <div className='flex flex-col text-center md:text-left md:w-[393px] lg:w-[530px] xl:w-[542px] gap-[20px]'>
                <h1 className='text-[#4F46E5] font-poppins font-semibold text-[27px] leading-[33px] tracking-[0.4px]'>Web and Mobile App Development</h1>
                <div>
                    <p className=' font-inter font-normal text-[16px] leading-[100%] tracking-[0%]'>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
                </div>
                <div className='flex justify-center md:justify-start'>
                    <button className="rounded-md     h-[38px] w-[129px] bg-[#F28D35]">
                        <span className="text-[14px] text-white font-bold leading-[100%] tracking-[0.2px]">Learn More</span>

                        <span className="group-hover:rotate-90 duration-300"></span>
                    </button>
                </div>
            </div>
            </div>
        </div>
    )
}
