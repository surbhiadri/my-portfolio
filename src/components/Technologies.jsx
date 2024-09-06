import React from "react";
import { RiReactjsLine } from "react-icons/ri";
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
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 bg-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        <div className="rounded-2xl border-4 bg-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>

        <div className="rounded-2xl border-4 bg-neutral-800 p-4">
          <RiReactjsLine className="text-7xl" />
        </div>

        <div className="rounded-2xl border-4 bg-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>

        <div className="rounded-2xl border-4 bg-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>

        <div className="rounded-2xl border-4 bg-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
