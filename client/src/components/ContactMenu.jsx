import { IoMdClose } from "react-icons/io";
import ContactForm from "./ContactForm";
import { useState } from "react";

const ContactMenu = ({ setContactMenuOpen, contactMenuOpen }) => {
  return (
    <div
      style={{ left: contactMenuOpen ? "0" : "-120vw" }}
      className="w-full h-full absolute flex items-center flex-col justify-center bg-[#E1E1D1] z-50 transition-all ease-out duration-500"
    >
      <div className="flex flex-col items-center justify-center px-3 w-full mb-8">
        <h3 className="font-archivo text-[5rem] lg:text-[7rem] w-full truncate text-center lg:text-start">
          LET'S TALK
        </h3>
        <p className="text-[1.5rem] lg:text-[2.5rem] w-full">
          test text test text test text test text test text test text test text
          test text test text
        </p>
      </div>
      <ContactForm />
      <button
        onClick={() => setContactMenuOpen((prev) => !prev)}
        className="w-[50px] h-[50px] rounded-full border-2 border-black absolute top-5 right-5 flex justify-center items-center z-30 shadow-2xl transition-all hover:shadow-white duration-500  hover:scale-110 overflow-hidden "
      >
        <IoMdClose className="w-full h-full text-black " />
      </button>
      {/* <button onClick={() => setContactMenuOpen((prev) => !prev)}>Click</button> */}
    </div>
  );
};

export default ContactMenu;
