import type { NextPage } from 'next';
import Heading from "../../components/Heading";
import TitleImage from "../../components/TitleImage";
import SectionTitle from '../../components/SectionTitle';
import JournalPage from "../../components/JournalPage";

const TrailLog : NextPage = () => {
  return (
    <>
      <Heading title={"Trail Log - Four Days on the Four Pass Loop"} />
      <main className="mx-auto max-w-[1960px]">
        <TitleImage
          page="traillog" 
          title="Trail Log"
          subTitle="Ever written a novella on just 4 days of hiking? Welp, I did! Come join me on an alpine adventure of a lifetime around the Maroon Bells and get a glimpse into the whimsical chaos of my mind."
        />
        <div className="p-4">
          <SectionTitle
              title="Dinner & A Show??"
              subtitle="In a world where long stretches of text are not enough stimulation, I've given you something to look at as you plod along!"
          />
          <div className="h-8"></div>
          <div>
            <JournalPage />
          </div>
          <div className="h-8"></div>
        </div>
      </main>
    </>
  );
}

export default TrailLog;