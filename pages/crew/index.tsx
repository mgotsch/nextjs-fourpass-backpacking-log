import Heading from "../../components/Heading";
import TitleImage from "../../components/TitleImage";
import CrewMember from "../../components/CrewMember";
import crewMembers from "../../data/crewMembers";
import { motion } from "framer-motion";

const Crew = () => {
  const staggerDelay = 0.2; // Delay between each crew member's animation

  return(
    <>
      <Heading title={"Our Crew - Four Days on the Four Pass Loop"} />
      <main className="mx-auto max-w-[1960px]">
        <TitleImage
          page="crew" 
          title="Our Crew"
          subTitle="An intrepid group of some of my favorite folks: nine confirmed people, one possible cyborg, one dog, and a mystical, mysterious, all-powerful force. Wouldn't have been possible (or half as fun) without them all."
        />
        <motion.div 
          className="team-container p-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: staggerDelay
              }
            }
          }}
        >
          {crewMembers.map((member, index) => (
            <CrewMember 
              key={member.name} 
              crewMember={member} 
              delay={index * staggerDelay}
            />
          ))}
        </motion.div>
      </main>
    </>
  );
}

export default Crew;