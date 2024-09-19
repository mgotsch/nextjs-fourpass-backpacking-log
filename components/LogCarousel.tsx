import { CldImage } from "next-cloudinary";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";

interface Props {
  currentPage: number
  uniqueImageQueue: any
  transitionDirection: string
}

export default function LogCarousel({
  currentPage, 
  uniqueImageQueue, transitionDirection
} : Props ) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  
  const getImageAnimation = (index) => {
    switch (index) {
      case -1:
        return {
          opacity: 0,
          x: "-200px",
          scale: 1.4,
          zIndex: -1,
        };
      case 0:
        return {
          opacity: 0,
          x: "100px",
          scale: 1.2,
          zIndex: 3,
        };
      case 1:
        return {
          opacity: 1,
          x: "0",
          scale: 1,
          zIndex: 2,
        };
      case 2:
        return {
          opacity: 0.66,
          x: "-100px",
          scale: 0.8,
          zIndex: 1,
        };
      case 3:
        return {
          opacity: 0.33,
          x: "-200px",
          scale: 0.6,
          zIndex: 0,
        };
      case 4:
        return {
          opacity: 0,
          x: "-300px",
          scale: 0.4,
          zIndex: -1,
        };
      default:
        return {
          opacity: 0,
          x: "-400px",
          scale: 0.4,
          zIndex: -1,
        };
    }
  };

  return (
    <div className="relative flex justify-center items-center w-full max-w-[810px] h-[300px] sm:h-[540px] mx-auto overflow-hidden">
      <AnimatePresence initial={false}>
        {uniqueImageQueue.slice(0, isMobile ? 3 : 4).map((imageSrc, index) => (
          <motion.div
            key={`${currentPage}-${index}`}
            className="absolute w-full h-full flex items-center justify-center"
            initial={getImageAnimation(index + (transitionDirection === "next" ? 1 : -1))}
            animate={getImageAnimation(index)}
            exit={getImageAnimation(index + (transitionDirection === "next" ? -1 : 1))}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <CldImage
              src={imageSrc}
              width={isMobile ? 400 : 810}              height={isMobile ? 300 : 540}
              dpr="1.7"
              alt={`Trail Log Pic ${currentPage + index + 1}`}
              priority
              className="w-auto max-h-[300px] sm:max-h-[540px] rounded-[1rem] sm:rounded-[2rem] border-[3px] sm:border-[5px] border-solid border-gray-200"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}