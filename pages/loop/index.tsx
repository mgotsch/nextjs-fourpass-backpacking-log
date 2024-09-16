import type { NextPage } from 'next'
import { CldImage } from "next-cloudinary";
import Heading from "../../components/Heading";
import TitleImage from "../../components/TitleImage";
import DayCard from "../../components/DayCard";
import SectionTitle from '../../components/SectionTitle';
import AnimatedSection from '../../components/AnimatedSection';
import dayData from "../../data/dayData";

const FourPassLoop : NextPage = () => {
  
  return (
    <>
      <Heading title={"The Loop - Four Days on the Four Pass Loop"} />
      <main className="mx-auto max-w-[1960px]">
        <TitleImage
          page="loop" 
          title="The Loop"
          subTitle="A four-day trek through the Maroon Bells Wilderness' Four Pass Loop, covering nearly 29 miles of pristine alpine valleys, meadows, lakes and streams & cresting four of the Elk Range's 12,000ft+ mountain passes."
        />
        <div className="p-4">
          <div className="h-8"></div>
          <div className="flex flex-col w-4/5 m-auto">
            <SectionTitle
              title="Four Pass Loop Overview"
              subtitle="For those without an eon to read through the Trail Log, here's your TL;DR"
            />
            <div className="grid lg:grid-cols-2 gap-4 text-justify">
              <AnimatedSection
                className="order-1 lg:order-1 flex flex-col justify-center p-4 xl:text-lg"
                direction="left"
              >
                <p className="m-2">
                  The Four Pass Loop in the Maroon Bells-Snowmass Wilderness of Colorado is a stunning and challenging trek 
                  that offers hikers an unforgettable journey through some of the most picturesque landscapes in the Rocky 
                  Mountains. Spanning approximately 27 miles, this loop trail circles the famous Maroon Bells, a pair of iconic 
                  peaks, and takes adventurers over four high mountain passes: West Maroon, Frigid Air, Trail Rider, and Buckskin. 
                  And if that alone isn't enough for your group (such as yours truly's), you can tack on a few extra miles to 
                  add in a stop and night's stay at Geneva Lake, a secluded, enchanting, and sometimes buggy alpine lake. 
                </p>
              </AnimatedSection>
              <AnimatedSection 
                className="order-2 lg:order-2 content-center"
                direction="right"
              >
                <CldImage
                  src="https://res.cloudinary.com/dknv1ji7n/image/upload/v1703174616/Four%20Pass%20Loop/20230805-_DSF2245_ipwag5.jpg"
                  width={810}
                  height={540}
                  dpr="1.7"
                  alt="Overview Pic 1"
                  priority
                  className="w-auto max-h-[540px] mx-auto my-4"
                /> 
              </AnimatedSection>
              <AnimatedSection 
                className="order-4 lg:order-3 content-center"
                direction="left"
              >
                <CldImage
                  src="https://res.cloudinary.com/dknv1ji7n/image/upload/v1703174117/Four%20Pass%20Loop/20230804-_DSF1037_dbsg4t.jpg"
                  width={810}
                  height={540}
                  dpr="1.7"
                  alt="Overview Pic 1"
                  priority
                  className="w-auto max-h-[540px] mx-auto my-4"
                />
              </AnimatedSection>
              <AnimatedSection 
                className="order-3 lg:order-4 flex flex-col justify-center p-4 xl:text-lg"
                direction="right"
              >
                <p className="m-2">
                  The dramatic array scenery that can be taken in on this trail can only be described as awe-inspiring. From 
                  jagged peaks & lush, wildflower-filled meadows to crystal-clear alpine lakes and dense forests of aspen and pine, 
                  the diversity and majesty of the sights leaves one slack-jawed. Experiencing this trail really is paramount to 
                  walking through postcard vista after postcard vista for days on end (quite frankly, it's dizzying)! Adventurers 
                  can expect more than just running into real-life landscape artwork and other backpackers too as wildlife is 
                  abundant throughout the area. It’s not uncommon to spot marmots, pikas, and the occasional elk or deer along 
                  the trail, a reminder of how wild this place still is. 
                </p>
              </AnimatedSection>
              <AnimatedSection 
                className="order-5 lg:order-5 flex flex-col justify-center p-4 xl:text-lg"
                direction="left"
              >
                <p className="m-2">
                  But all this splendor doesn't come easy! Each of the four passes the trail is named for reach elevations over 
                  12,000 feet, so the climbs leave you as short of breath as the panoramic views at the top do. And unless you're 
                  completing it in a day (which with the number of insane trail runners Colorado is teeming with, this is more 
                  common than you might think), you're doing it all with all of your gear, water, and days' worth of food weighing 
                  down your oversized pack. Safe to say most days end in complete, if satisfied, exhaustion and an easier task 
                  identifying areas that aren't sore than listing off the countless that are. 
                </p>
              </AnimatedSection>
              <AnimatedSection 
                className="order-6 lg:order-6 content-center"
                direction="right"
              >
                <CldImage
                  src="https://res.cloudinary.com/dknv1ji7n/image/upload/v1703174466/Four%20Pass%20Loop/20230805-_DSF1833_jdgrv2.jpg"
                  width={810}
                  height={540}
                  dpr="1.7"
                  alt="Overview Pic 1"
                  priority
                  className="w-auto max-h-[540px] mx-auto my-4"
                />
              </AnimatedSection>
              <AnimatedSection 
                className="order-8 lg:order-7 content-center"
                direction="left"
              >
                <CldImage
                  src="https://res.cloudinary.com/dknv1ji7n/image/upload/v1703174764/Four%20Pass%20Loop/20230806-_DSF2657_kigyn1.jpg"
                  width={810}
                  height={540}
                  dpr="1.7"
                  alt="Overview Pic 1"
                  priority
                  className="w-auto max-h-[540px] mx-auto my-4"
                />
              </AnimatedSection>
              <AnimatedSection 
                className="order-7 lg:order-8 flex flex-col justify-center p-4 xl:text-lg"
                direction="right"
              >
                <p className="m-2">
                  In spite of these harsh realities, the general masses have not been dissuaded and competition for the limited 
                  overnight permits is fierce. So much so in fact that most are gone within minutes of their release and for the 
                  highly-coveted weekend spots we sought, that window is reduced down to a matter of seconds. After briefly 
                  considering writing a bot to book them for us, I figured a rugged, off-grid trail deserved a rugged off-grid 
                  solution. So a few of us got together to train through the sequence of clicks required to cut down on any 
                  sluggishness and unexpected surprises day of. And boy did it pay off, coming away with 3 permits with a total 
                  of 11 people able to come along. Now all that was left was to choose our fighters, get prepared, and prepare 
                  to embark on a journey of a lifetime! For a long-winded diatribe on what exactly this trail could have in 
                  store for you, check out the trail log!
                </p>
              </AnimatedSection>
            </div>
          </div>
          <div className="h-8"></div>
          <div>
            <SectionTitle
              title="Trail Map"
              subtitle="Where my cartography heads at??"
            />
            <div className="h-8"></div>
            <AnimatedSection direction="down">
              <iframe className="alltrails" src="https://www.alltrails.com/widget/map/four-pass-loop-71a5c05-2?scrollZoom=false&u=i&sh=kp35c4" width="80%" height="600" title="Four Pass Loop Trail"></iframe>
            </AnimatedSection>
          </div>
          <div className="h-8"></div>
          <div>
            <SectionTitle
              title="Daily Breakdown"
              subtitle="For you advanced metrics folks!!"
            />
            <div className="h-8"></div>
            <AnimatedSection className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4" direction="down">
              <DayCard {...dayData[1]}/>
              <DayCard {...dayData[2]}/>
              <DayCard {...dayData[3]}/>
              <DayCard {...dayData[4]}/>
            </AnimatedSection>
          </div>
          <div className="h-8"></div>
        </div>
        </main>
      </>
  );
}

export default FourPassLoop;