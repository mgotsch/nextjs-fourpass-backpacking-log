import Heading from "../../components/Heading";
import Head from "next/head";
import CrewMember from "../../components/CrewMember";
import crewMembers from "../../data/crewMembers";

const Crew = () => {
  return(
    <>
      <Heading />
      <main className="mx-auto max-w-[1960px]">
        <Head>
          <title>The Crew</title>
        </Head>
        <div
          className="h-screen bg-scroll bg-no-repeat bg-cover bg-center backdrop-blur text-slate-200 flex flex-col justify-center items-center text-center"
          style={{
            backgroundImage: `url('/images/crewImg.jpg')`,
            }}
        >
          <div className="text-slate-200 flex flex-col justify-center items-center backdrop-blur-sm p-10 border-8 border-white border-double">
            <h1 className="mb-4 text-5xl font-bold uppercase">
              The Four Pass Loopers
            </h1>
            <h2 className="text-xl">
              An intrepid group of some of my favorite folks.
            </h2>
          </div>
        </div>
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