import { motion } from "framer-motion";
const Keyframe = () => {
  return (
    <motion.div
      animate={{
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        rotate: [0, 0, 270, 270, 0],
        scale: [1, 1, 2, 1.5, 1],
        transition: {
          duration: 2,
        },
      }}
      className="bg-blue-500 border w-32 h-32 m-4"
    ></motion.div>
  );
};

export default Keyframe;
