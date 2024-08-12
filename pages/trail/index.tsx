import Heading from "../../components/Heading";
import TitleImage from "../../components/TitleImage";
import DayCard from "../../components/DayCard";
import JournalPage from "../../components/JournalPage";

export default function TrailRoute () {
  return (
    <>
      <Heading title={"The Trail"} />
      <main className="mx-auto max-w-[1960px]">
        <TitleImage
          page="trail" 
          title="The Trail"
          subTitle="A four-day trek through the Maroon Bells Wilderness' Four Pass Loop, covering nearly 29 miles of pristine alpine valleys, meadows, lakes and streams & cresting four of the Elk Range's 12,000ft+ mountain passes."
        />
        <div className="p-4">
          <div className="h-8"></div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4">
            <DayCard day={'Day 1'} route={'Trailhead - Maroon Zone'} miles={'5.6 mi'} elevation={'2,241 ft'} passes={0}/>
            <DayCard day={'Day 2'} route={'Maroon Zone - Geneva Lake'} miles={'10.2 mi'} elevation={'2,680 ft'} passes={2}/>
            <DayCard day={'Day 3'} route={'Geneva Lake - Snowmass Lake'} miles={'4.4 mi'} elevation={'1,522 ft'} passes={1}/>
            <DayCard day={'Day 4'} route={'Snowmass Lake - Trailhead'} miles={'8.3 mi'} elevation={'1,808 ft'} passes={1}/>
          </div>          
          <div className="h-16"></div>
          <div>
            {/* <h2>Trail Log</h2> */}
            <JournalPage />
          </div>
          <div className="h-8"></div>
          <div>
            <iframe className="alltrails" src="https://www.alltrails.com/widget/map/four-pass-loop-71a5c05-2?u=i&sh=kp35c4" scrolling='no' width="80%" height="600" title="Four Pass Loop Trail"></iframe>
          </div>
        </div>
        </main>
      </>
  );
}