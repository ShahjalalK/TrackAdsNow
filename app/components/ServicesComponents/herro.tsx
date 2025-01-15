import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import EmailSignatureMockup from "@/public/outlokgif.gif"
import EmailSignatureMockupe from "@/public/gmailGif.gif"
import GmailMockup1 from "@/public/gmail1.png"
import GmailMockup2 from "@/public/gmail2.png"
import GmailMockup3 from "@/public/gmail3.png"
import GmailMockup4 from "@/public/gmail4.png"
import FiverrLinkButton from '../contact/fiverrLinkButton'


type Props = {}

const Herro = (props: Props) => {
  return (
    <section className="relative pb-10 xl:pb-20 flex flex-col space-y-20" id='home'>

       

        <div className="container grid grid-cols-1 xl:grid-cols-5 gap-y-10 xl:gap-y-0 xl:gap-x-10">
            
        <div className=" flex flex-col space-y-10 xl:col-span-4 ">
                <Image src={EmailSignatureMockup} alt="skupark" className="w-full" loading="lazy" />


                <div className="flex flex-col space-y-3 ">
                <h1 className="text-2xl xl:text-3xl font-bold text-titleColor">Stand Out with Professional Clickable Email Signatures</h1>
                <p className="text-base font-bold">Boost your brand identity with custom-designed, mobile-friendly email signatures tailored to perfection.</p>
                <p className="text-base font-bold">Transform your emails into a branding powerhouse with elegant, clickable email signatures. Whether you're an entrepreneur, a corporate professional, or a business team, my designs will help you leave a lasting impression.</p>
                

              <div className="pt-10 flex items-center space-x-4">              

              {/* <Link href="#portfolio" className="bg-titleColor hover:bg-dipTigleColor  px-4 lg:px-6 py-4 rounded text-sm text-center lg:text-base uppercase text-white shadow">View Portfolio</Link> */}

              <FiverrLinkButton buttonTitle='Order Now on Fiverr' />

              </div>

            </div>
                          
            </div>

            
            
            
        </div>

        <div className="container flex flex-col space-y-10 xl:space-y-20">
        <Image src={EmailSignatureMockupe} alt="Gmail Signature" className="w-full"/>
        <Image src={GmailMockup1} alt="Gmail Signature" className="w-full"/>
        <Image src={GmailMockup2} alt="Gmail Signature" className="w-full"/>
        <Image src={GmailMockup3} alt="Gmail Signature" className="w-full"/>
        <Image src={GmailMockup4} alt="Gmail Signature" className="w-full"/>
        </div>

       
    </section>
  )
}

export default Herro