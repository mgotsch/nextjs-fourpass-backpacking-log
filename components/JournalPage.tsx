import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const { faCircleLeft, faCircleRight } = require('@fortawesome/free-solid-svg-icons');

export default function JournalPage() {
  
  const totalPages= 10;
  const currentPage = 1;
  const handlePageChange = () => {
    console.log('Boom');
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="mb-4">
        <Image
          alt="Trail Log Pic"
          src="/images/crewImg.jpg"
          width={800} // Set the desired width
          height={600} // Set the desired height
          className="max-w-full h-auto"
        />
      </div>
      <div className="mb-4 p-4 bg-gray-200 rounded max-w-screen-lg">
        <p>As dawn broke on day one, the expedition was split into four separate groups. There was the advanced scouting party, a crack squad of Meg, Piotr, and myself, who had driven out to Basalt the night before and spent the evening acclimating to the altitude (read: putting away a few bevies with my aunt and uncle, gorging ourselves on lasagna that in the following days over yet another freeze-dried meal, we would each fantasize about wildly, and watching a thunderstorm that could principally be described as violent). The next group was Helena, Ben, and Andrea, our initial support force, who were to drive up from Denver that morning and grab a final meal for us to fuel up with at the trailhead. Then we had our duo of Cams, McInnes and Jones. Since Cam M is a big city slicker who runs on NYC time, he figured he'd minimize downtime & maximize profitability by flying in the afternoon of the start day, so Cam J was to pick him up from the airport and head straight out to meet us afterward. Rounding out the squad, we had the incomparable duo of Luke and Teddy (plus their trusty four-legged sidekick, Kenobi) who were going to head up as an adorable lil' domestic unit (s'cute)!</p>
      </div>
      <div className="flex items-center space-x-2">
        <button className="p-2 bg-gray-200 rounded">
          <FontAwesomeIcon icon={faCircleLeft} size="2x" />
        </button>
        <div className="flex items-center space-x-1">
          <div className="flex-1 p-2">
            <input
              type="number"
              value={currentPage}
              onChange={handlePageChange}
              min="1"
              max={totalPages}
              className="w-12 px-2 py-1 text-center appearance-none"
            />
          </div>
          <div className="p-2 flex items-center">/</div>
          <div className="flex-1 p-2">
            <span id="total-pages">{` ${totalPages}`}</span>
          </div>
        </div>
        <button className="p-2 bg-gray-200 rounded">
          <FontAwesomeIcon icon={faCircleRight} size="2x" />
        </button>
      </div>
    </div>  
  );
}