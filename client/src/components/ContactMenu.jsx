import { IoMdClose } from "react-icons/io";
import ContactForm from "./ContactForm";

const ContactMenu = ({ setContactMenuOpen, contactMenuOpen }) => {
  return (
    <div
      style={{ left: contactMenuOpen ? "0" : "-120vw" }}
      className="w-full h-full absolute flex items-center justify-center bg-blue-500 z-20 transition-all ease-out duration-500"
    >
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
