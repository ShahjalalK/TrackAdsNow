import React from 'react'
import PageNoteFound from "@/public/images/error.svg"
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineHome } from "react-icons/hi";


type Props = {}

const PageNotFound = (props: Props) => {
  return (
    <div className=" flex flex-col space-y-20 container text-center content-center justify-center items-center section-padding">
      <Image src={PageNoteFound} alt="Page Not Found" className="w-[70%]"  />
      <div className="flex flex-col space-y-5">
        <h1 className="text-titleColor text-4xl font-bold">Page Not Found</h1>
        <p className="text-base">Were sorry The page you are looking for on longer exists.</p>
       <div className="flex items-center justify-center py-5">
       <Link href="/" className="bg-primary hover:bg-blue-950 transition-colors duration-300 px-10 py-5  text-white flex items-center gap-x-1 rounded-md uppercase text-sm"> <HiOutlineHome className="text-lg"  /> Return To Home</Link>
       </div>
      </div>
     
    </div>
  )
}

export default PageNotFound