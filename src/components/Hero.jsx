import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../../src/assets/sadri.png";
import { motion } from "framer-motion";
import { BiDownload } from "react-icons/bi";
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const handleResumeDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1vDPi2FAeW_14K_VvGKkVx6OsDJfGNKqa/view?usp=drivesdk ",
      "_blank"
    );
  };
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-start mb-2">
            <motion.button
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="flex md:hidden rounded-full bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 px-6 py-3 font-semibold text-white items-center  "
              onClick={handleResumeDownload}
            >
              Resume <BiDownload className="ml-2" />
            </motion.button>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Surbhi Kumari
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent "
            >
              FrontEnd Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
          <motion.button
            variants={container(1.5)}
            initial="hidden"
            animate="visible"
            className="hidden md:flex rounded-full bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 px-6 py-3 font-semibold text-white items-center  "
            onClick={handleResumeDownload}
          >
            Resume <BiDownload className="ml-2" />
          </motion.button>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              className="rounded-full"
              alt="Surbhi Kumari"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
