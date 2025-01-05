"use client"

import React from 'react'
import myPhoto from "@/public/me.png"
import Image from 'next/image'
import Link from 'next/link'
import SectionTitle from '../sectionTitle'



type Props = {}



const About = (props: Props) => {
  return (
    <section className="section-padding ">
    <div className=" container xl:grid xl:grid-cols-4">
      <div className="xl:col-span-3 flex flex-col space-y-10 ">
      <div>
        <SectionTitle subTitle="Have Any Questions?" sectionTitle="CONTACT WITH US!" description="Have questions, ideas, or just want to say hello? We'd love to hear from you! 💬
Fill out the form below, and we'll get back to you in no time. Your message matters to us, and we’re here to help! 🚀" />
        </div>
    <div className=" border border-gray-400 shadow-md  flex justify-center items-center flex-col space-y-4 p-10 text-center">
     <Image src={myPhoto} alt='Shahjalal Khan' placeholder="blur" className="w-20 rounded-full" />
     <h1 className="text-3xl font-bold text-secoundary font-Barlow tracking-wider uppercase">Shahjalal Khan</h1>

     <p className="text-lg">I am a skilled professional specializing in clickable HTML email signature development and Google Ads campaign setup. With expertise in creating customized email signatures and effective advertising campaigns, I help businesses enhance their professional communication and online presence. Whether you need a personalized email signature or a high-performing Google Ads strategy, I am here to deliver tailored solutions for your success.</p>

    
     </div>
      </div>
    </div>
    </section>
  )
}

export default About