import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Heading({
  title,
}: {
  title: string
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const changeBackground = () => {
    if(window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header className={`fixed top-0 left-0 right-0 text-white p-2 sm:px-8 flex justify-between items-center z-10 shadow-lg"
        ${navbar ? "bg-black" : "bg:transparent"}`}
      >
        {/* Logo */}
        <Link href="/">
          <Image
            alt="Maroon Bells Line Drawing"
            src='/images/maroonBellsLineArtLine.png'
            width={75}
            height={75}
            priority
          />
        </Link>

        {/* Hamburger Menu */}
        <div className="cursor-pointer" onClick={toggleMenu}>
          <svg
            className="w-8 h-8"
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
          className={`navlinks ${
            menuOpen
              ? `absolute top-full right-0 px-4 flex flex-col items-end ${navbar ? "bg-black" : "bg:gray-400"}`
              : 'hidden'
          } lg:flex lg:items-start lg:w-auto`}
        >
          {menuOpen && (
            <>
              <a href="/crew" className="block my-2 lg:inline-block lg:mt-0 text-white hover:text-gray-300">
                Our Crew
              </a>
              <a href="/loop" className="block my-2 lg:inline-block lg:mt-0 text-white hover:text-gray-300">
                The Loop
              </a>
              <a href="/traillog" className="block my-2 lg:inline-block lg:mt-0 text-white hover:text-gray-300">
                Trail Log
              </a>
              <a href="/gallery" className="block my-2 lg:inline-block lg:mt-0 text-white hover:text-gray-300">
                Photo Gallery
              </a>
            </>
          )}
        </nav>
      </header>
    </>
    
  );
}