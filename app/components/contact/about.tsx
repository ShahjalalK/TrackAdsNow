"use client"

import React from 'react'
import myPhoto from "@/public/me.png"
import Image from 'next/image'
import Link from 'next/link'
import SectionTitle from '../sectionTitle'
import FiverrLinkButton from './fiverrLinkButton'



type Props = {}



const About = (props: Props) => {
  return (
    <section className="section-padding ">
    <div className=" container grid xl:grid-cols-3 gap-y-10 xl:gap-y-0 xl:gap-x-20 ">
      <div className="xl:col-span-1 flex flex-col space-y-5 text-center">
      <Image src={myPhoto} alt='Shahjalal Khan' placeholder="blur" className="w-full rounded" />
      <p className="font-bold text-xl">Let’s create a signature that speaks for your brand.</p>
        <div className="flex items-center justify-center">
        <FiverrLinkButton buttonTitle="Order Now on Fiverr" />
        </div>
      </div>
      <div className=" flex flex-col space-y-3 xl:col-span-2 order-first xl:order-none ">
       
        <div className="flex flex-col space-y-3">
        <SectionTitle subTitle="Meet Your Professional Email Signature Expert" sectionTitle="About Me" description="" />
        </div>
        <div className="flex flex-col space-y-5">
        <p className="text-lg">Hi, I’m <b>Shahjalal</b>, a passionate and experienced clickable email signature developer dedicated to helping businesses and professionals leave a lasting impression through their emails. </p>

<p> With years of expertise in creating <b>custom HTML email signatures</b>, I’ve worked with clients from around the globe, including entrepreneurs, corporate teams, and creative professionals. My designs are not only visually stunning but also fully responsive, ensuring they look perfect on any device or email platform. </p>

<p> Whether it’s adding clickable social media links, logos, or custom branding, I ensure every detail is tailored to match your unique style and needs. Your email signature isn’t just a design—it’s a representation of your brand's professionalism and personality.</p>


        </div>
        
      </div>
    </div>
    </section>
  )
}

export default About