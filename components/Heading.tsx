import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { motion, Variants } from 'framer-motion';

// Variants for nav list items
const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

export default function Heading({
  title,
}: {
  title: string;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header
        className={`fixed top-0 left-0 right-0 text-white p-2 sm:px-8 flex justify-between items-center z-10 ${
          (navbar || menuOpen) ? 'bg-black shadow-lg' : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <Link href="/">
          <Image
            alt="Maroon Bells Line Drawing"
            src="/images/maroonBellsLineArtLine.png"
            width={75}
            height={75}
            priority
          />
        </Link>

        {/* Hamburger Menu */}
        <motion.div
          className="cursor-pointer"
          onClick={toggleMenu}
          whileTap={{ scale: 0.97 }}
        >
          <motion.svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            animate={menuOpen ? { rotate: 180 } : { rotate: 0 }}
          >
            {menuOpen ? (
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></motion.path>
            ) : (
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></motion.path>
            )}
          </motion.svg>
        </motion.div>

        {/* Navigation Links with Framer Motion */}
        <motion.nav
          initial={false}
          animate={menuOpen ? 'open' : 'closed'}
          className={`${
            menuOpen
              ? `absolute top-full right-0 px-4 flex flex-col items-end pr-7 ${(navbar || menuOpen) ? "bg-black shadow-lg" : "bg:transparent"}`
              : 'hidden'
          } lg:flex lg:w-auto`}
        >
          {/* Dropdown Menu */}
          <motion.ul
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0%)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50%)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            className={`navlinks ${
              menuOpen
                ? 'absolute top-full right-0 w-max h-auto px-4 py-1 bg-black shadow-lg'
                : 'hidden'
            }`}
            style={{ pointerEvents: menuOpen ? "auto" : "none", maxWidth: '250px' }}
          >
            <motion.li variants={itemVariants} className="py-1">
              <a href="/" className="block my-1 lg:inline-block text-white hover:text-gray-300">
                Home
              </a>
            </motion.li>
            <motion.li variants={itemVariants} className="py-1">
              <a href="/crew" className="block my-1 lg:inline-block text-white hover:text-gray-300">
                Our Crew
              </a>
            </motion.li>
            <motion.li variants={itemVariants} className="py-1">
              <a href="/loop" className="block my-1 lg:inline-block text-white hover:text-gray-300">
                The Loop
              </a>
            </motion.li>
            <motion.li variants={itemVariants} className="py-1">
              <a href="/traillog" className="block my-1 lg:inline-block text-white hover:text-gray-300">
                Trail Log
              </a>
            </motion.li>
            <motion.li variants={itemVariants} className="py-1">
              <a href="/gallery" className="block my-1 lg:inline-block text-white hover:text-gray-300">
                Photo Gallery
              </a>
            </motion.li>
          </motion.ul>
        </motion.nav>
      </header>
    </>
  );
}