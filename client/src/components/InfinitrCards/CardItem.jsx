import { motion as m } from "framer-motion";

const FrontData = ({ title, icon }) => (
  <section className="flex justify-center items-center flex-col gap-2">
    <div>{icon}</div>
    <p className="font-mono font-bold text-[20px] ">{title}</p>
  </section>
);

const CardItem = ({ card, onDirectionLock, onDragEnd, animate, style }) => {
  return (
    <m.div
      drag
      animate={animate}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragDirectionLock
      onDirectionLock={onDirectionLock}
      onDragEnd={onDragEnd}
      className="w-[150px] h-[150px] bg-white rounded-md absolute text-black
       p-[10px]"
      whileTap={{ scale: 0.85 }}
      style={{ ...style }}
      transition={{ ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <FrontData icon={card.icon} title={card.title} />
    </m.div>
  );
};

export default CardItem;
