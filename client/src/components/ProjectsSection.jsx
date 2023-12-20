import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

import { useState, useEffect } from "react";
import { motion as m, AnimatePresence } from "framer-motion";

const ProjectsSection = ({ projectsArray }) => {
  const [canOpenApp, setCanOpenApp] = useState(true);
  const [openedApp, setOpenedApp] = useState(null);
  const [projects, setProjects] = useState(projectsArray);

  const closeApp = () => {
    setOpenedApp(null);
    setCanOpenApp(false);
    setTimeout(() => {
      setCanOpenApp(true);
    }, 500);
  };

  return (
    <div className="projects">
      <m.div
        className="h-screen bg-black 
      
      scrollbar-thin  scrollbar-thumb-white scrollbar-track-black
      w-full  overflow-scroll px-3"
      >
        {projectsArray.map((box) => {
          return (
            <ProjectCard
              key={box._id}
              project={box}
              canOpenApp={canOpenApp}
              setOpenedApp={setOpenedApp}
            />
          );
        })}

        <AnimatePresence>
          {openedApp && (
            <ProjectModal closeApp={closeApp} openedApp={openedApp} />
          )}
        </AnimatePresence>
      </m.div>
    </div>
  );
};

export default ProjectsSection;
