import Link from 'next/link'
import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="bg-primary py-5 text-white border-b">
        <div className=" container flex items-center justify-center xl:justify-between text-lg ">
            

            <div className="flex items-center gap-3 font-Barlow">
            <p className=" font-medium text-xl">Follow Us On :</p>
            <ul className="flex items-center gap-3">
                <li>
                    <Link href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=shahjalal-khan" target='_blank' ><FaLinkedinIn className="text-2xl hover:text-blue-950" /></Link>
                </li>
                <li>
                    <Link href="https://github.com/ShahjalalK" target='_blank'><FaGithub className="text-2xl hover:text-blue-950" /></Link>
                </li>
            </ul>
        </div>
        </div>
        
    </header>
  )
}