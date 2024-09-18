import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DayData } from "../utils/types";
const { faPersonHiking, faChartLine, faMountainSun } = require("@fortawesome/free-solid-svg-icons");

export default function DayCard({day, route, miles, elevation, passes} : DayData) {
  return (
    <div className="relative flex flex-col items-center overflow-hidden py-8 sm:py-16 px-4 rounded-lg bg-neutral text-center shadow-highlight">
      <h2 className="text-xl sm:text-2xl font-bold">{day}</h2>
      <h3 className="italic text-sm sm:text-base">{route}</h3>
      <hr className="w-full max-w-[12rem] h-px my-2 mx-auto bg-gray-400 border-0 dark:bg-gray-700" />      
      <table className="p-2 sm:p-4 mt-2 sm:mt-4 w-full max-w-xs">
        <thead>
          <tr>
            <th className="px-1 sm:px-2">
              <FontAwesomeIcon icon={faPersonHiking} className="text-lg sm:text-xl" /><br />
              <span className="text-xs sm:text-sm">Distance</span>
            </th>
            <th className="px-1 sm:px-2">
              <FontAwesomeIcon icon={faChartLine} className="text-lg sm:text-xl" /><br />
              <span className="text-xs sm:text-sm">Elevation</span>
            </th>
            <th className="px-1 sm:px-2">
              <FontAwesomeIcon icon={faMountainSun} className="text-lg sm:text-xl" /><br/>
              <span className="text-xs sm:text-sm">Passes</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 text-sm sm:text-base">
              {miles}
            </td>
            <td className="py-2 text-sm sm:text-base">
              {elevation}
            </td>
            <td className="py-2 text-sm sm:text-base">
              {passes}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}