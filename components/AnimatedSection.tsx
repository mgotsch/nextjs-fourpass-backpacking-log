import React, { useRef, ReactNode } from 'react';
import { motion, useInView } from "framer-motion";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = "", 
  direction = 'left',
  delay = 0
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const getInitialPosition = () => {
    switch(direction) {
      case 'right': return { x: 200 };
      case 'up': return { y: 200 };
      case 'down': return { y: -200 };
      default: return { x: -200 };
    }
  };

  return (
    <motion.div 
      className={className}
      ref={ref}
      initial={{ opacity: 0, ...getInitialPosition() }}
      animate={{ 
        opacity: isInView ? 1 : 0, 
        x: isInView ? 0 : (direction === 'left' ? -200 : direction === 'right' ? 200 : 0),
        y: isInView ? 0 : (direction === 'up' ? 200 : direction === 'down' ? -200 : 0)
      }}
      transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1], delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;