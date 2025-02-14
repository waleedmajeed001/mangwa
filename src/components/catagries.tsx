"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"] as const;

const mangaData = [
  { title: "Blue-Lock", img: "/baaner1.png", likes: "39.7M", genre: "Adventure" },
  { title: "Lookism", img: "/baaner2.png", likes: "1.9M", genre: "Romance" },
  { title: "Solo leveling", img: "/baaner5.png", likes: "650,957", genre: "Adventure" },
  { title: "Jujutsu Kaisen", img: "/baaner3.png", likes: "12.4M", genre: "Fantasy" },
  { title: "Demon Slayer", img: "/baaner4.png", likes: "565,921", genre: "Fantasy" },
  { title: "Attack on titan", img: "/baaner6.png", likes: "10.7M", genre: "Fantasy" },
  { title: "Dragon Ball Z", img: "/baaner7.png", likes: "1.3M", genre: "Supernatural" },
  { title: "Naruto Shippuden", img: "/baaner8.png", likes: "317,673", genre: "Fantasy" },
];

// Explicitly typing the categories object
const categories: Record<string, typeof mangaData> = days.reduce((acc, day) => {
  acc[day] = [...mangaData];
  return acc;
}, {} as Record<string, typeof mangaData>);

const WeeklyManga = () => {
  const [activeDay, setActiveDay] = useState("SUN");

  return (
    <div className="w-full p-6 bg-black text-white">
      {/* Navigation Tabs */}
      <div className="flex justify-center gap-4 text-lg font-semibold pb-4">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`px-4 py-2 rounded-md transition ${
              activeDay === day ? "bg-green-500 text-white" : "text-gray-300 hover:bg-gray-700"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <motion.div
        key={activeDay}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-4 gap-4 mt-6"
      >
        {categories[activeDay]?.map((item, index) => (
          <motion.a
            key={index}
            href="#"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="bg-gray-900 shadow-md rounded-md w-full h-[200px] flex flex-col overflow-hidden cursor-pointer 
                      hover:brightness-110 transition-all"
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
  );
};

export default WeeklyManga;
