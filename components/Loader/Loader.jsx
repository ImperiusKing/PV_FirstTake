import React from "react";
import { motion } from "framer-motion";

import Image from "../Image";
import styles from "./loader.module.css";

// Import images

const container = {
  show: {
    transition: {
      staggerChildren: 0.35
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6
    }
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8
    }
  }
};

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6
    }
  }
};

const Loader = ({ setLoading }) => (
  <motion.div className="loader">
    <motion.div
      variants={container}
      onAnimationComplete={() => setLoading(false)}
      initial="hidden"
      animate="show"
      exit="exit"
      className={styles.loaderInner}
    >
      <ImageBlock variants={item} id="planet-01" />
      <motion.div variants={itemMain} className={styles.transitionImage}>
        <motion.img layoutId="main-image-1" src="/cover.png" />
      </motion.div>
      <ImageBlock variants={item} id="planet-03" />
      <ImageBlock variants={item} id="planet-04" />
      <ImageBlock variants={item} id="planet-05" />
    </motion.div>
  </motion.div>
);

export const ImageBlock = ({ posX, posY, variants, id }) => (
  <motion.div
    variants={variants}
    className={`${styles.imageBlock} ${id}`}
    style={{
      top: `${posY}vh`,
      left: `${posX}vw `,
    }}
  >
    <Image src={`/${id}.png`} fallback={`/${id}.png`} alt={id} />
  </motion.div>
);
export default Loader;

