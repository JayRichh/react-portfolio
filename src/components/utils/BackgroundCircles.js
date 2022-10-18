import React from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";

const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 1.5, 1.3, 1, 1],
        opacity: [1, 0.4, 0.3, 0.8, 0.4, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="pointer-events-none relative flex justify-center items-center"
      id="circles-div"
    >
      <div className="pointer-events-none absolute border border-[#333333] opacity-10 rounded-full h-[200px] w-[200px] animate-ping" />
      <div className="pointer-events-none border border-[#333333] opacity-10 rounded-full h-[300px] w-[300px] absolute" />
      <div className="pointer-events-none rounded-full border border-[#333333] opacity-5 h-[500px] w-[500px] absolute" />
      <div className="pointer-events-none rounded-full border border-[#721cac] opacity-10 h-[650px] w-[650px] absolute animate-pulse" />
      <div className="pointer-events-none border border-[#333333] opacity-5 rounded-full h-[850px] w-[850px] absolute" />
    </motion.div>
  );
};

export default BackgroundCircles;
