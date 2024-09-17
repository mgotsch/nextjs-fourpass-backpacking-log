import Link from 'next/link';
import Heading from '../components/Heading';

export default function Home() {

  return(
    <>
      <Heading title={"Four Days on the Four Pass Loop"}/>
      <div className="bg-home h-screen bg-scroll bg-no-repeat bg-cover bg-center backdrop-blur text-slate-200 flex flex-col justify-center items-center">
        <div className="text-slate-200 flex flex-col justify-center items-center text-center backdrop-blur-sm p-10 border-8 border-white border-double w-4/5 max-w-[700px]">
          <h1 className="my-4 text-6xl font-bold uppercase">
            Four Days <div className="md:hidden"></div><span className="text-4xl md:text-5xl">on the</span><div className="h-2"></div>Four Pass Loop
          </h1>
          <h2 className="text-xl">
            Maroon Bells - Snowmass Wilderness
          </h2>
          <h2 className="text-xl">
            Aspen, Colorado
          </h2>
          <h3 className="text-l italic">
            August 03 - 06, 2023
          </h3>
        </div>
        <div className="h-10"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-2 justify-center items-center">
          <Link href="/crew">
            <button className="title-button w-40 backdrop-blur-sm text-slate-200 font-semibold py-2 px-4 border-2 border-white shadow hover:bg-slate-200 hover:text-gray-600 text-nowrap duration-300">
              Our Crew
            </button>
          </Link>
          <Link href="/loop">
            <button className="title-button w-40 backdrop-blur-sm text-slate-200 font-semibold py-2 px-4 border-2 border-white shadow hover:bg-slate-200 hover:text-gray-600 duration-300">
              The Loop
            </button>
          </Link>
          <Link href="/traillog">
            <button className="title-button w-40 backdrop-blur-sm text-slate-200 font-semibold py-2 px-4 border-2 border-white shadow hover:bg-slate-200 hover:text-gray-600 duration-300">
              Trail Log
            </button>
          </Link>
          <Link href="/gallery">
            <button className="title-button w-40 backdrop-blur-sm text-slate-200 font-semibold py-2 px-4 border-2 border-white shadow hover:bg-slate-200 hover:text-gray-600 duration-300">
              Photo Gallery
            </button>
          </Link>
        </div>
      </div>
    </>
  );
  
}