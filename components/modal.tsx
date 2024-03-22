"use client";

import { motion } from "framer-motion";
import React from "react";

type Props = {
  modal: {
    active: boolean;
    i: number;
  } | null;
  mousePosition: { x: number; y: number };
};

export default function Modal({ modal, mousePosition }: Props) {
  if (!modal) return null;

  const cursorVariants = {
    hidden: {
      scale: 0,
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
    visible: {
      scale: 1,
      x: mousePosition.x,
      y: mousePosition.y,
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={cursorVariants}
      className="h-32 w-32 aspect-square grid place-items-center absolute rounded-full pointer-events-none bg-black text-white uppercase"
    >
      {modal.i}
    </motion.div>
  );
}
