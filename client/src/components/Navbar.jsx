import React from "react";
import { motion as m } from "framer-motion";

import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import LogoSVG from "./LogoSVG";
import LogoGradient from "./Logo/LogoGradient";

const navbarItemsData = [
  {
    title: "LinkedIn",
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/juanespinoh/"
  },
  {
    title: "Email",
    icon: <MdEmail />,
    href: "#contact"
  }
];

// const NavbarLinkItem = ({ title, icon, href, rel }) => {
//   return (
//     <a href={href} target="_black" rel="nonreferrer">
//       <m.li className="text-black w-10 h-10 text-[1.5rem] border-2 border-black rounded-full flex  justify-center items-center hover:w-24  hover:justify-start  transition-all ease-linear group duration-100 ">
//         <div className=" groip-hover:justify-start rounded-full w-9 h-9 flex  justify-center items-center ">
//           {icon}
//         </div>
//         <p className="hidden font-archivo group-hover:block text-[10px] font-extrabold ease-linear  text-black mx-1">
//           {title}
//         </p>
//       </m.li>
//     </a>
//   );
// };

const Navbar = ({ setContactMenuOpen }) => {
  return (
    <div className="  w-full h-[70px] bg-white flex justify-end items-center px-2  md:px-10">
      {/* <div className=" w-[250px]  h-[60px] flex flex-row justify- items-center ">
        <LogoGradient />
        <div className="w-[200px] h-full  flex items-center  justify-center">
          <p className=" text-start self-center text-2xl  truncate capitalize font-saira font-extrabold ">
            Portfolio Fredy Espino
          </p>
        </div>
      </div> */}

      <div className=" w-40 h-auto flex flex-row justify-evenly items-center">
        <a
          href="https://www.linkedin.com/in/juanespinoh/"
          target="_black"
          rel="nonreferrer"
        >
          <m.li className="text-black w-10 h-10 text-[1.5rem] border-2 border-black rounded-full flex  justify-center items-center hover:w-24  hover:justify-start  transition-all ease-linear group duration-100 ">
            <div className=" groip-hover:justify-start rounded-full w-9 h-9 flex  justify-center items-center ">
              <FaLinkedin />
            </div>
            <p className="hidden font-archivo group-hover:block text-[10px] font-extrabold ease-linear  text-black mx-1">
              LinkedIn
            </p>
          </m.li>
        </a>
        <button onClick={() => setContactMenuOpen((prev) => !prev)}>
          <m.li className="text-black w-10 h-10 text-[1.5rem] border-2 border-black rounded-full flex  justify-center items-center hover:w-24  hover:justify-start  transition-all ease-linear group duration-100 ">
            <div className=" groip-hover:justify-start rounded-full w-9 h-9 flex  justify-center items-center ">
              <MdEmail />
            </div>
            <p className="hidden font-archivo group-hover:block text-[10px] font-extrabold ease-linear  text-black mx-1">
              Email
            </p>
          </m.li>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
