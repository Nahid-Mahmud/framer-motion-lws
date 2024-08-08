import React from "react";
import { motion } from "framer-motion";

function TextMotion() {
  const message = "I am a front-end Developer. I am an awesome Developer.";

  const wordArray = message?.split(" ");

  return (
    <div className="text-2xl m-4 text-center">
      {wordArray?.map((word, index) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index / 3 }}
          key={index}
        >
          {word}{" "}
        </motion.span>
      ))}
    </div>
  );
}

export default TextMotion;
