import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={` ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } font-poppins cursor-ponter font-normal text-[16px] text-white`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        {/* conditional rendering = if my toggle is turned on ? close it or else show menu */}
      </div>

      <div className={`${toggle ? 'flex' : 'hidden'} bg-black-gradient p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px]  rounded-xl  sidebar`}>
      <ul className="list-none flex flex-col justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={` ${
              index === navLinks.length - 1 ? "mr-0" : "mb-4"
            } font-poppins cursor-ponter font-normal text-[16px] text-white`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
