"use client"

import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineMail } from "react-icons/ai";


type Props = {}

export default function Footer({}: Props) {
  


  return (
    <footer className="bg-black section-padding pb-10">
      <div className=" container flex items-center justify-center flex-col space-y-10">   

<p className="text-gray-200 text-lg">Copyright  2025 <Link href="https://www.fiverr.com/shahjalalk" target="_blank" className="text-primary">Shahjalal</Link>. All Rights Reserved.</p>

     </div>
      
    </footer>
  )
}