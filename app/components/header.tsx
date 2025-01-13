"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Logo from "@/public/logo2.png"
import { IoMenu } from "react-icons/io5";
import SmHeaderMenu from './header/smHeaderMenu'


type Props = {}

export default function Header({}: Props) {
    const [showHeader, setShowHeader] = useState(true)
    const [smMenu, setSmMenu] = useState(false)

   

    useEffect(() => {

        const handleScroll = () => {
            if(window.scrollY > 100){
                setShowHeader(false)
            }else{
                setShowHeader(true)
                setSmMenu(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return() => {

            window.addEventListener("scroll", handleScroll)
           
        }

    }, [])

    const menuHandler = () => {
       setShowHeader(true)
       setSmMenu(true)
    }

   

  return (
   <>
   
    <header className={`text-titleColor border-t border-b  rounded-t-md bg-white sticky top-0 z-50 ${showHeader ? '-translate-y-0' : '-translate-y-[300px]'} transition-all duration-300` }>
        <div className=" container py-4 flex items-center justify-center xl:justify-between text-base font-bold">
            
       <Link href="/" className="flex flex-col -space-y-2 text-3xl items-end">
        <Image src={Logo} alt='logo' className="w-36" />
       
       </Link>
        <ul className="hidden xl:flex items-center space-x-5">
                <li>
                    <Link href="/" className="text-titleColor hover:text-secoundary capitalize">Home</Link>
                </li>
                
                <li>
                    <Link href="#portfolio" className="text-titleColor hover:text-secoundary capitalize">Portfolio & Reviews</Link>
                </li>
                <li>
                    <Link href="#pricing" className="text-titleColor hover:text-secoundary capitalize">Pricing</Link>
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

    <SmHeaderMenu smMenu={smMenu} showHeader={showHeader} />

    <div className={`fixed bg-bgColor top-28 right-12 w-12 h-12 hidden xl:flex justify-center items-center rounded-full border-2 border-secoundary/40 hover:border-secoundary hover:text-secoundary p-1 text-secoundary/50 shadow cursor-pointer z-50 transition-all duration-300 ${showHeader ? 'translate-x-[300px]' : 'translate-x-0'} `} onClick={() => menuHandler()}>
       <IoMenu className="text-5xl" />

    </div>


    <div className={`fixed bg-bgColor top-28 right-0 w-12 h-12 flex xl:hidden justify-center items-center rounded-full border-2 border-secoundary/40 hover:border-secoundary hover:text-secoundary p-1 text-secoundary/50 shadow cursor-pointer z-50 transition-all duration-300 ${showHeader ? 'translate-x-[300px]' : 'translate-x-0'} `} onClick={() => menuHandler()}>
       <IoMenu className="text-5xl" />

    </div>
   </>
  )
}