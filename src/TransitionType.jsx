import { motion } from "framer-motion";
import { Fragment } from "react";
const TransitionType = () => {
  return (
    <div className="space-y-5">
      {/* 1st */}
      <motion.div initial={{ opacity: 0, x: "-100vh" }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 2 }}>
        <h1>Learning Amimation</h1>

        <p>I am a front-end Developer. I am an awesome Developer.</p>
      </motion.div>{" "}
      {/* 2nd */}
      <motion.div
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, type: "spring" }}
      >
        <h1>Learning Amimation</h1>

        <p>I am a front-end Developer. I am an awesome Developer.</p>
      </motion.div>{" "}
      {/* 3rd */}
      <motion.div
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, type: "spring", bounce: 0.8 }}
      >
        <h1>Learning Amimation</h1>

        <p>I am a front-end Developer. I am an awesome Developer.</p>
      </motion.div>
    </div>
  );
};

export default TransitionType;
