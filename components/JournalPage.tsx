import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { fetchCSV } from '../utils/csvParser';
import { CldImage } from "next-cloudinary";

export default function JournalPage() {
  
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [entries, setEntries] = useState([]);
  const [picturePairingData, setPicturePairingData] = useState([]);
  // const [imageSrc, setImageSrc] = useState("");

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
    // setImageSrc(`https://res.cloudinary.com/${
    //   process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
    // }/image/upload/c_scale,w_810/Four%20Pass%20Loop/${
    //   picturePairingData[currentPage - 1]?.file
    // }`);
  }, []);

  
  // const calculateMaxTextHeight = () => {
  //   const textDivElement = document.createElement('div');
  //   let maxHeight = 0;
  //   entries.forEach(entry => {
  //     textDivElement.textContent = entry.text;
  //     const height = textDivElement.offsetHeight;
  //     if (height > maxHeight) {
  //       maxHeight = height;
  //     }
  //   });
  //   return maxHeight;
  // };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? 1 : prevPage - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage === totalPages ? totalPages : prevPage + 1));
  };

  const handlePageChange = (e) => {
    const pageNumber = parseInt(e.target.value, 10);
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // const maxTextHeight = calculateMaxTextHeight();
  // console.log(maxTextHeight);

  // console.log(picturePairingData);
  // console.log(process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);
  // console.log(process.env.CLOUDINARY_FOLDER);
  // console.log(`https://res.cloudinary.com/${
  //   process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  // }/image/upload/c_scale,w_810/Four%20Pass%20Loop/${
  //   picturePairingData[currentPage - 1]?.file
  // }`);
  // console.log(imageSrc);
  // console.log(picturePairingData[currentPage - 1]?.link);
  


  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="relative mb-4 max-w-screen-lg">
        <div className="flex justify-between items-center">
          <div
            className="hover:bg-gray-200 rounded-l-md transition-colors duration-300 cursor-pointer h-full"
            onClick={handlePrevPage}
          >
            <FontAwesomeIcon icon={faAngleLeft} size="2x" className="m-2" />
          </div>
          <div>
            {/* <CldImage
              src={imageSrc}
              width={810}
              height={540}
              alt={`Trail Log Pic ${currentPage}`}
              priority
              className="max-w-full h-auto"
            /> */}
            <CldImage
              src={`${picturePairingData[currentPage - 1]?.link}`}
              width={810}
              height={540}
              alt={`Trail Log Pic ${currentPage}`}
              priority
            />
          </div>        
          <div
            className="hover:bg-gray-200 rounded-r-md transition-colors duration-300 cursor-pointer h-full"
            onClick={handleNextPage}
          >
            <FontAwesomeIcon icon={faAngleRight} size="2x" className="m-2" />
          </div>
        </div>
      </div>
      <div className="mb-4 p-4 max-w-screen-lg">
        <p>{entries[currentPage - 1]?.text}</p>
      </div>
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-1">
          <div className="flex-1 p-2">
            <input
              type="number"
              value={currentPage}
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
      </div>
    </div>
  );
}