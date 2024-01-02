import {
  useMotionValue,
  useTransform,
  motion as m,
  useAnimationControls
} from "framer-motion";
import { useState } from "react";

import CardItem from "./CardItem";

let isAvilableToHover = true;

const InfiniteContainer = ({ card, title }) => {
  const [cards] = useState(card);
  const [cardsTest, setCardsTest] = useState(card);
  const [indexCard, setIndexCard] = useState(cardsTest.length - 1);
  const [showTextTitle, setShowTextTitle] = useState(title);

  // MOTION VARIABLES
  const controls = useAnimationControls();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [dragStart, setDragStart] = useState({
    axis: null,
    animation: { x: 0, y: 0 }
  });
  const scale = useTransform(
    dragStart.axis === "x" ? x : y,
    [-175, 0, 175],
    [1, 0.5, 1]
  );

  // MOTION FUNCTIONS
  const animateCardSwipe = (animation) => {
    setDragStart({ ...dragStart, animation });
    setIndexCard((prev) => (prev === 0 ? card.length - 1 : prev - 1));

    setTimeout(() => {
      setDragStart({
        axis: null,
        animation: { x: 0, y: 0 }
      });
      x.set(0);
      y.set(0);

      setCardsTest([
        cards[indexCard],
        ...cardsTest.slice(0, cardsTest.length - 1)
      ]);
    }, 500);
  };

  const onDragEnd = (info) => {
    if (dragStart.axis === "x") {
      if (info.offset.x >= 100) {
        animateCardSwipe({ x: 175, y: 0 });
      } else if (info.offset.x <= -100) {
        animateCardSwipe({ x: -175, y: 0 });
      }
    }
    if (dragStart.axis === "y") {
      if (info.offset.y >= 100) {
        animateCardSwipe({ y: 175, x: 0 });
      } else if (info.offset.y <= -100) {
        animateCardSwipe({ y: -175, x: 0 });
      }
    }
  };

  const onDirectionLock = (axis) => setDragStart({ ...dragStart, axis: axis });

  return (
    <div
      onClick={() => {
        if (isAvilableToHover) {
          isAvilableToHover = false;
          controls.start({
            opacity: [0, 0.5, 1],
            transition: { duration: 0.7 }
          });
          setShowTextTitle("Swipe cards");
          setTimeout(() => {
            controls.start({
              opacity: [0, 0.5, 1],
              transition: { duration: 0.7 }
            });
            setShowTextTitle(title);
            isAvilableToHover = true;
          }, 5000);
        }
      }}
    >
      <m.h3
        animate={controls}
        className="w-full text-center text-[25px] font-bold font-archivo"
      >
        {showTextTitle}
      </m.h3>
      <div className="w-[200px] h-[200px] bg-black overflow-hidden rounded-lg flex relative items-center justify-center">
        {cardsTest.map((info, index) => {
          if (index === cardsTest.length - 1) {
            return (
              <CardItem
                key={index}
                card={info}
                style={{ x, y, zIndex: index }}
                onDirectionLock={(axis) => onDirectionLock(axis)}
                onDragEnd={(e, info) => onDragEnd(info)}
                animate={dragStart.animation}
              />
            );
          } else {
            return (
              <CardItem
                key={index}
                card={info}
                style={{ scale, zIndex: index }}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default InfiniteContainer;
