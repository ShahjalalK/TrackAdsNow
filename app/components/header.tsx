import Link from 'next/link'
import React from 'react'
import { FaMapLocation } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="bg-primary py-5 text-white">
        <div className=" container flex items-center justify-center xl:justify-between text-lg ">
            <ul className="font-normal font-Barlow hidden xl:flex items-center gap-5">
                <li className="flex gap-1 items-center"> <FaMapLocation className=" text-2xl" /> 35, 5 Shantinagar Rd, Dhaka 1217</li>
                <li className="flex gap-1 items-center"> <FaPhoneAlt className=" text-xl" /> <Link href="https://wa.me/+8801303233683" target="_blank" className="hover:text-blue-950">+88-01303-233683</Link></li>
                <li className="flex gap-1 items-center"> <TfiEmail className=" text-xl" /> <Link href="mailto:shahjalalk.web@gmail.com" className="hover:text-blue-950">shahjalalk.web@gmail.com</Link></li>
            </ul>

            <div className="flex items-center gap-3">
            <p className=" font-medium">Follow Us On :</p>
            <ul className="flex items-center gap-3">
                <li>
                    <Link href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=shahjalal-khan" target='_blank' ><FaLinkedinIn className="text-2xl hover:text-blue-950" /></Link>
                </li>
                <li>
                    <Link href="https://www.fiverr.com/shahjalalk" target='_blank'><TbBrandFiverr className="text-2xl hover:text-blue-950" /></Link>
                </li>
            </ul>
        </div>
        </div>
        
    </header>
  )
}