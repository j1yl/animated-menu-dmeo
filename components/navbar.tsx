"use client";

import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Modal from "./modal";

type Props = {};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Navbar({}: Props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeModal, setActiveModal] = React.useState<{
    active: boolean;
    i: number;
  } | null>(null);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      console.log(e.clientX, e.clientY);
      setMousePosition({ x: e.clientX - e.offsetX, y: e.clientY - e.offsetY });
    });

    return () => {
      window.removeEventListener("mousemove", (e) => {
        setMousePosition({
          x: e.clientX - e.offsetX,
          y: e.clientY - e.offsetY,
        });
      });
    };
  }, []);

  return (
    <div className="px-8 py-4 flex justify-end">
      <button
        className="w-max px-4 py-2 z-50 hover:text-black/40 font-semibold transition-all ease-in-out duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close" : "Menu"}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
            className="fixed top-0 flex flex-col justify-center left-0 px-8 py-4 w-full h-full"
          >
            <ul className="text-7xl first:border-t-0 last:border-b-0 leading-none gap-8 uppercase grid w-full">
              <li
                className="w-full"
                onMouseEnter={() => setActiveModal({ active: true, i: 0 })}
                onMouseLeave={() => setActiveModal(null)}
              >
                <Link
                  href="/test"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  Lorem, ipsum dolor.
                </Link>
              </li>
              <span className="w-full bg-neutral-300 h-[2px]" />
              <li
                className="w-full"
                onMouseEnter={() => setActiveModal({ active: true, i: 1 })}
                onMouseLeave={() => setActiveModal(null)}
              >
                <Link
                  href="/test"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  Lorem, ipsum dolor.
                </Link>
              </li>
              <span className="w-full bg-neutral-300 h-[2px]" />
              <li
                className="w-full"
                onMouseEnter={() => setActiveModal({ active: true, i: 2 })}
                onMouseLeave={() => setActiveModal(null)}
              >
                <Link
                  href="/test"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  Lorem, ipsum dolor.
                </Link>
              </li>
              <span className="w-full bg-neutral-300 h-[2px]" />
              <li
                className="w-full"
                onMouseEnter={() => setActiveModal({ active: true, i: 3 })}
                onMouseLeave={() => setActiveModal(null)}
              >
                <Link
                  href="/test"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  Lorem, ipsum dolor.
                </Link>
              </li>
            </ul>
            <Modal modal={activeModal} mousePosition={mousePosition} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
