// pages/crew/index.tsx
import type { NextPage } from 'next'
import Heading from "../../components/Heading";
import TitleImage from "../../components/TitleImage";
import CrewMember from "../../components/CrewMember";
import AnimatedSection from '../../components/AnimatedSection';
import crewMembers from "../../data/crewMembers";

const Crew: NextPage = () => {
  const staggerDelay = 0.07;

  return(
    <>
      <Heading title={"Our Crew - Four Days on the Four Pass Loop"} />
      <main className="mx-auto max-w-[1960px]">
        <TitleImage
          page="crew" 
          title="Our Crew"
          subTitle="An intrepid group of some of my favorite folks: nine confirmed people, one possible cyborg, one dog, and a mystical, mysterious, all-powerful force. Wouldn't have been possible (or half as fun) without them all."
        />
        <div className="team-container p-8">
          {crewMembers.map((member, index) => (
            <AnimatedSection 
              className='overflow-hidden content-center'
              key={member.name} 
              direction="left"
              delay={index * staggerDelay}
            >
              <CrewMember crewMember={member} delay={index} />
            </AnimatedSection>
          ))}
        </div>
      </main>
    </>
  );
}

export default Crew;
