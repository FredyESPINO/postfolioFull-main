import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";

import { SiExpress } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";

import { SiMongoose } from "react-icons/si";
import { SiPrisma } from "react-icons/si";

import { AiOutlineConsoleSql } from "react-icons/ai";
import { SiMongodb } from "react-icons/si";

const stackData = {
  frontEnd: {
    stackTitle: "FrontEnd",
    stacks: [
      {
        title: "HTML",
        icon: <ImHtmlFive className="w-[85px] h-[80px] font-black " />
      },
      {
        title: "CSS",
        icon: <IoLogoCss3 className="w-[85px] h-[80px] font-black " />
      },
      {
        title: "Javascript",
        icon: <IoLogoJavascript className="w-[85px] h-[80px] font-black " />
      },
      {
        title: "React",
        icon: <FaReact className="w-[85px] h-[80px] font-black " />
      },
      {
        title: "NextJS",
        icon: <SiNextdotjs className="w-[85px] h-[80px] font-black " />
      }
    ]
  },
  backEnd: {
    stackTitle: "BackEnd",
    stacks: [
      {
        title: "SQL",
        icon: <AiOutlineConsoleSql className="w-[85px] h-[80px] font-black " />
      },
      {
        title: "MongoDB",
        icon: <SiMongodb className="w-[85px] h-[80px] font-black " />
      },
      {
        title: "Express",
        icon: <SiExpress className="w-[85px] h-[80px] font-black " />
      }
    ]
  },
  others: {
    stackTitle: "Others",
    stacks: [
      {
        title: "Prisma",
        icon: <SiPrisma className="w-[85px] h-[80px] font-black " />
      },
      {
        title: "Mongoose",
        icon: <SiMongoose className="w-[85px] h-[80px] font-black " />
      }
    ]
  }
};

export default stackData;
