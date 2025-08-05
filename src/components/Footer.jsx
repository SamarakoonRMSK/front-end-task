import logo from "../assets/Logo.png";

export const Footer = () => {
  return (
    <div className="app_container pt-[40px] pb-[20px] w-full bg-[#4F46E5] xl:h-[266px] flex flex-col gap-10">
      <div className="flex lg:justify-between lg:flex-row md:flex-col sm:flex-col md:gap-[60px] sm:gap-[60px]">
        <div className="xl:w-[413px] lg:w-[438px] md:w-[413px]  flex flex-col gap-[20px] ">
          <div className="w-[226px]">
            <img src={logo} alt="CompanyLogo" style={{ width: "100%" }} />
          </div>
          <div className="xl:w-[413px]">
            <p className="font-lato font-normal text-[16px] leading-[100%] tracking-[0] text-white">
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve single objective - your
              business results.
            </p>
          </div>
        </div>
        <div className="xl:w-[522px] lg:w-[530px] md:w-[511px] flex md:flex-row sm:flex-col lg:justify-between md:gap-[79px] sm:gap-[40px]">
          <div className="xl:w-[197px] lg:w-[255px] flex flex-col gap-[12px]">
            <p className="font-inter font-semibold text-[21px] leading-[100%] tracking-[0%] text-white">
              Our Technologies
            </p>
            <ul className="text-white flex flex-col gap-[12px] font-inter font-medium xl:text-[14px] leading-[100%] tracking-[0%]">
              <li>ReactJS</li>
              <li>Gatsby</li>
              <li>NextJS</li>
              <li>NodeJS</li>
            </ul>
          </div>
          <div className="xl:w-[197px] lg:w-[255px] flex flex-col gap-[12px]">
            <p className="font-inter font-semibold text-[21px] leading-[100%] tracking-[0%] text-white">
              Our Services
            </p>
            <ul className="text-white flex flex-col gap-[12px] font-inter font-medium xl:text-[14px] leading-[100%] tracking-[0%]">
              <li>Social media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analytics</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-auto sm:w-[335px] md:w-[630px]">
        <div className="flex items-center justify-center  ">
          <div className="border-t-2 border-white  sm:w-[335px] md:w-[630px]"></div>
        </div>

        <div className="flex justify-center  sm:gap-[16px]">
          <div className="">
            <span className="text-white font-inter font-medium xl:text-[14px] leading-[100%] tracking-[0%]">
              Privacy Policy
            </span>
          </div>
          <div className="text-white">|</div>
          <div className="">
            <span className="text-white font-inter font-medium xl:text-[14px] leading-[100%] tracking-[0%]">
              Terms & Conditions
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
