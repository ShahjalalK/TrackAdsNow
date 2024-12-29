import ServiceDetails from "@/public/images/service_details.jpg"
import Image from "next/image";
import LeftSection from "./components/body/leftSection";
import RightSection from "./components/body/rightSection";
import Testmonials from "./components/ServicesComponents/testmonials";
import { Metadata } from "next";
import Link from "next/link";

import FiverrGig from "@/public/images/gig1.jpg"




export default function Home() {
  return (    
    <>
    <section className=" py-5 bg-[#ddd] flex flex-col space-y-10 pb-24">
      <div className=" relative p-[25%] bg-transparent flex justify-center items-center rounded overflow-x-hidden">
        <iframe src="https://player.vimeo.com/video/1042747538?autoplay=1&muted=1&loop=1&title=0&byline=0&badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="1" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen className=" absolute top-5 left-0 w-[100%] h-[90%] rounded p-0 scale-125 lg:scale-110 xl:scale-100"></iframe>
        </div>

        

      <div className=" container flex flex-col space-y-7">
        <h1 className=" text-xl lg:text-4xl font-bold">Let Me Create a Stunning Clickable HTML Email Signature for You!</h1>
        <div className="flex flex-col space-y-7 text-xl">
          <h3>Hi there,</h3>
          <p>I’m a professional clickable email signature developer, ready to design an attractive and fully functional HTML email signature for you. A well-designed email signature not only enhances your professional image but also helps your emails stand out.</p>
          <p>I’ve had the pleasure of creating personalized email signatures for clients like <Link href="https://www.legacylaunchpadpub.com/" target="_blank" className="text-red-500" >Anna David</Link> and her team, among others. Each signature I design is tailored to reflect your unique brand and personality while ensuring compatibility with all major email clients.</p>

          <ul className="flex flex-col space-y-3">
            <p className="text-2xl font-bold">Why choose my services?</p>
            <li>✅ Custom-designed HTML email signature</li>
            <li>✅ Clickable links for email, social media, and website</li>
            <li>✅ Fully responsive and tested across devices</li>
            <li>✅ On-time delivery and excellent customer support</li>
            <li>✅ Custom-designed HTML email signature</li>
          </ul>

         <div className="flex flex-col space-y-5">
         <p>Check out my Fiverr gig <Link href="https://cutt.ly/qe1slUTX" target="_blank" className="text-red-500 underline">https://www.fiverr.com/s/xXqyBXB</Link> to see samples of my work and reviews from satisfied clients.</p>


         <Link href="https://cutt.ly/qe1slUTX" target="_blank" className=" bg-white flex   items-center space-x-2 p-4 rounded-xl max-w-[600px] border shadow ">
         <Image src={FiverrGig} alt="Fiverr Gig"  placeholder="blur" className=" w-[150px] col-span-1 rounded"/>
            <div className=" col-span-3">
              <h5 className=" font-bold text-sm xl:text-lg">Shahjalalk: I will create html email signature and email footer for...</h5>
              <p className=" text-sm font-Barlow">fiverr.com</p>
            </div>
         </Link>

         </div>

          <p>
          Let’s create something amazing together! I look forward to working with you.</p>
          <p>Best regards, <br />
          Shahjalal
          </p>
          

        </div>

      </div>

    </section>

    {/* <section className=" section-padding">
     
      <div className=" container grid xl:grid-cols-3 gap-x-10">
          <LeftSection />
          <RightSection />
      </div>
    </section>

    <section className=" container section-padding">
      <Testmonials />
    </section> */}
    
    </>

    
  );
}
