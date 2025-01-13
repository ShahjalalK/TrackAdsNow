"use client"

import Link from 'next/link';
import React from 'react'
import { FaLinkedinIn, FaFacebookF  } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import FooterForm from './footerComponents/footerForm';








type Props = {}

export default function Footer({}: Props) {
  


  return (
    <footer className="bg-darkBgColor pt-32 pb-10  text-gray-200 footerObj">
      <div className="container grid grid-cols-1 xl:grid-cols-4 gap-y-10 xl:gap-y-0 gap-x-0 xl:gap-x-5">
        <div className="flex flex-col space-y-2">
          <h3 className="text-xl font-bold uppercase text-white pb-5">ABOUT COMPANY
          </h3>
          <p className="text-base ">ClickSign Studio crafts clickable HTML email signatures and sets up impactful Google Ads campaigns, ensuring enhanced online presence and measurable growth for businesses in today’s competitive digital world.</p>

          <div className="flex items-center space-x-2 pt-5">
            <Link href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=shahjalal-khan" target='_blank' className="border border-gray-300 text-lg text-gray-300  relative w-8 h-8 rounded-full  flex items-center justify-center"><FaLinkedinIn /></Link>
            <Link href="https://www.facebook.com/shahajalalkhan.shahajalalkhan/" target='_blank' className="border border-gray-300 text-lg text-gray-300  relative w-8 h-8 rounded-full  flex items-center justify-center"><FaFacebookF  /></Link>
            <Link href="https://www.youtube.com/@coding-forward4319" target='_blank' className="border border-gray-300 text-lg text-gray-300  relative w-8 h-8 rounded-full  flex items-center justify-center"><FaYoutube /></Link>
          </div>
        </div>
        <ul className="flex flex-col space-y-1 text-base ">
          <p className="text-lg text-white font-bold uppercase pb-5">Contact us</p>
          <li><Link href="mailto:shahjalalk.web@gmail.com">📧shahjalalk.web@gmail.com</Link></li>
          <li><Link href="https://wa.me/8801303233683" target="_blank">💬8801303-233683</Link></li>
         
        </ul>

        <FooterForm />
        

      </div>
      
      <div className=" py-10  ">
        <div className="h-2 border-b-2 border-gray-500"></div>
    
      </div>
      <div className=" container flex items-center justify-center flex-col space-y-10">   

<p className="text-gray-200 text-base text-center">© 2025 <Link href="https://cutt.ly/jeBpQOaU" target="_blank" className="text-secoundary font-bold">ClickSign Studio</Link> All Rights Reserved.</p>

     </div>
      
    </footer>
  )
}