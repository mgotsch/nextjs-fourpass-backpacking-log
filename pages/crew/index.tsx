import Heading from "../../components/Heading";
import TitleImage from "../../components/TitleImage";
import CrewMember from "../../components/CrewMember";
import crewMembers from "../../data/crewMembers";

const Crew = () => {
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
          {crewMembers.map((member) => (
            <CrewMember crewMember={member}/>
          ))}
        </div>
      </main>
    </>
  );
}

export default Crew;