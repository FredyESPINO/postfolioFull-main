import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const MenuButton = ({ setIsMenuOpen, isModalOpen }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <button
      onClick={() => {
        setIsMenuOpen((prev) => !prev);
        setToggle((prev) => !prev);
      }}
      className={` ${
        isModalOpen ? "bottom-[-100%]" : " bottom-0 translate-y-1/2"
      }  
      ${toggle ? "bg-white" : "bg-black"}
      w-[100px] h-[100px] rounded-full  absolute z-20   transition-all left-[calc(50%-35px)]  lg:hidden flex items-center justify-center`}
    >
      <div className="-translate-y-[20px] ">
        {toggle ? (
          <IoIosCloseCircle className="w-[35px] h-[35px] text-black" />
        ) : (
          <GiHamburgerMenu className="w-[25px] h-[25px]  text-white" />
        )}
      </div>
    </button>
  );
};

export default MenuButton;
