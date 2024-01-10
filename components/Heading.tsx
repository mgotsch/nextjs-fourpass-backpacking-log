import Image from 'next/image';
import { useState } from 'react';

export default function Heading() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent text-white p-4 px-16 sm:px-8 flex justify-between items-center z-10 shadow-lg">
      {/* Logo */}
      <a href="/">
        <Image
          alt="Maroon Bells Line Drawing"
          src='/images/maroonBellsLineArtLine.png'
          width={75}
          height={75}
        />
      </a>

      {/* Hamburger Menu */}
      <div className="cursor-pointer" onClick={toggleMenu}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          )}
        </svg>
      </div>

      {/* Navigation Links */}
      <nav
        className={`${
          menuOpen
            ? 'absolute top-full right-0 bg-black p-4 flex flex-col items-end'
            : 'hidden'
        } lg:flex lg:items-start lg:w-auto`}
      >
        {menuOpen && (
          <>
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300">
              The Crew
            </a>
            <a href="/trail" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300">
              The Trail
            </a>
            <a href="/gallery" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300">
              The Gallery
            </a>
          </>
        )}
      </nav>
    </header>
  );
}