import { motion as m } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
const testUrl = "https://picsum.photos/seed/picsum/1500/1000";

const ModalCard = ({ backgroundImg, title, text, siteURL, githubURL }) => {
  return (
    <article className=" border-2 border-white w-full h-full flex flex-col relative">
      <div className=" w-[75vw] h-[60vh] left-0 right-0 ml-auto mr-auto top-0 bottom-0 mt-auto mb-auto absolute  -z-10">
        <img
          alt={`image alt`}
          className="object-fill w-full h-full"
          src={testUrl}
        />
      </div>
      <div className="w-full h-full relative  border-blue-500 border-2 flex items-center justify-center flex-col p-8 text-white">
        <h4 className="text-[75px] lg:text-[150px] font-bold font-outline-2">
          Title
        </h4>
        <p className="text-[25px] lg:text-[35px] text-center font-bold font-outline-2 absolute bottom-2">
          Description parrafo parrafo parrafo Description parrafo parrafo
          parrafo
        </p>
      </div>
      <a href="https://www.google.com" target="_black" rel="nonreferrer">
        <m.button className="w-[50px] h-[50px] rounded-full border-2 border-white absolute left-5 top-[45vh] lg:left-12  flex justify-center items-center z-30 shadow-2xl transition-all hover:shadow-white duration-500  hover:scale-110 overflow-hidden ">
          <div className="w-[50px] h-[50px] absolute bg-white z-10  rounded-full">
            <FaCode className="w-full h-full text-black " />
          </div>
        </m.button>
      </a>

      <a href="https://www.github.com" target="_black" rel="nonreferrer">
        <m.button className="w-[50px] h-[50px] rounded-full border-2 border-white absolute right-5 lg:right-12 top-[45vh]  flex justify-center items-center z-30 shadow-2xl transition-all hover:shadow-white duration-500  hover:scale-110 overflow-hidden ">
          <div className="w-[50px] h-[50px] absolute bg-white z-10  rounded-full">
            <FaGithub className="w-full h-full text-black " />
          </div>
        </m.button>
      </a>
    </article>
  );
};

const ProjectModal = ({ closeApp, openedApp }) => {
  return (
    <m.dialog
      layoutId={openedApp.title}
      className="absolute  w-screen h-full top-0 bottom-0 right-0 left-0 z-10 bg-black flex items-center justify-center "
    >
      <m.button
        onClick={() => closeApp()}
        className="w-[50px] h-[50px] rounded-full border-2 border-white absolute top-5 right-5 flex justify-center items-center z-30 shadow-2xl transition-all hover:shadow-white duration-500  hover:scale-110 overflow-hidden "
      >
        <div className="w-[50px] h-[50px] absolute bg-white z-10  rounded-full">
          <IoMdClose className="w-full h-full text-black " />
        </div>
      </m.button>

      <ModalCard />
    </m.dialog>
  );
};

export default ProjectModal;
