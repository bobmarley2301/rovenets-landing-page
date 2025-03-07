import React from "react";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  const lines = [
    {
      path: "M0,100 Q50,50 100,100",
      delay: 0,
      color: "text-amber-300/40",
      width: "1",
    },
    {
      path: "M20,80 Q70,30 120,80",
      delay: 0.2,
      color: "text-amber-400/50",
      width: "1.5",
    },
    {
      path: "M40,60 Q90,10 140,60",
      delay: 0.4,
      color: "text-amber-500/60",
      width: "2",
    },
    {
      path: "M60,40 Q110,-10 160,40",
      delay: 0.6,
      color: "text-amber-600/50",
      width: "1.5",
    },
    {
      path: "M80,20 Q130,-30 180,20",
      delay: 0.8,
      color: "text-amber-700/40",
      width: "1",
    },
    {
      path: "M0,150 Q30,100 60,150",
      delay: 1,
      color: "text-amber-300/40",
      width: "1",
    },
    {
      path: "M40,130 Q90,80 140,130",
      delay: 1.2,
      color: "text-amber-400/50",
      width: "1.5",
    },
    {
      path: "M80,110 Q130,60 180,110",
      delay: 1.4,
      color: "text-amber-500/60",
      width: "2",
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-amber-50" />
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 200 200"
        preserveAspectRatio="none"
      >
        {lines.map((line, index) => (
          <motion.path
            key={index}
            d={line.path}
            fill="none"
            stroke="currentColor"
            strokeWidth={line.width}
            className={line.color}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: 0.6,
            }}
            transition={{
              duration: 2.5,
              delay: line.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default AnimatedBackground;
