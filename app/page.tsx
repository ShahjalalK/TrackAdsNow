import Image from "next/image";
import Link from "next/link";

import CookieConsentComponent from "./components/CookieConsentComponent";
import Portfolio from "./components/ServicesComponents/portfolio";
import ContactForm from "./components/contact/contactForm";

import { Rivews } from "@/types/rivew";
import { getRivews } from "@/sanity/sanity.untils";
import ServiceDetails from "./components/ServicesComponents/serviceDetails";
import About from "./components/contact/about";
import Herro from "./components/ServicesComponents/herro";
import Video from "./components/ServicesComponents/video";
import Services from "./components/ServicesComponents/Services";
import Pricing from "./components/pricingComponents/pricing";
import Faq from "./components/ServicesComponents/faq";



type Props = {
  // buyerRivew : Rivews[]
}


export default async function Home({} : Props) {
  
  const buyerRivew : Rivews[]  = await getRivews()

 
  return (    
    <>

    <Herro />
    
    <Video />

    <About />

    <Services />

    {/* <ServiceDetails /> */}

    <Portfolio buyerRivew={buyerRivew} />
   
    <Pricing />
    <Faq />

    <ContactForm />

    
    <CookieConsentComponent />
    
    
    </>

    
  );
}


export const revalidate = 10; 


