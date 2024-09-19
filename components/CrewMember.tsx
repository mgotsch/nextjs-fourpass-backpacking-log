import Image from "next/image";
import { CrewMemberProps } from "../utils/types";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

export default function CrewMember({
  crewMember,
  delay = 0,
}: {
  crewMember: CrewMemberProps;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div 
      className="team-member"
      ref={ref}
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -200 }}
      transition={{ duration: 0.8, ease: [0.17, 0.55, 0.55, 1], delay: Math.min(0.1 * delay, 0.4) }}
    >
      <Image
        alt="Crew Member Photo"
        className="transform rounded-full"
        style={{ transform: 'translate3d(0, 0, 0)' }}
        src={crewMember.image}
        width={200}
        height={200}
      />
      <div className="p-2">
        <h2 className="text-2xl font-bold">{crewMember.name}</h2>
        <h3 className="italic">{crewMember.role}</h3>
      </div>
      <hr className="w-48 h-px my-1 mx-auto bg-gray-400 border-0 dark:bg-gray-700" />      
      <p className="py-2">{crewMember.blurb}</p>
    </motion.div>
  );
}