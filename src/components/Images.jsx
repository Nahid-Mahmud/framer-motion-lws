import Bags from "../assets/Bags.jpg";
import Cloathing from "../assets/cloathings.jpg";
import Computers from "../assets/Computers.jpg";
import Electronics from "../assets/ellectronics.jpg";
import FootWear from "../assets/Footwear.jpg";
import Furniture from "../assets/Furniture.jpg";
import Jewelary from "../assets/Jewelry.jpg";
import { motion, useAnimate, stagger } from "framer-motion";
import { useState, useEffect } from "react";

const staggerImages = stagger(0.1, { startDelay: 0.15 });

const ImagesArray = [
  {
    id: 1,
    image: Bags,
  },
  {
    id: 2,
    image: Cloathing,
  },
  {
    id: 3,
    image: Computers,
  },
  {
    id: 4,
    image: Electronics,
  },
  {
    id: 5,
    image: FootWear,
  },
  {
    id: 6,
    image: Furniture,
  },
  {
    id: 7,
    image: Jewelary,
  },
];

const Images = () => {
  // state for show Hide images
  const [showImages, setShowImages] = useState(false);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      ".images",
      {
        opacity: showImages ? 1 : 0,
      },
      {
        duration: 0.7,
        delay: showImages ? staggerImages : 0,
      }
    );
  }, [showImages, animate]);

  return (
    <div className="p-10" ref={scope}>
      <motion.button
        className="imageButton text-purple-900 mb-3 px-3 py-2  border-2 border-purple-400 bg-purple-300 rounded-md"
        //   animation
        whileTap={{ scale: 0.9 }}
        whileHover={{
          scale: 1.07,
        }}
        onClick={() => setShowImages((prev) => !prev)}
      >
        {showImages ? "Hide Images" : "Show Images"}
      </motion.button>

      {/* Images */}

      <div className="grid grid-cols-4 gap-4">
        {ImagesArray.map((image) => (
          <motion.div key={image.id} className="images rounded-md overflow-hidden" whileHover={{ scale: 1.05 }}>
            {showImages && <img src={image.image} className={`h-80 w-full`} alt="images" />}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Images;
