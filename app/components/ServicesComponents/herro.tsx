import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import EmailSignatureMockup from "@/public/gmail mockup.webp"
import FiverrLinkButton from '../contact/fiverrLinkButton'

type Props = {}

const Herro = (props: Props) => {
  return (
    <section className="section-padding relative" id='home'>
        <div className="container grid grid-cols-1 xl:grid-cols-2 gap-y-10 xl:gap-y-0 xl:gap-x-10">
            <div className="flex flex-col space-y-3 ">
                <h1 className="text-2xl xl:text-3xl font-bold text-titleColor">Stand Out with Professional Clickable Email Signatures</h1>
                <p className="text-base font-bold">Boost your brand identity with custom-designed, mobile-friendly email signatures tailored to perfection.</p>
                <p className="text-base font-bold">Transform your emails into a branding powerhouse with elegant, clickable email signatures. Whether you're an entrepreneur, a corporate professional, or a business team, my designs will help you leave a lasting impression.</p>
                

              <div className="pt-10 flex items-center space-x-4">              

              <Link href="#portfolio" className="bg-titleColor hover:bg-dipTigleColor  px-4 lg:px-6 py-4 rounded text-sm text-center lg:text-base uppercase text-white shadow">View Portfolio</Link>

              <FiverrLinkButton buttonTitle='Order Now on Fiverr' />

              </div>

            </div>
            <div className=" order-first xl:order-none ">
                <Image src={EmailSignatureMockup} alt="skupark" className="w-full" />

            </div>

            

            <div>
                
            </div>
        </div>
    </section>
  )
}

export default Herro