import { useState, useEffect } from "react";
import { motion as m } from "framer-motion";

const testUrl = "https://picsum.photos/seed/picsum/900/1000";
const ProjectCard = ({ setOpenedApp, canOpenApp, setIsModalOpen, project }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <m.div
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      onClick={() => {
        if (canOpenApp) {
          setOpenedApp(project);
        }
        if (canOpenApp && setIsModalOpen) {
          setOpenedApp(project);
          setIsModalOpen(true);
        }
      }}
      layoutId={project.title}
      initial={{ opacity: 0.1 }}
      animate={{ opacity: 0.7 }}
      whileHover={{ opacity: 1, scale: 1.02 }}
      className="w-full h-[500px] bg-black outline relative "
    >
      <m.img
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        src={testUrl}
        alt="project img"
        className=" h-[400px] w-full"
      />
      <div className="w-full h-[100px] bg-black absolute bottom-0 flex items-center justify-start ">
        <m.div className="w-full h-full flex items-center justify-start text-white font-archivo">
          <div className="flex flex-row  ">
            {"test prueba".split("").map((letra, i) => (
              <div
                className=" relative text-[30px] md:text-[40px] lg:text-[27px] lg:w-[1.5rem] w-[2rem]  h-[4rem]  md:h-[3rem]  overflow-hidden"
                key={i}
              >
                <div>{letra}</div>
                <m.div
                  className="absolute top-0 left-0 bg-black"
                  initial={{ left: "-100%" }}
                  animate={{ left: isHover ? "0%" : "-100%" }}
                  transition={{
                    duration: isHover ? 0.7 : 0.5,
                    ease: [0.7, 0, 0.3, 1]
                  }}
                >
                  {letra.toUpperCase()}
                </m.div>
              </div>
            ))}
          </div>
        </m.div>
      </div>
    </m.div>
  );
};

export default ProjectCard;
