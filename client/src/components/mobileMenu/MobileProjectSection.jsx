import { useState, useEffect } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import {
  motion as m,
  AnimateSharedLayout,
  AnimatePresence,
} from "framer-motion";

import ProjectCard from "../ProjectCard";
import ProjectModal from "../ProjectModal";

const MobileProjectSection = ({
  isMenuOpen,
  setIsModalOpen,

  projectsArray,
}) => {
  const [canOpenApp, setCanOpenApp] = useState(true);
  const [openedApp, setOpenedApp] = useState(null);

  const closeApp = () => {
    setOpenedApp(null);
    setCanOpenApp(false);
    setIsModalOpen(false);
    setTimeout(() => {
      setCanOpenApp(true);
    }, 500);
  };

  return (
    <div
      className={`  ${
        isMenuOpen ? "top-0" : "top-[100%]"
      }  left-0 right-0 z-10 bottom-0 absolute delay-150 ease-in-out duration-300 lg:hidden  transition-all bg-black `}
    >
      <m.div className="h-screen bg-black no-scrollbar w-full  overflow-scroll px-5">
        {projectsArray.map((box) => (
          <ProjectCard
            key={box._id + "_M"}
            project={box}
            canOpenApp={canOpenApp}
            setOpenedApp={setOpenedApp}
            setIsModalOpen={setIsModalOpen}
          />
        ))}

        <AnimatePresence>
          {openedApp && (
            <ProjectModal closeApp={closeApp} openedApp={openedApp} />
          )}
        </AnimatePresence>
      </m.div>
    </div>
  );
};

export default MobileProjectSection;
