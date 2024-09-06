import React from "react";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { DiHtml5, DiCss3, DiJavascript, DiSqllite } from "react-icons/di";
import { animate, inView, motion } from "framer-motion";
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
  exit: { y: -10 },
});
const hoverAnimate = {
  scale: 1.1,
  transition: {
    duration: 0.2,
  },
};

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(2.5)}
          whileHover={hoverAnimate}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 bg-neutral-800 p-4"
        >
          <DiHtml5 className="text-7xl text-orange-400 " />
        </motion.div>

        <motion.div
          whileHover={hoverAnimate}
          className="rounded-2xl border-4 bg-neutral-800 p-4"
        >
          <DiCss3 className="text-7xl text-blue-400" />
        </motion.div>

        <motion.div
          whileHover={hoverAnimate}
          className="rounded-2xl border-4 bg-neutral-800 p-4"
        >
          <DiJavascript className="text-7xl text-yellow-400" />
        </motion.div>

        <motion.div
          whileHover={hoverAnimate}
          className="rounded-2xl border-4 bg-neutral-800 p-4"
        >
          <RiTailwindCssFill className="text-7xl text-sky-400" />
        </motion.div>

        <motion.div
          whileHover={hoverAnimate}
          className="rounded-2xl border-4 bg-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
          whileHover={hoverAnimate}
          className="rounded-2xl border-4 bg-neutral-800 p-4"
        >
          <DiSqllite className="text-7xl text-green-400" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
