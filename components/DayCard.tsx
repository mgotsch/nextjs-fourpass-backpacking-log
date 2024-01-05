import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonHiking, faChartLine, faMountainSun } from "@fortawesome/free-solid-svg-icons";

export default function DayCard({day, route, miles, elevation, passes}) {
  
  return (
    <div className="relative mb-5 flex flex-col items-center gap-4 overflow-hidden py-16 rounded-lg bg-neutral text-center shadow-highlight after:pointer-events-none after:absolute after:rounded-lg after:shadow-highlight">
      <h1>{day}</h1>
      <h2>{route}</h2>
      <table className="p-4" width="70%">
        <tr>
          <th>
            <FontAwesomeIcon icon={faPersonHiking} /><br />
            Trail
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
      </table>
    </div>
  );
}