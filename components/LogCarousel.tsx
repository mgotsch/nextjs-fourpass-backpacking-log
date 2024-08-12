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
  const transitonModifier = transitionDirection === "next" ? -1 : 1;
  
  const positions = {
    exitRight : (transitonModifier) =>({
      opacity: 0,
      x: "100px",
      scale: 1.2,
      zIndex: 3,
    }),
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

  const getVariantMatching = (index, direction) => {
    switch (index) {
      case 1 :
        return {
          'initial': direction === "previous" ? positions.exitRight : positions.exitRight,
          'animate': direction === "previous" ? positions.exitRight : positions.exitRight,
          'exit': direction === "previous" ? positions.exitRight: positions.main 
        }
      case 2 : 
        return {
          'initial': direction === "previous" ? positions.next : positions.exitRight,
          'animate': direction === "previous" ? positions.main : positions.main,
          'exit': direction === "previous" ? positions.exitRight: positions.next 
        }
      case 3 :
        return {
          'initial': direction === "previous" ? positions.nextNext : positions.main,
          'animate': direction == "previous" ? positions.next : positions.next,
          'exit': direction === "previous" ? positions.main: positions.nextNext 
        }
      case 4 : 
        return {
          'initial': direction === "previous" ? positions.next : positions.exitLeft,
          'animate': direction === "previous" ? positions.nextNext : positions.nextNext,
          'exit': direction === "previous" ? positions.exitLeft: positions.next 
        }
      default:
        return {
          'initial': direction === "previous" ? positions.exitRight : positions.exitRight,
          'animate': direction === "previous" ? positions.exitRight : positions.exitRight,
          'exit': direction === "previous" ? positions.exitRight: positions.main 
        }
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
    <div className="relative flex justify-center items-center w-[810px] h-[540px]">
      <AnimatePresence initial={false}>
        {uniqueImageQueue.map((imageSrc, index) => (
          <motion.div
            key={`${currentPage}-${index}`}
            className="absolute w-auto max-h-[540px]"
            custom={transitionDirection}
            variants={positions}
            initial={{ 
              // ...getVariantMatching(index, transitionDirection)['initial'], 
              ...getImageAnimation(index - transitonModifier),
            }}
            animate={{
              // ...getVariantMatching(index, transitionDirection)['animate'], 
              ...getImageAnimation(index),
            }}
            exit={{ 
              // ...getVariantMatching(index, transitionDirection)['exit'],
              ...getImageAnimation(index + transitonModifier),
            }}
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
              className="w-auto max-h-[540px] rounded-[2rem] border-[5px] border-solid border-[#f5f5f5]"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}