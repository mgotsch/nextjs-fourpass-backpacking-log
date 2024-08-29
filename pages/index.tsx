import Link from 'next/link';
import Heading from '../components/Heading';

export default function Home() {

  return(
    <>
      <Heading title={"Four Pass Loop Backpacking Trip"}/>
      <div className="bg-home h-screen bg-scroll bg-no-repeat bg-cover bg-center backdrop-blur text-slate-200 flex flex-col justify-center items-center">
        <div className="text-slate-200 flex flex-col justify-center items-center text-center backdrop-blur-sm p-10 border-8 border-white border-double w-4/5 max-w-[700px]">
          <h1 className="mb-4 text-5xl font-bold uppercase">
            Four Pass Loop
          </h1>
          <h2 className="text-2xl">
            Maroon Bells Wilderness
          </h2>
          <h3 className="text-2xl">
            Aspen, CO
          </h3>
          <p className="text-xl">
            August 03 - 06, 2023
          </p>
        </div>
        <div className="h-8"></div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 justify-center items-center">
          <Link href="/crew">
            <button className="w-36 backdrop-blur-sm text-slate-200 font-semibold py-2 px-4 border-2 border-white shadow hover:bg-slate-200 hover:text-gray-600 text-nowrap duration-300">
              Our Crew
            </button>
          </Link>
          <Link href="/trail">
            <button className="w-36 backdrop-blur-sm text-slate-200 font-semibold py-2 px-4 border-2 border-white shadow hover:bg-slate-200 hover:text-gray-600 duration-300">
              The Loop
            </button>
          </Link>
          <Link href="/journal">
            <button className="w-36 backdrop-blur-sm text-slate-200 font-semibold py-2 px-4 border-2 border-white shadow hover:bg-slate-200 hover:text-gray-600 duration-300">
              Trail Log
            </button>
          </Link>
          <Link href="/gallery">
            <button className="w-36 backdrop-blur-sm text-slate-200 font-semibold py-2 px-4 border-2 border-white shadow hover:bg-slate-200 hover:text-gray-600 duration-300">
              Photo Gallery
            </button>
          </Link>
        </div>
      </div>
    </>
  );
  
}