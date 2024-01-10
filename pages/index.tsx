import Head from 'next/head'
import Link from 'next/link';
import Heading from '../components/Heading';

export default function Home() {

  return(
    <>
      <Head>
        <title>Four Pass Loop Backpacking Trip</title>
      </Head>
      <Heading/>
      <div
        className="h-screen bg-scroll bg-no-repeat bg-cover bg-center backdrop-blur text-slate-200 flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url('/images/landingImg.jpg')`,
          }}
      >
        <div className="text-slate-200 flex flex-col justify-center items-center backdrop-blur-sm p-10 border-8 border-white border-double">
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
        <div className="flex flex-row justify-center items-center space-x-10">
          <Link href="/crew">
            <button className="w-32 backdrop-blur-sm text-slate-200 font-semibold py-2 px-4 border-2 border-white shadow hover:bg-slate-200 hover:text-gray-600 text-nowrap">
              The Crew
            </button>
          </Link>
          <Link href="/trail">
            <button className="w-32 backdrop-blur-sm text-slate-200 font-semibold py-2 px-4 border-2 border-white shadow hover:bg-slate-200 hover:text-gray-600">
              The Trail
            </button>
          </Link>
          <Link href="/gallery">
            <button className="w-32 backdrop-blur-sm text-slate-200 font-semibold py-2 px-4 border-2 border-white shadow hover:bg-slate-200 hover:text-gray-600">
              The Gallery
            </button>
          </Link>
        </div>
      </div>
    </>
  );
  
}