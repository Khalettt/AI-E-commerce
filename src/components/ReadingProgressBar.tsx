import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

const ReadingProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary z-[60] origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ReadingProgressBar;
