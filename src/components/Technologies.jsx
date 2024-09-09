import React from "react";
import { motion } from "framer-motion";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { DiHtml5, DiCss3, DiJavascript, DiSqllite } from "react-icons/di";

const Technologies = () => {
  const icons = [
    { Icon: DiHtml5, color: "text-orange-400" },
    { Icon: DiCss3, color: "text-blue-400" },
    { Icon: DiJavascript, color: "text-yellow-400" },
    { Icon: RiTailwindCssFill, color: "text-sky-400" },
    { Icon: RiReactjsLine, color: "text-cyan-400" },
    { Icon: DiSqllite, color: "text-green-400" },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {icons.map(({ Icon, color }, index) => (
          <motion.div
            key={index}
            className="rounded-2xl border-4 bg-neutral-800 p-4"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Icon className={`text-7xl ${color}`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
