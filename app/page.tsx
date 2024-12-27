import ServiceDetails from "@/public/images/service_details.jpg"
import Image from "next/image";
import LeftSection from "./components/body/leftSection";
import RightSection from "./components/body/rightSection";
import Testmonials from "./components/ServicesComponents/testmonials";
import { Metadata } from "next";






export default function Home() {
  return (    
    <>
    <section className=" py-5 xl:py-10 ">
      <div className=" relative p-[25%] bg-transparent flex justify-center items-center rounded">
        <iframe src="https://player.vimeo.com/video/1042080547?autoplay=1&muted=1&loop=1&title=0&byline=0&badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="1" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen className=" absolute top-5 left-0 w-[100%] h-[90%] rounded p-0"></iframe>
        </div>

      

    </section>

    <section className=" section-padding">
     
      <div className=" container grid xl:grid-cols-3 gap-x-10">
          <LeftSection />
          <RightSection />
      </div>
    </section>

    <section className=" container section-padding">
      <Testmonials />
    </section>
    
    </>

    
  );
}
