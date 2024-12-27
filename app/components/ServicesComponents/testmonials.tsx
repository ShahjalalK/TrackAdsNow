"use client"

import React, { Component } from 'react';
import { SiOdysee } from "react-icons/si";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'


import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import Image from 'next/image';

import GigImage from "@/public/images/gig1.jpg"

import { FaStar } from "react-icons/fa6";
import Link from 'next/link';
import Imag1 from "@/public/images/1.png"
import Imag2 from "@/public/images/2.png"
import Imag3 from "@/public/images/3.jpg"
import Imag4 from "@/public/images/4.jpg"
import Imag5 from "@/public/images/5.jpg"

const BuyerData = [
    {
        name : "Anna Devid",
        rivew : "I hired Shahjalal to design a clickable HTML email signature, and he exceeded all my expectations. The design was professional, mobile-friendly, and perfectly aligned with my brand. Highly recommended!",
        image : Imag1
        
    },
    {
        name : "Jessica Berry",
        rivew : "Shahjalal delivered an amazing email signature that was both stylish and functional. He understood my requirements perfectly and delivered the project on time. I’m extremely satisfied with the outcome!",
        image : Imag2
    },
    {
        name : "anna lobell",
        rivew : "Working with Shahjalal was a pleasure. His attention to detail and creativity resulted in a beautiful, clickable email signature. It works seamlessly across all devices and email clients. I will definitely return for more services!",
        image : Imag3
    },
    {
        name : "Barbara L. Legere",
        rivew : "The email signature Shahjalal created for me was exactly what I needed to enhance my professional image. It's visually appealing, interactive, and easy to implement. Great experience overall!",
        image : Imag4
    },
    {
        name : "HEATH B JONES",
        rivew : "Shahjalal was quick to respond to my queries and delivered a stunning HTML email signature. The clickable elements work flawlessly, and the design adds a polished touch to my emails. Highly recommended for anyone looking for quality work!",
        image : Imag5
    }
]


type Props = {}

const Testmonials = (props: Props) => {
  return (
    <div className="flex flex-col space-y-3 md:space-y-5 mb-20">
        <div className="flex flex-col space-y-3 justify-center text-center mx-auto">
        <h5 className="text-xl  text-primary font-normal uppercase tracking-tighter ">Testimonials</h5>
        <h1 className="text-4xl capitalize font-bold">What our <span className="text-primary">clients</span> says</h1>
        <p className="text-lg text-gray-700">Unveiling the extraordinary power. delving into the exceptionally powerfull features of data analysis</p>
    </div>
    <div className="flex flex-col">
    <Swiper
      modules={[Autoplay]}
     
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      loop ={true}
      autoplay={true}      
      spaceBetween={100}
      
      className="  container w-full  h-auto "
    >
        {BuyerData.map((item, i) => (
            <SwiperSlide key={i} className=" -ml-4 xl:-ml-0" >
            <div className=" shadowTestmonials rounded-3xl grid xl:grid-cols-3 space-y-4 xl:space-y-0 xl:space-x-7 w-full xl:w-auto p-5 md:p-7 items-center border m-20 cursor-grab">
            <div className=" w-full h-72 rounded-xl overflow-hidden xl:col-span-1">
            <Image src={item.image} alt="gig" className=" w-full h-full" placeholder="blur" />
            </div>
             <div className="flex flex-col space-y-3 xl:col-span-2">
             <div className="flex items-center space-x-1 text-[#F9B317] text-lg">
             <FaStar />
             <FaStar />
             <FaStar />
             <FaStar />
             <FaStar />
             </div>
             <h1 className="text-sm md:text-xl">{item.rivew}</h1>
             <div className="flex flex-col space-y-1 pt-2">
             <h1 className="text-2xl font-bold text-titleColor font-Barlow capitalize">{item.name}</h1>
             <Link href="ttps://www.fiverr.com/shahjalalk" target="_blank" className=" text-sm text-[#7CA0FF]">Service: Clickable Html Email Signature</Link>
             </div>
             </div>
             
            </div>
             </SwiperSlide>
             
        ))}


      

        
      
     
    </Swiper>

    <div className="flex items-center justify-center" >
    <Link href="https://www.fiverr.com/s/yvpvvDG" target="_blank" className="bg-primary py-4 rounded text-white text-lg hover:bg-blue-800 tracking-normal hover:tracking-wider transition-all duration-300 flex items-center justify-center gap-x-1 px-5 lg:px-20"> <SiOdysee /> See more reviews</Link>
    </div>

    </div>
    </div>
  )
}

export default Testmonials