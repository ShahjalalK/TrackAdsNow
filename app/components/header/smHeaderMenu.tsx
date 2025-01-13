import Link from 'next/link'
import React from 'react'

type Props = {
    smMenu : boolean,
    showHeader : boolean
}

const SmHeaderMenu = ({ smMenu, showHeader}: Props) => {
  return (
    <ul className={` ${smMenu ? 'flex' : 'hidden' }   xl:hidden flex-col space-y-5 h-screen bg-slate-500 fixed right-0 w-[70%] z-40 px-3 py-7 border rounded-md ${showHeader ? 'translate-x-0' : 'translate-x-[1000px]' }  transition-all duration-300`}>
    <li className="flex">
        <Link href="/" className=" border p-2 rounded text-white hover:text-secoundary capitalize w-full">Home</Link>
    </li>
     <li className="flex">
         <Link href="#about" className=" border p-2 rounded text-white hover:text-secoundary capitalize w-full">About</Link>
    </li>
     
    
    <li className="flex">
        <Link href="#portfolio" className=" border p-2 rounded text-white hover:text-secoundary capitalize w-full">Portfolio & Reviews</Link>
    </li>

    <li className="flex">
        <Link href="#pricing" className=" border p-2 rounded text-white hover:text-secoundary capitalize w-full">Pricing</Link>
    </li>

    <li className="flex">
        <Link href="#contact" className=" border p-2 rounded text-white hover:text-secoundary capitalize w-full">Contact</Link>
    </li>

    {/* <li>
        <Link href="/studio" className="text-titleColor hover:text-secoundary capitalize">Studio</Link>
    </li> */}
    
</ul>
  )
}

export default SmHeaderMenu