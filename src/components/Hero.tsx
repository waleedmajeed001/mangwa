"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const banners = [
  "/baaner5.png",
  "/baaner2.png",
  "/baaner8.png",
  
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Image Slider with Smooth Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute w-full h-full"
        >
          <Image
            src={banners[index]}
            alt="Banner"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
            className="w-full h-full"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Banner;
