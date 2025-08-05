import background from "../assets/background.jpg";
import { Section } from "./Section";

export const Hero = () => {
  return (
    <div>

    
    <div className="w-full">
      <div
        className="bg_image relative top-[80px] left-0 w-full  bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="getFreeConsultation relative bg-gradient-to-r from-green-400 to-blue-500 flex flex-col justify-center gap-[20px]">
            <h1 className="leading-[100%]  tracking-[-0.02em] text-white font-inter font-bold md:text-[48px] sm:text-[36px] ">We Crush Your Competitors, Goals, And Sales Records - Without The B.S.</h1>
            <button className="h-[38px] rounded-md font-bold text-[14px] flex items-center  w-[214px]  py-[12px] px-[20px] text-white bg-[#F28D35]">
                <span className="">GET FREE CONSULTATION</span>
              </button>
        </div>
      </div>
    </div>
    <div>
      <Section/>
    </div>
    </div>
  );
};

