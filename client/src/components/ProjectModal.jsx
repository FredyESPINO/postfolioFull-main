import { motion as m } from "framer-motion";
import { IoMdClose } from "react-icons/io";
const testUrl = "https://picsum.photos/seed/picsum/1500/1000";

const ProjectModal = ({ closeApp, openedApp }) => {
  return (
    <m.div
      layoutId={openedApp.title}
      className="absolute  w-screen h-screen top-0 bottom-0 right-0 left-0 z-10 bg-black flex items-center justify-center"
    >
      <m.button
        onClick={() => closeApp()}
        className="w-[50px] h-[50px] rounded-full border-2 border-white absolute top-5 right-5 flex justify-center items-center z-30 shadow-2xl transition-all hover:shadow-white duration-500  hover:scale-110 overflow-hidden "
      >
        <div className="w-[50px] h-[50px] flex flex-col items-star justify-center -rotate-45">
          <p className="w-full h-1/4 font-bold text-center text-sm  text-white">
            CLOSE
          </p>
          <p className="w-full h-1/4 font-bold text-center text-sm  text-white">
            CLOSE
          </p>
          <p className="w-full h-1/4 font-bold text-center text-sm  text-white">
            CLOSE
          </p>
          <p className="w-full h-1/4 font-bold text-center text-sm  text-white">
            CLOSE
          </p>
        </div>

        <m.div
          animate={{ x: [-100, 0, 0, 0, 0, 100] }}
          transition={{ ease: "linear", duration: 8, repeat: Infinity }}
          className="w-[50px] h-[50px] absolute bg-white  rounded-full"
        >
          <IoMdClose className="w-full h-full text-black " />
        </m.div>
      </m.button>

      <div className="w-full h-full relative flex items-center justify-center ">
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-[500px] h-[300px] bg-white"
        >
          {openedApp.title}
        </m.div>
      </div>
    </m.div>
  );
};

export default ProjectModal;
