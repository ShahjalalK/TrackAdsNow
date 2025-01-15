"use client"

import React, { useState } from 'react'
import { FiClock } from "react-icons/fi";
import { BiRevision } from "react-icons/bi";
import { LuMoveRight } from "react-icons/lu";
import { FaCheck } from "react-icons/fa";
import Link from 'next/link';

interface Package {

  PackageName : string,
  packageTitle : string,
  price : number,
  packageDescription : string,
  delivarytime : number,
  revision : string,
  imageHosting : string,
  designConcepts	: number

}

type Props = {
  Packages : Package[],  
}

const SmPricing = ({Packages}: Props) => {
  const [allPackage, setAllPackage] = useState(Packages)
  const [showPackage, setShowPackage] = useState(0)
  const packageHandler = (i : any) => {

    if(showPackage !== i){
     return setShowPackage(i)
    }

    
    
  }
  return (
    <div className="block xl:hidden">
     

      <div className="grid grid-cols-3 border rounded-t" >

      {allPackage.map((item, i) => (
      <div onClick={() => packageHandler(i)} className={`p-3 ${showPackage === i && ' bg-secoundary/90 text-white'} flex  items-center justify-center border-r cursor-pointer  font-medium`} key={i}>{item.PackageName}</div>
    ))}
      
      </div>

     

      {allPackage.map((item, i) => (

<div className={`border border-t-0 px-3 py-5 rounded-b ${showPackage === i ? 'flex' : 'hidden'} flex-col space-y-5`} key={i}>
<div className="flex justify-between items-start"><span className="font-medium">{item.packageTitle}</span> <span className="font-medium">${item.price}</span></div>
<div className="flex flex-col space-y-3">
  <p>{item.packageDescription}</p>
  <div className="flex items-center text-sm space-x-4">
    <span className="flex items-center space-x-1"><FiClock /> <span>{item.delivarytime}-day delivery</span></span>
  <span className="flex items-center space-x-1"> <BiRevision /> <span>{item.revision} Revision</span></span>
  </div>

  <div className="flex items-center space-x-1 text-sm">
 <span>1</span>
  <span>Design Concepts</span>
</div>

<div className="flex items-center space-x-1 text-sm">
 <FaCheck />
  <span>Source File</span>
</div>

<div className="flex items-center space-x-1 text-sm">
 <FaCheck />
  <span>Image Hosting</span>
</div>

</div>

<Link href="https://cutt.ly/qe1slUTX" target="_blank" className="flex items-center justify-between py-3 px-5 rounded bg-gray-700 w-full text-white">
<span className="flex justify-center w-full font-medium">Select</span>

<LuMoveRight />

</Link>

</div>

      ))}
    
   
   </div>
  )
}

export default SmPricing