"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const mangaList = [
  { title: "Dr Stone", img: "/new1.png", likes: "39.7M", genre: "Science" },
  { title: "One Punch Man", img: "/new2.png", likes: "1.9M", genre: "Fantasy" },
  { title: "Possibly Greatest Alchemist", img: "/new3.png", likes: "650K", genre: "Romance" },
  { title: "Demon Slayer", img: "/banner4.png", likes: "12.4M", genre: "Fantasy" },
  { title: "Magic Maker", img: "/new4.png", likes: "10.7M", genre: "Supernatural" },
  { title: "Toilet bound Hanako kun", img: "/new5.png", likes: "1.3M", genre: "Comedy" },
  { title: "Solo Leveling", img: "/new6.png", likes: "317K", genre: "Fantasy" },
  { title: "My Happy Marriage", img: "/new7.png", likes: "565K", genre: "Romance" },
];

const NewManga = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + itemsPerPage) % mangaList.length);
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? mangaList.length - itemsPerPage : prevIndex - itemsPerPage
    );
  };

  return (
    <div className="relative w-full p-6 bg-black text-white">
      {/* Background Banner */}
      <div className="absolute top-0 left-0 w-full h-[250px] bg-gradient-to-b from-black via-gray-900 to-black"></div>

      {/* Title Section */}
      <div className="relative flex flex-col items-center justify-center py-10">
        <h1 className="text-4xl font-bold text-white">Explore New Manga</h1>
        <p className="text-gray-500 text-sm mt-2">Discover the latest trending manga series.</p>
      </div>

      {/* Manga Section */}
      <div className="relative flex items-center justify-center group">
        {/* Left Button (Show on Hover) */}
        <button
          onClick={prevSlide}
          className="absolute left-0 bg-gray-900 p-3 rounded-full hover:bg-gray-700 transition opacity-0 group-hover:opacity-100"
        >
          ◀
        </button>

        {/* Manga Grid */}
        <motion.div
          key={startIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-4 gap-6"
        >
          {mangaList.slice(startIndex, startIndex + itemsPerPage).map((manga, index) => (
            <motion.a
              key={index}
              href="#"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="bg-gray-950 shadow-lg rounded-xl w-[230px] h-[320px] flex flex-col overflow-hidden cursor-pointer hover:brightness-125 transition-all"
            >
              <div className="relative w-full h-[180px]">
                <Image src={manga.img} alt={manga.title} fill className="object-cover rounded-t-xl" />
              </div>
              <div className="p-3 text-center">
                <h3 className="text-sm font-semibold truncate text-gray-200">{manga.title}</h3>
                <p className="text-xs text-gray-400">❤️ {manga.likes}</p>
                <p className="text-xs text-purple-500">{manga.genre}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Right Button (Show on Hover) */}
        <button
          onClick={nextSlide}
          className="absolute right-0 bg-gray-900 p-3 rounded-full hover:bg-gray-700 transition opacity-0 group-hover:opacity-100"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default NewManga;
