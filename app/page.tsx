"use client";

import {
  useMotionValue,
  motion,
  MotionValue,
  MotionConfig,
} from "framer-motion";
import Image from "next/image";
import { MouseEventHandler, useState } from "react";

export default function Home() {
  const [index, setIndex] = useState(-1);

  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const handleMouse: MouseEventHandler = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.pageX - rect.left - 196);
    y.set(event.pageY - rect.top - 128);
  };

  return (
    <div
      onMouseMove={handleMouse}
      className="w-full h-full min-h-screen flex relative"
    >
      <ul className="uppercase text-6xl flex flex-col m-auto select-none">
        <span className="bg-black w-full h-[1px]" />
        <li
          className="cursor-pointer relative group py-4"
          onMouseEnter={() => setIndex(0)}
          onMouseLeave={() => setIndex(-1)}
        >
          <span>Move your mouse here</span>
        </li>
        <span className="bg-black w-full h-[1px]" />
        <li
          className="cursor-pointer relative group py-4"
          onMouseEnter={() => setIndex(1)}
          onMouseLeave={() => setIndex(-1)}
        >
          <span>Move your mouse here</span>
        </li>
        <span className="bg-black w-full h-[1px]" />
        <li
          className="cursor-pointer relative group py-4"
          onMouseEnter={() => setIndex(2)}
          onMouseLeave={() => setIndex(-1)}
        >
          <span>Move your mouse here</span>
        </li>
        <span className="bg-black w-full h-[1px]" />
      </ul>
      <Cursor x={x} y={y} index={index} />
    </div>
  );
}

function Cursor({
  x,
  y,
  index,
}: {
  x: MotionValue;
  y: MotionValue;
  index: number;
}) {
  if (index === -1) return null;

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.75,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.div
        className="w-96 h-64 grid pointer-events-none overflow-hidden place-items-center absolute"
        style={{
          x: x,
          y: y,
        }}
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <div className="w-full h-full relative">
          <Image
            fill
            src={`/wp${index + 1}.jpg`}
            alt={`wp${index + 1}`}
            className="object-cover"
          />
        </div>
      </motion.div>
    </MotionConfig>
  );
}
