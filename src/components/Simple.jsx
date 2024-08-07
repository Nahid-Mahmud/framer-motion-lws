import { motion } from "framer-motion";

const Simple = () => {
  return (
    <motion.div
      initial={{
        scale: 0,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 1,
          delay: 0.5,
        },
      }}
      className="bg-red-500 border w-32 h-32 rounded-full"
    ></motion.div>
  );
};

export default Simple;
