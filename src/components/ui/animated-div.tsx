"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimatedDivProps = {
  children: ReactNode;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const divVariants = {
  hidden: { x: "-100vw" },
  visible: { x: 0, transition: { type: "spring", stiffness: 50 } },
};

export default function AnimatedDiv({ children }: AnimatedDivProps) {
  return (
    <motion.div
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="box" variants={divVariants}></motion.div>
    </motion.div>
  );
}
