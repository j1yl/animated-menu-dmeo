"use client";

import { motion, useMotionValue } from "framer-motion";
import React, { MouseEventHandler } from "react";

type Props = {};

export default function Cursor({}: Props) {
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const handleMouse: MouseEventHandler = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.pageX - rect.left - 192);
    y.set(event.pageY - rect.top - 128);
  };

  return (
    <div className="w-max h-max" onMouseMove={handleMouse}>
      <motion.div
        className="w-96 h-64 border grid place-items-center border-black"
        style={{
          x: x,
          y: y,
        }}
      ></motion.div>
    </div>
  );
}
