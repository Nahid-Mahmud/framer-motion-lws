import { motion } from "framer-motion";

const Box = ({ text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: "0px" }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: false,
      }}
      className="w-32 h-32 justify-center flex items-center text-center border rounded-sm bg-pink-300 text-black"
    >
      {text}
    </motion.div>
  );
};

const ScrollRevel = () => {
  // array of 15 words

  const words = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
  ];

  return (
    <div className="space-y-5 flex flex-col items-center m-10">
      {words.map((word, index) => {
        return <Box key={index} text={word} />;
      })}
    </div>
  );
};

export default ScrollRevel;
