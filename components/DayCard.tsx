import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DayData } from "../utils/types";
const { faPersonHiking, faChartLine, faMountainSun } = require("@fortawesome/free-solid-svg-icons");

export default function DayCard({day, route, miles, elevation, passes} : DayData) {
  return (
    <div className="relative flex flex-col items-center overflow-hidden py-16 rounded-lg bg-neutral text-center shadow-highlight">
      <h2 className="text-2xl font-bold">{day}</h2>
      <h3 className="italic">{route}</h3>
      <hr className="w-48 h-px my-2 mx-auto bg-gray-400 border-0 dark:bg-gray-700" />      
      <table className="p-4 mt-4" width="70%">
        <thead>
          <tr>
            <th>
              <FontAwesomeIcon icon={faPersonHiking} /><br />
              Distance
            </th>
            <th>
              <FontAwesomeIcon icon={faChartLine} /><br />
              Elevation
            </th>
            <th>
              <FontAwesomeIcon icon={faMountainSun} /><br/>
              Passes
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {miles}
            </td>
            <td>
              {elevation}
            </td>
            <td>
              {passes}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}