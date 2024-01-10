import Heading from "../../components/Heading";
import Head from "next/head";
import Link from "next/link";
import DayCard from "../../components/DayCard";

export default function TrailRoute () {
  return (
    <>
      <Heading />
      <main className="mx-auto max-w-[1960px] p-4 pt-28">
        <Head>
          <title>The Trail</title>
        </Head>
        <div
          className="h-screen bg-scroll bg-no-repeat bg-cover bg-center backdrop-blur text-slate-200 flex flex-col justify-center items-center text-center"
          style={{
            backgroundImage: `url('/images/trailImg.jpg')`,
            }}
        >
          <div className="text-slate-200 flex flex-col justify-center items-center backdrop-blur-sm p-10 border-8 border-white border-double">
            <h1 className="mb-4 text-5xl font-bold uppercase">
              The Four Pass Loop Trail + Geneva Lake
            </h1>
            <h2 className="text-2xl">
              Maroon Bells Wilderness, Elk Range
            </h2>
            <div>
              <table>
                <tr>
                  <td>
                    28.5 mi
                  </td>
                  <td>
                    8,251 ft elev. gain
                  </td>
                  <td>
                    4 Mountain Passes Over 12,000 ft
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="h-16"></div>
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          <DayCard day={'Day 1'} route={'Trailhead - Maroon Zone'} miles={'5.6 mi'} elevation={'2,241 ft'} passes={0}/>
          <DayCard day={'Day 2'} route={'Maroon Zone - Geneva Lake'} miles={'10.2 mi'} elevation={'2,680 ft'} passes={2}/>
          <DayCard day={'Day 3'} route={'Geneva Lake - Snowmass Lake'} miles={'4.4 mi'} elevation={'1,522 ft'} passes={1}/>
          <DayCard day={'Day 4'} route={'Snowmass Lake - Trailhead'} miles={'8.3 mi'} elevation={'1,808 ft'} passes={1}/>
        </div>
        <div className="h-8"></div>
        <div>
          <iframe className="alltrails" src="https://www.alltrails.com/widget/map/four-pass-loop-71a5c05-2?u=i&sh=kp35c4" scrolling='no' width="80%" height="600" title="Four Pass Loop Trail"></iframe>
        </div>
        <div className="h-16"></div>
        </main>
      </>
  );
}