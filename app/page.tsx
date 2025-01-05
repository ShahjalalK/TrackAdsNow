import Image from "next/image";
import Link from "next/link";

import CookieConsentComponent from "./components/CookieConsentComponent";
import Portfolio from "./components/ServicesComponents/portfolio";
import ContactForm from "./components/contact/contactForm";

import { Rivews } from "@/types/rivew";
import { getRivews } from "@/sanity/sanity.untils";
import ServiceDetails from "./components/ServicesComponents/serviceDetails";
import About from "./components/contact/about";



type Props = {
  // buyerRivew : Rivews[]
}


export default async function Home({} : Props) {
  
  const buyerRivew : Rivews[]  = await getRivews()

 
  return (    
    <>
    
    <section className=" py-5  flex flex-col space-y-10 pb-24 bg-bgColor" id="#">
      <div className=" relative p-[25%]  flex justify-center items-center rounded overflow-x-hidden">
        <iframe src="https://player.vimeo.com/video/1042747538?autoplay=1&muted=1&loop=1&title=0&byline=0&badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="1" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen className=" absolute top-5 left-0 w-[100%] h-[90%] rounded p-0 scale-125 lg:scale-110 xl:scale-100"></iframe>
        </div>

        

      <ServiceDetails />

    </section>

    <Portfolio buyerRivew={buyerRivew} />
   
   {/* <About /> */}

    <ContactForm />

    
    <CookieConsentComponent />
    
    
    </>

    
  );
}


export const revalidate = 10; 


