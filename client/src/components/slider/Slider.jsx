import React, { useRef, useEffect } from "react";
import styles from "./slide.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Slider = () => {
  const marqueeRef = useRef();
  const box1Ref = useRef();
  const box2Ref = useRef();
  let direction = 1;
  const duration = 8;

  useEffect(() => {
    const marquee = marqueeRef.current;
    const box1 = box1Ref.current;
    const box2 = box2Ref.current;

    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      onReverseComplete() {
        this.totalTime(this.rawTime() + this.duration() * 10);
      }
    });
    const ps = [box1, box2];
  }, []);
  return (
    <div
      ref={marqueeRef}
      className="w-[60vw] flex flex-row whitespace-nowrap justify-end bg-red-500"
    >
      <p ref={box1Ref} className="mx-8 text-[3rem] text-black">
        Oi, oi!1
      </p>
      <p ref={box2Ref} className="mx-8 text-[3rem] text-black">
        Oi, oi!2
      </p>
    </div>
  );
};

export default Slider;
