import React from "react";
import { motion as m } from "framer-motion";

const variants = {
  initial: {
    width: 0
  },
  enter: (i) => ({
    width: "100%",
    transition: { duration: 0.5, delay: 0.05 * i, ease: [0.33, 1, 0.68, 1] }
  }),
  exit: (i) => ({
    width: 0,
    transition: { duration: 0.3, delay: 0.05 * i, ease: [0.33, 1, 0.68, 1] }
  })
};

const LoadingScreen = () => {
  return (
    <div className="absolute top-0 right-0 h-screen transition-all duration-1000  z-[50] flex flex-col ">
      {[...Array(5)].map((_, index) => (
        <m.div
          variants={variants}
          initial={"initial"}
          animate={"enter"}
          exit={"exit"}
          custom={4 - index}
          className="w-screen h-[20vh] bg-blue-500  "
        />
      ))}
    </div>
  );
};

export default LoadingScreen;
