import { CldImage } from "next-cloudinary";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  currentPage: number
  uniqueImageQueue: any
  transitionDirection: string
}

export default function LogCarousel({
  currentPage, 
  uniqueImageQueue, transitionDirection
} : Props ) {
  
  const positions = {
    exitRight : {
      opacity: 0,
      x: "100px",
      scale: 1.2,
      zIndex: 3,
    },
    main : {
      opacity: 1,
      x: "0",
      scale: 1,
      zIndex: 2,
    },
    next : {
      opacity: 0.66,
      x: "-100px",
      scale: 0.8,
      zIndex: 1,
    },
    nextNext : {
      opacity: 0.33,
      x: "-200px",
      scale: 0.6,
      zIndex: 0,
    },
    exitLeft : {
      opacity: 0,
      x: "-300px",
      scale: 0.4,
      zIndex: -1,
    }
  }
  
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
    <div className="relative flex justify-center items-center w-full max-w-[810px] h-[540px] mx-auto overflow-visible">
      <AnimatePresence initial={false}>
        {uniqueImageQueue.map((imageSrc, index) => (
          <motion.div
            key={`${currentPage}-${index}`}
            className="absolute w-full h-full flex items-center justify-center"
            initial={getImageAnimation(index + (transitionDirection === "next" ? 1 : -1))}
            animate={getImageAnimation(index)}
            exit={getImageAnimation(index + (transitionDirection === "next" ? -1 : 1))}
            transition={{
              duration: 0.5,
              ease:"easeInOut",
            }}
          >
            <CldImage
              src={imageSrc}
              width={810}
              height={540}
              dpr="1.7"
              alt={`Trail Log Pic ${currentPage + index + 1}`}
              priority
              className="w-auto max-h-[540px] rounded-[2rem] border-[5px] border-solid border-gray-200"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}