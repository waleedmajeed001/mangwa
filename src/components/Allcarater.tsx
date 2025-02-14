import Image from "next/image";

const webtoons = [
  { title: "The Silence", author: "lilliumboi", img: "/Charater1.png" },
  { title: "I LIKE MY B...", author: "Couch_pOTatOee", img: "/Charater2.png" },
  { title: "SADIMARI", author: "whimsecah", img: "/Charater3.png" },
  { title: "Raspberry J...", author: "instant_karma05", img: "/Charater4.png" },
  { title: "Our Unext...", author: "LuPop_arts", img: "/Charater5.png" },
  { title: "FIO", author: "tough bunny", img: "/Charater6.png" },
  { title: "Small Mem...", author: "LauraAreiza", img: "/Charater7.png" },
  { title: "the Little C...", author: "Averywithawhy", img: "/Charater8.png" },
  { title: "TO THE MAX", author: "Jeremyabi", img: "/Charater9.png" },
  { title: "Separate cr...", author: "hannahart9", img: "/Charater10.png" },
];

export default function Allcarater() {
  return (
    <div className="flex bg-black items-center justify-center gap-6 h-full pb-10">
      {/* Centered WEBTOON CANVAS Statement */}
      <div className="w-1/3 text-center">
        <h2 className="text-green-600 font-bold text-3xl">Mangwa Haven</h2>
        <p className="mt-2 text-white">
          Have a story to tell? Share it on <br /> Mangwa Haven. Find everything you <br /> need to get it published.
        </p>
        <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded">
          Find out more →
        </button>
      </div>

      {/* Webtoon Grid (Right Side) */}
      <div className="w-2/3 grid grid-cols-5 gap-4">
        {webtoons.map((webtoon, index) => (
          <div key={index} className="relative group transition-transform duration-300 ease-in-out hover:scale-105">
            <Image
              src={webtoon.img}
              alt={webtoon.title}
              width={150}
              height={150}
              className="rounded-lg"
            />
            <div className="absolute bottom-2 left-2 text-white text-sm transition duration-300 ease-in-out group-hover:text-green-400">
              <strong>{webtoon.title}</strong>
              <p>{webtoon.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
