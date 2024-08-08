import { motion } from "framer-motion";

const ButtonTap = () => {
  return (
    <div>
      <motion.button
        className="bg-green-500 border px-3 m-5 py-1 rounded-md text-white "
        whileTap={{ scale: 0.5 }}
        whileHover={{ scale: 1.2 }}
      >
        Tap Me
      </motion.button>

      <br />

      <motion.button
        className="bg-green-500 border px-3 m-5 py-1 rounded-md text-white "
        whileTap={{ scale: 0.5 }}
        whileHover={{
          scale: 1.2,
          transition: {
            yoyo: Infinity,
          },
        }}
      >
        Tap Me
      </motion.button>
    </div>
  );
};

export default ButtonTap;
