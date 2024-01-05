import Heading from "../../components/Heading";
import DayCard from "../../components/DayCard";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trail',
};

export default function TrailRoute () {
  return (
    <>
      <Heading />
      <main className="mx-auto max-w-[1960px] p-4">
        <div> The Four Pass Loop</div>
        <table>
          <tr>
            <td>
              28.5 mi
            </td>
            <td>
              8,251 ft elev. gain
            </td>
            <td>
              4 Mountain Passes over 12,000'
            </td>
          </tr>
        </table>
        <div>
          <iframe className="alltrails" src="https://www.alltrails.com/widget/map/four-pass-loop-71a5c05-2?u=i&sh=kp35c4" scrolling='no' width="80%" height="600" title="Four Pass Loop Trail"></iframe>
        </div>
        <br />
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          <DayCard day={'Day 1'} route={'Trailhead - Maroon Zone'} miles={'5.6 mi'} elevation={'2,241 ft'} passes={0}/>
          <DayCard day={'Day 2'} route={'Maroon Zone - Geneva Lake'} miles={'10.2 mi'} elevation={'2,680 ft'} passes={2}/>
          <DayCard day={'Day 3'} route={'Geneva Lake - Snowmass Lake'} miles={'4.4 mi'} elevation={'1,522 ft'} passes={1}/>
          <DayCard day={'Day 4'} route={'Snowmass Lake - Trailhead'} miles={'8.3 mi'} elevation={'1,808 ft'} passes={1}/>
        </div>
        </main>
      </>
  );
}