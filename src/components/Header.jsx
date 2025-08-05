import { useEffect, useState } from "react";
import logo from "../assets/Logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [mobileMenuOpen]);

  return (
    <div>
      <nav className="z-10 app_container fixed w-full h-[80px] flex items-center justify-between   bg-[#4F46E5]">
        <div className="flex lg:flex-1">
          <Link to={"/"}>
          <img alt="logo" src={logo} style={{ width: "180px" }} />
</Link>
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
          <Link><li>SERVICES</li></Link>
          <Link><li>ABOUT US</li></Link>
          <Link><li>CONTACT US</li></Link>
          <Link><li>CAREERS</li></Link>
        </ul>

        <ul
          className={`pt-[32px]   app_container absolute top-[80px] left-0 h-screen w-full font-inter bg-white gap-[32px] flex flex-col transform transition-transform duration-300 ease-in-out
          ${mobileMenuOpen ? "translate-x-0 " : "translate-x-full"} md:hidden`}>
          <Link to={"/"}><li>HOME</li></Link>
          <Link><li>SERVICES</li></Link>
          <Link><li>ABOUT US</li></Link>
          <Link><li>CONTACT US</li></Link>
          <Link><li>CAREERS</li></Link>
        </ul>
      </nav>
    </div>
  );
};
