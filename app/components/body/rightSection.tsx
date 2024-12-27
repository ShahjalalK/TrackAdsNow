import React from 'react'
import { MdShoppingCartCheckout } from "react-icons/md";
import WdgetBackground from "@/public/images/widget_banner-1.jpg"
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";
import Fiverr from "@/public/images/fiverr.png"
import Link from 'next/link';



const RightSection = () => {
  return (
    <div className=" xl:col-span-1 flex flex-col space-y-10">
        <div className="bg-[#F5F5F5] p-7 flex flex-col  items-center space-y-7 rounded-md mt-10">
            <Image src={Fiverr} alt='Fiverr' placeholder="blur" className=" w-40" />
            <Link href="https://www.fiverr.com/s/yvpvvDG" target="_blank" className="bg-primary py-4 rounded text-white text-lg w-full hover:bg-blue-800 transition-all duration-700 flex items-center justify-center gap-x-1"> <MdShoppingCartCheckout /> Order Now</Link>

            
        </div>

        <div className="relative rounded-md overflow-hidden h-[60vh] flex flex-col justify-center items-center">
        <div className="z-100 text-white flex flex-col space-y-5 items-center">
                <h5 className=" text-sm">
                CONTACT US NOW
                </h5>
                <h1 className="text-4xl font-bold">You Need Help?</h1>
                <Link href="mailto:shahjalalk.web@gmail.com" className="bg-primary py-5 px-8 rounded-sm text-sm font-medium flex items-center gap-x-2 hover:bg-white hover:text-blue-950 transition-all duration-700">GET A QUOTE <FaArrowRight /></Link>
            </div>
            <Image src={WdgetBackground} alt='contact background' placeholder='blur' className="absolute top-0 left-0 w-full h-full -z-10" />
           

        </div>

    </div>
  )
}

export default RightSection