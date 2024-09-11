import Image from "next/image";
import { CrewMemberProps } from "../utils/types";

export default function CrewMember({
  crewMember,
}: {
  crewMember: CrewMemberProps
}) {
  return (
    <div className="team-member">
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
    </div>
  );
}
  