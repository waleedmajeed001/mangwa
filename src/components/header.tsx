"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black shadow-lg py-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="#" className="flex items-center text-primary hover:text-secondary">
          <Image src="/logo.png" alt="Logo" width={32} height={32} className="mr-2" />
          <span className="text-2xl font-bold text-white">Mangwa Haven</span>
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-white hover:text-gray-300 focus:outline-none transition duration-300"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {["Home", "About", "Service", "Contact"].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-green-500 font-bold transition duration-300 text-white">
                  {item}
                </Link>
              </li>
            ))}
            <li>
                <Link
                  href="#"
                  className="block text-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105"
                >
                  Start Read
                </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Sidebar & Backdrop */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Background Overlay */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={`fixed right-0 top-0 h-full w-64 bg-black shadow-lg transform transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-400 transition duration-300"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Mobile Nav Links */}
          <nav className="mt-16">
            <ul className="flex flex-col justify-center items-center space-y-6 px-6">
              {["Home", "About", "Service", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="block text-white text-lg hover:text-green-500 font-bold transition duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#"
                  className="block text-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105"
                >
                  Start Read
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
