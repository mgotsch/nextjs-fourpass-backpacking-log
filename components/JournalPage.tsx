import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { fetchCSV } from '../utils/csvParser';
import { motion, Variant } from "framer-motion";
import LogCarousel from "./LogCarousel";


export default function JournalPage() {
  const [transitionDirection, setTransitionDirection] = useState("next");
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [entries, setEntries] = useState([]);
  const [picturePairingData, setPicturePairingData] = useState([]);

  useEffect(() => {
    fetch('/api/read-file')
      .then(response => response.json())
      .then(data => {
        const parsedEntries = [];
        let currentDay = 1;
        for (const paragraph of data) {
          if (paragraph.startsWith('Day')) {
            currentDay++;
          } else {
            parsedEntries.push({ day: currentDay, text: paragraph });
          }
        }
        setEntries(parsedEntries);
        setTotalPages(parsedEntries.length);
      });
    console.log('Done fetching.');
  }, []);

  useEffect(() => {
    async function loadPicturePairingData() {
      const csvData = await fetchCSV();
      console.log('data: ', csvData);
      setPicturePairingData(csvData);
    }
    loadPicturePairingData();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrevPage();
      } else if (e.key === 'ArrowRight') {
        handleNextPage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentPage, totalPages]);

  const handlePrevPage = () => {
    setTransitionDirection("previous");
    setCurrentPage((prevPage) => (prevPage === 0 ? 0 : prevPage - 1));
  };

  const handleNextPage = () => {
    setTransitionDirection("next");
    setCurrentPage((prevPage) => (prevPage === totalPages - 1 ? totalPages - 1 : prevPage + 1));
  };

  const handlePageChange = (e) => {
    const pageNumber = parseInt(e.target.value, 10);
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setTransitionDirection(pageNumber > currentPage + 1 ? "next" : "previous");
      setCurrentPage(pageNumber - 1);
    }
  };

  const getUniqueImageQueue = () => {
    const uniqueImages = [];
    let page = currentPage - 1;
    while (uniqueImages.length < 4 && page < totalPages) {
      const imageSrc = `${picturePairingData[page]?.link}` || `${picturePairingData[1]?.link}`;
      if (!uniqueImages.includes(imageSrc)) {
        uniqueImages.push(imageSrc);
      }
      page++;
    }
    return uniqueImages;
  };

  const uniqueImageQueue = getUniqueImageQueue();

  const textVariants = {
    hidden: {
      opacity: 0,
      x: transitionDirection === "next" ? 100 : -100,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="relative mb-4 max-w-screen-lg">
        <LogCarousel
          currentPage={currentPage}
          uniqueImageQueue={uniqueImageQueue}
          transitionDirection={transitionDirection}
        />
      </div>
      <div className="mb-4 p-4 max-w-screen-lg">
        <motion.div
          key={currentPage}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={textVariants}>
            {entries[currentPage]?.text}
          </motion.p>
        </motion.div>
      </div>
      <div className="flex items-center space-x-2 relative">
        <button
          className={`flex items-center justify-center bg-transparent h-[4.5rem] w-[4.5rem] border-solid ${currentPage !== 0 ? 'cursor-pointer' : 'cursor-default'}`}
          onClick={handlePrevPage}
          disabled={currentPage === 0}
        >
          <FontAwesomeIcon icon={faAngleLeft} size="2x" className="m-2" />
        </button>
        <div className="flex items-center space-x-1">
          <div className="flex-1 p-2">
            <input
              type="number"
              value={currentPage + 1}
              onChange={handlePageChange}
              min="1"
              max={totalPages}
              className="w-12 px-2 py-1 text-center appearance-none"
            />
          </div>
          <div className="p-2 flex items-center">/</div>
          <div className="flex-1 p-2">
            <span id="total-pages">{` ${totalPages}`}</span>
          </div>
        </div>
        <button
          className={`flex items-center justify-center bg-transparent h-[4.5rem] w-[4.5rem] border-solid ${currentPage !== totalPages - 1 ? 'cursor-pointer' : 'cursor-default'}`}
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
        >
          <FontAwesomeIcon icon={faAngleRight} size="2x" className="m-2" />
        </button>
      </div>
    </div>
  );
}
