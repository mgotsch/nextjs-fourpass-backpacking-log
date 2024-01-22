import Heading from "../../components/Heading";
import TitleImage from "../../components/TitleImage";
import CrewMember from "../../components/CrewMember";
import crewMembers from "../../data/crewMembers";

const Crew = () => {
  return(
    <>
      <Heading title={"The Crew"} />
      <main className="mx-auto max-w-[1960px]">
        <TitleImage
          page="crew" 
          title="The Crew"
          subTitle="An intrepid group of some of my favorite folks."
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