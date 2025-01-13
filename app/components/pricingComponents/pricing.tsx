import React from 'react'
import SectionTitle from '../sectionTitle'
import Link from 'next/link'
import { FaCheck } from "react-icons/fa";
import Image from 'next/image';
import TitleMiror from "@/public/title.svg"
import FiverrLinkButton from '../contact/fiverrLinkButton';
import SmPricing from './smPricing';



const Packages = [
  {
    PackageName : "Basic",
    packageTitle : "Signature Essentials",
    price : 10,
    packageDescription : "Simple clickable email signature + Free image hosting (limited) + HTML file delivery",
    delivarytime : 2,
    revision : "1",
    imageHosting : "1 month",
    designConcepts	: 1

   },
   {
    PackageName : "Standard",
    packageTitle : "Signature Pro",
    price : 20,
    packageDescription : "Professional email signature design + Custom branding elements (logo, colors) + Multiple clickable",
    delivarytime : 2,
    revision : "Unlimited",
    imageHosting : "1 month",
    designConcepts	: 1

   },

   {
    PackageName : "Premium",
    packageTitle : "Full Package★",
    price : 40,
    packageDescription : "Advanced, custom email signature + Lifetime image hosting + Priority delivery and revisions",
    delivarytime : 1,
    revision : "Unlimited",
    imageHosting : "Lifetime",
    designConcepts	: 1

   }
]



type Props = {}

const Pricing = (props: Props) => {
 
  return (
    <section className="section-padding bg-bgColor" id='pricing'>
       <div className="container flex flex-col space-y-20">

    
        <div className="flex flex-col space-y-2 justify-center items-center">
        <div className="flex flex-col space-y-3 xl:justify-center xl:items-center  ">
            <SectionTitle subTitle="Affordable Plans for Professional Email Signatures" sectionTitle="Pricing & Packages" description="Perfect for individuals or small businesses looking for a simple yet professional email signature. This package includes one custom HTML email signature designed to represent your brand with clickable social media icons and compatibility across major email platforms like Gmail, Outlook, and Apple Mail. Delivered within 2 days, it’s an affordable way to make a lasting impression." />
            </div>
        
      </div>

     

<table className="w-[90%] mx-auto hidden xl:block ">
<tbody>
<tr className="border">
<td className="w-48 px-5  text-gray-800">Package</td>
  {Packages.map((item, i) => (

 <td className="p-5 border" key={i}>
<div className="flex flex-col space-y-3">
<div className="flex flex-col space-y-1">
<h3 className="text-xl font-bold text-gray-700">${item.price}</h3>
<h1 className="text-xl font-bold text-gray-800">{item.PackageName}</h1>
</div>
<div className="flex flex-col space-y-1">
<h5 className=" text-sm font-bold uppercase text-gray-800">{item.packageTitle}</h5>
<p className="text-gray-700 font-medium">{item.packageDescription}</p>
</div>
</div>
</td>


  ))}

</tr>


<tr className="border bg-gray-50">
  <td className="px-5 py-2  text-gray-800">Source File</td>
  {Packages.map((item, i) => (
     <td className="border" key={i}>
     <div className="flex justify-center items-center text-gray-600"><FaCheck /></div>
     </td>
  ))}
 
  
</tr>


<tr className="border ">
  <td className="px-5 py-2  text-gray-800">Design Concepts</td>
  <td className="border">
  <div className="flex justify-center items-center text-gray-600">1</div>
  </td>
  <td className="border">
  <div className="flex justify-center items-center text-gray-600">1</div>
  </td>
  <td className="border">
  <div className="flex justify-center items-center text-gray-600">1</div>
  </td>
</tr>



<tr className="border bg-gray-50">
  <td className="px-5 py-2  text-gray-800">Revisions</td>
  {Packages.map((item, i) => (
    <td className="border" key={i}>
    <div className="flex justify-center items-center text-gray-600">{item.revision}</div>
    </td>
  ))}
  
 
</tr>


<tr className="border ">
  <td className="px-5 py-2  text-gray-800">Delivery Time</td>
  {Packages.map((item, i) => (
     <td className="border" key={i}>
     <div className="flex justify-center items-center text-gray-600">2 day</div>
     </td>
  ))}
 
 
</tr>

<tr className="border bg-gray-50 ">
  <td className="px-5 py-2  text-gray-800">Image Hosting</td>
  {Packages.map((item, i) => (
     <td className="border" key={i}>
     <div className="flex justify-center items-center text-gray-600">{item.delivarytime}</div>
     </td>
  ))}
  
  
</tr>

<tr className="border ">
  <td className="px-5 py-2 font-bold text-gray-800">Total</td>
  {Packages.map((item, i) => (
     <td className="border" key={i}>
     <div className="flex flex-col space-y-5 text-gray-600 justify-center items-center p-5">
     <span className="font-bold">${item.price}</span>
     <div>
     <Link href="https://cutt.ly/qe1slUTX" target="_blank" className="bg-titleColor text-white px-10 py-2 rounded font-bold hover:bg-titleColor/50">Select</Link>
     </div>
     </div>
     </td>
  ))}
  
   
</tr>
</tbody>

</table>

      
       
       

       <SmPricing Packages={Packages} />
      

       <div className="flex flex-col space-y-10 mx-auto">
       <ul className="flex flex-col space-y-3 list-disc space-x-5 text-lg">
        <h1 className="text-2xl font-bold">Why Choose Me?</h1>
        <li>100% responsive designs that look perfect on any device.</li>
        <li>Expert support to ensure easy setup.</li>
        <li>Fast delivery with top-notch quality guaranteed.</li>

       </ul>
       <div className="flex flex-col space-y-10 lg:space-y-20 justify-center items-start xl:items-center">
       <p className="text-lg font-bold">Find the right package for your needs and make your emails unforgettable!</p>
      <div>
      <FiverrLinkButton buttonTitle='Order Now on Fiverr' />
      </div>
       </div>
       </div>

       </div>
       
    </section>
  )
}

export default Pricing