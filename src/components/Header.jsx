import { useState } from "react";
import logo from "../assets/Logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <nav className="app_container fixed w-full h-[80px] flex items-center justify-between   bg-[#4F46E5]">
        <div className="flex lg:flex-1">
          <img alt="logo" src={logo} style={{ width: "180px" }} />
        </div>
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center   text-gray-700"
          >
            {mobileMenuOpen ? (
              <FaTimes
                className="text-white"
                style={{ width: "31px", height: "24px", borderRadius: "3px" }}
              />
            ) : (
              <FaBars
                className="text-white"
                style={{ width: "31px", height: "24px", borderRadius: "3px" }}
              />
            )}
          </button>
        </div>

        <ul className="hidden md:flex gap-5 text-white font-inter font-medium">
          <li>SERVICES</li>
          <li>ABOUT US</li>
          <li>CONTACT US</li>
          <li>CAREERS</li>
        </ul>

        <ul
          className={`pt-[32px] app_container absolute top-[80px] left-0 h-screen w-full font-inter bg-white gap-[32px] flex flex-col transform transition-transform duration-300 ease-in-out
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}>
          <li>HOME</li>
          <li>SERVICES</li>
          <li>ABOUT US</li>
          <li>CONTACT US</li>
          <li>CAREERS</li>
        </ul>
      </nav>
    </div>
  );
};
