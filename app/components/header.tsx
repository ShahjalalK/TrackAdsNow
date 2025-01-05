import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from "@/public/logo.png"

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="bg-white py-5 text-titleColor border-b">
        <div className=" container flex items-center justify-center xl:justify-between text-lg ">
            
        <h1 className=" font-medium text-2xl"><Link href="/">
        <Image src={Logo} alt='logo' placeholder='blur' className="  w-24" />
        </Link> </h1>
        <ul className="hidden xl:flex items-center space-x-5">
                <li>
                    <Link href="#" className="text-titleColor hover:text-secoundary capitalize">Home</Link>
                </li>
                
                <li>
                    <Link href="#portfolio" className="text-titleColor hover:text-secoundary capitalize">Portfolio & Reviews</Link>
                </li>
                <li>
                    <Link href="#contact" className="text-titleColor hover:text-secoundary capitalize">Contact</Link>
                </li>

                {/* <li>
                    <Link href="/studio" className="text-titleColor hover:text-secoundary capitalize">Studio</Link>
                </li> */}
                
            </ul>
        </div>
        
    </header>
  )
}