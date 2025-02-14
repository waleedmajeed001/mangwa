"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const trendingManga = [
  { title: "Blue-Lock", img: "/baaner1.png", likes: "39.7M", genre: "Adventure" },
  { title: "Lookism", img: "/baaner2.png", likes: "1.9M", genre: "Romance" },
  { title: "Solo leveling", img: "/baaner5.png", likes: "650,957", genre: "Adventure" },
  { title: "Jujutsu Kaisen", img: "/baaner3.png", likes: "12.4M", genre: "Fantasy" },
];

const popularManga = [
  { title: "Demon Slayer", img: "/baaner4.png", likes: "565,921", genre: "Fantasy" },
  { title: "Attack on titan", img: "/baaner6.png", likes: "10.7M", genre: "Fantasy" },
  { title: "Dragon Ball Z", img: "/baaner7.png", likes: "1.3M", genre: "Supernatural" },
  { title: "Naruto Shippuden", img: "/baaner8.png", likes: "317,673", genre: "Fantasy" },
];

const GenreManga = () => {
  return (
    <div className="w-full p-6 bg-black text-white">
      {/* Trending Block */}
      <div className="mb-6">
      <h2 className="text-center mb-2 text-4xl font-bold text-white">Trending</h2>
        <motion.div className="grid grid-cols-4 gap-4">
          {trendingManga.map((item, index) => (
            <motion.a
              key={index}
              href="#"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="bg-gray-900 shadow-md rounded-md w-full h-[200px] flex flex-col overflow-hidden cursor-pointer hover:brightness-110 transition-all"
            >
              <div className="relative w-full h-[130px]">
                <Image src={item.img} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-2 text-center">
                <h3 className="text-sm font-semibold truncate">{item.title}</h3>
                <p className="text-xs text-gray-400">❤️ {item.likes}</p>
                <p className="text-xs text-green-400">{item.genre}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Popular Block */}
      <div className="mt-6">
        <h2 className="text-center mb-2 text-4xl font-bold text-white">Popular</h2>
        <motion.div className="grid grid-cols-4 gap-4">
          {popularManga.map((item, index) => (
            <motion.a
              key={index}
              href="#"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="bg-gray-900 shadow-md rounded-md w-full h-[200px] flex flex-col overflow-hidden cursor-pointer hover:brightness-110 transition-all"
            >
              <div className="relative w-full h-[130px]">
                <Image src={item.img} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-2 text-center">
                <h3 className="text-sm font-semibold truncate">{item.title}</h3>
                <p className="text-xs text-gray-400">❤️ {item.likes}</p>
                <p className="text-xs text-green-400">{item.genre}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default GenreManga;
