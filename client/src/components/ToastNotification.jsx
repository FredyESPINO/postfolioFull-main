import React, { useEffect } from "react";
import { motion as m } from "framer-motion";

const ToastNotification = ({ state, setState }) => {
  return (
    <m.div className="w-[50px] h-[20px] bg-green-500 absolute">
      ToastNotification
    </m.div>
  );
};

export default ToastNotification;
