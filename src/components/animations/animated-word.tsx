'use client'
import { motion } from "framer-motion"

type AnimatedWordProp = {
  text: string
}

export default function AnimatedWord({ text }: AnimatedWordProp) {
  //variants for the container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.24, delayChildren: 0.04 * i },
    }),
  };

  //variants for each word

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  // split the sentance by the space
  const words = text.split(" ")

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", fontSize: "6rem" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "10px" }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>  )
}
