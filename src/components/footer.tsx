"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-3 border border-white pt-4 lg:px-9 bg-black text-gray-300">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <Link href="#" className="inline-flex items-center">
            <Image src="/logo.png" alt="logo" width={32} height={32} />
            <span className="ml-2 text-xl font-bold tracking-wide text-white">
              Mangwa Haven . Your Ultimate Anime & Manga Blog
            </span>
          </Link>
          <div className="mt-6 lg:max-w-xl">
            <p className="text-sm">
              Welcome to Mangwa Haven, your go-to destination for the latest anime and manga news, reviews, and
              recommendations! Dive into in-depth discussions, character analyses, and the hottest trends in the
              anime world. Whether you're a seasoned otaku or just starting your manga journey, we've got something
              for everyone. Stay updated, stay inspired, and explore the vibrant universe of anime and manga with us! 🚀🎌
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <p className="text-base font-bold tracking-wide text-white">Popular Courses</p>
          <Link href="#" className="hover:text-purple-400">UPSC - Union Public Service Commission</Link>
          <Link href="#" className="hover:text-purple-400">General Knowledge</Link>
          <Link href="#" className="hover:text-purple-400">MBA</Link>
          <p className="text-base font-bold tracking-wide text-white mt-2">Popular Topics</p>
          <Link href="#" className="hover:text-purple-400">Human Resource Management</Link>
          <Link href="#" className="hover:text-purple-400">Operations Management</Link>
          <Link href="#" className="hover:text-purple-400">Marketing Management</Link>
        </div>

        <div>
          <p className="text-base font-bold tracking-wide text-white">COMPANY IS ALSO AVAILABLE ON</p>
          <div className="flex items-center gap-1 px-2">
            <Link href="#" className="w-full min-w-xl">
              <Image src="https://mcqmate.com/public/images/icons/playstore.svg" alt="Playstore Button" width={100} height={40} />
            </Link>
            <Link href="https://www.youtube.com/channel/UCo8tEi6SrGFP8XG9O0ljFgA" className="w-full min-w-xl">
              <Image src="https://mcqmate.com/public/images/icons/youtube.svg" alt="Youtube Button" width={100} height={40} />
            </Link>
          </div>
          <p className="text-base font-bold tracking-wide text-white mt-4">Contacts</p>
          <div className="flex">
            <p className="mr-1">Email:</p>
            <Link href="#" title="send email" className="hover:text-purple-400">waleedmajeed630@gmail.com</Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-gray-700 lg:flex-row">
        <p className="text-sm">© Copyright 2023 Company. All rights reserved.</p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <Link href="https://github.com/waleedmajeed001" className="text-sm transition-colors duration-300 hover:text-purple-400">
              Code by: Waleed
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
