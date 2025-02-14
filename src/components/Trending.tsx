'use client';

import Image from 'next/image';

const trending = [
  { id: 1, title: 'Isaki', author: 'Human', genre: 'Trending', img: '/Charater1.png' },
  { id: 2, title: 'Looksim', author: 'Human', genre: 'Trending', img: '/Charater2.png' },
  { id: 3, title: 'Goku', author: 'Sayan', genre: 'Trending', img: '/Charater3.png' },
  { id: 4, title: 'Naruto', author: 'Chakara', genre: 'Trending', img: '/Charater4.png' },
  { id: 5, title: 'Tanjiro', author: 'Human', genre: 'Trending', img: '/Charater5.png' },
];

const thrillers = [
  { id: 1, title: 'Kasir', author: 'Human', img: '/Charater6.png' },
  { id: 2, title: 'Dr.Stone', author: 'Human', img: '/Charater7.png' },
  { id: 3, title: "Hanaku", author: 'Dead', img: '/Charater8.png' },
  { id: 4, title: 'Sakamoto', author: 'Killer', img: '/Charater9.png' },
  { id: 5, title: 'Kunigami', author: 'Human', img: '/Charater10.png' },
];

export default function TrendingThrillers() {
  return (
    <div className='bg-black p-8'>
      <div className="grid grid-cols-2 gap-10 p-8 mx-28">
        {/* New & Trending Section */}
        <div className=" p-4">
          <h2 className="text-xl font-bold mb-4">Trending Charater</h2>
          {trending.map((item) => (
            <div key={item.id} className="flex items-center gap-4 mb-4 p-2">
              <Image src={item.img} alt={item.title} width={50} height={50} className="rounded" />
              <div>
                <p className="text-sm text-gray-500">{item.genre}</p>
                <h3 className="text-md text-white font-semibold">{item.title}</h3>
                <p className="text-xs text-gray-400">{item.author}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Thriller Genre Section */}
        <div className='mx-20 p-4'>
          <h2 className="text-xl font-bold mb-4">Fomous Charater</h2>
          {thrillers.map((item) => (
            <div key={item.id} className="flex items-center gap-4 mb-4 p-2">
              <Image src={item.img} alt={item.title} width={50} height={50} className="rounded" />
              <div>
                <p className="text-sm text-gray-500">Famous</p>
                <h3 className="text-md text-white font-semibold">{item.title}</h3>
                <p className="text-xs text-gray-400">{item.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
