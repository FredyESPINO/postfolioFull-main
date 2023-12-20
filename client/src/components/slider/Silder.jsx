import React from "react";
import styles from "./slider.module.css";

const Silder = ({ arrayItems, heightContainer }) => {
  let arrayToRender = Array.isArray(arrayItems)
    ? arrayItems
    : Array(3).fill(arrayItems);

  return (
    <div
      className={`w-screen  relative flex flex-1 justify-center items-center  flex-row gap-16`}
      style={{ height: heightContainer ? heightContainer : "50px" }}
    >
      {[...Array(3)].map((_, index) => (
        <div key={index} className="flex  gap-16 ">
          {arrayToRender.map((item, i) => (
            <p
              key={i}
              className="text-black
            font-bold text-[50px]
             animate-slider
            "
            >
              {item}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Silder;
