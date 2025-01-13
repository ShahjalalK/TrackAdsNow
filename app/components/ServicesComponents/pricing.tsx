import React from 'react'
import SectionTitle from '../sectionTitle'
import Link from 'next/link'
import { FaCheck } from "react-icons/fa";
import Image from 'next/image';
import TitleMiror from "@/public/title.svg"
import FiverrLinkButton from '../contact/fiverrLinkButton';

type Props = {}

const Pricing = (props: Props) => {
  return (
    <section className="section-padding bg-bgColor hidden xl:block" id='pricing'>
       <div className="container flex flex-col space-y-20">

      <div className="text-center flex flex-col space-y-4">
        <div className="flex flex-col space-y-2 justify-center items-center">
        <div className="flex items-center space-x-1">
            <Image src={TitleMiror} alt='title' className="w-8" />
            <h1 className="text-lg font-medium text-secoundary uppercase ">Pricing & Packages</h1>
        </div>
        <h1 className="text-xl uppercase font-bold"></h1>
        <h3 className="text-4xl font-bold text-titleColor">Affordable Plans for Professional Email Signatures</h3>
        </div>
        <p className="text-lg ">Perfect for individuals or small businesses looking for a simple yet professional email signature. This package includes one custom HTML email signature designed to represent your brand with clickable social media icons and compatibility across major email platforms like Gmail, Outlook, and Apple Mail. Delivered within 2 days, it’s an affordable way to make a lasting impression.</p>
      </div>
       
       <table className="w-[90%] mx-auto ">
        <tbody>
        <tr className="border">
          <td className="w-48 px-5  text-gray-800">Package</td>
           <td className="p-5 border">
          <div className="flex flex-col space-y-3">
        <div className="flex flex-col space-y-1">
        <h3 className="text-xl font-bold text-gray-700">$10</h3>
        <h1 className="text-xl font-bold text-gray-800">Basic</h1>
        </div>
        <div className="flex flex-col space-y-1">
        <h5 className=" text-sm font-bold uppercase text-gray-800">Signature Essentials</h5>
        <p className="text-gray-700 font-medium">Simple clickable email signature + Free image hosting (limited) + HTML file delivery</p>
        </div>
      </div>
          </td>
           <td className="p-5 border">
          <div className="flex flex-col space-y-3">
        <div className="flex flex-col space-y-1">
        <h3 className="text-xl font-bold text-gray-700">$20</h3>
        <h1 className="text-xl font-bold text-gray-800">Standard</h1>
        </div>
        <div className="flex flex-col space-y-1">
        <h5 className=" text-sm font-bold uppercase text-gray-800">Signature Pro</h5>
        <p className="text-gray-700 font-medium">Professional email signature design + Custom branding elements (logo, colors) + Multiple clickable</p>
        </div>
      </div>
          </td>
           <td className="p-5 border">
          <div className="flex flex-col space-y-3">
        <div className="flex flex-col space-y-1">
        <h3 className="text-xl font-bold text-gray-700">$40</h3>
        <h1 className="text-xl font-bold text-gray-800">Premium</h1>
        </div>
        <div className="flex flex-col space-y-1">
        <h5 className=" text-sm font-bold uppercase text-gray-800">Full Package★</h5>
        <p className="text-gray-700 font-medium">Advanced, custom email signature + Lifetime image hosting + Priority delivery and revisions</p>
        </div>
      </div>
          </td>
        </tr>

        <tr className="border bg-gray-50">
          <td className="px-5 py-2  text-gray-800">Source File</td>
          <td className="border">
          <div className="flex justify-center items-center text-gray-600"><FaCheck /></div>
          </td>
          <td className="border">
          <div className="flex justify-center items-center text-gray-600"><FaCheck /></div>
          </td>
          <td className="border">
          <div className="flex justify-center items-center text-gray-600"><FaCheck /></div>
          </td>
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
          <td className="border">
          <div className="flex justify-center items-center text-gray-600">1</div>
          </td>
          <td className="border">
          <div className="flex justify-center items-center text-gray-600">Unlimited</div>
          </td>
          <td className="border">
          <div className="flex justify-center items-center text-gray-600">Unlimited</div>
          </td>
        </tr>


        <tr className="border ">
          <td className="px-5 py-2  text-gray-800">Delivery Time</td>
          <td className="border">
          <div className="flex justify-center items-center text-gray-600">2 day</div>
          </td>
          <td className="border">
          <div className="flex justify-center items-center text-gray-600">2 day</div>
          </td>
          <td className="border">
          <div className="flex justify-center items-center text-gray-600">1 day</div>
          </td>
        </tr>

        <tr className="border bg-gray-50 ">
          <td className="px-5 py-2  text-gray-800">Image Hosting</td>
          <td className="border">
          <div className="flex justify-center items-center text-gray-600">1 month</div>
          </td>
          <td className="border">
          <div className="flex justify-center items-center text-gray-600">1 month</div>
          </td>
          <td className="border">
          <div className="flex justify-center items-center text-gray-600">Lifetime</div>
          </td>
        </tr>

        <tr className="border ">
          <td className="px-5 py-2 font-bold text-gray-800">Total</td>
          <td className="border">
          <div className="flex flex-col space-y-5 text-gray-600 justify-center items-center p-5">
          <span className="font-bold">$10</span>
          <div>
          <Link href="https://cutt.ly/qe1slUTX" target="_blank" className="bg-titleColor text-white px-10 py-2 rounded font-bold hover:bg-titleColor/50">Select</Link>
          </div>
          </div>
          </td>
           <td className="border">
          <div className="flex flex-col space-y-5 text-gray-600 justify-center items-center p-5">
          <span className="font-bold">$20</span>
          <div>
          <Link href="https://cutt.ly/qe1slUTX" target="_blank" className="bg-titleColor text-white px-10 py-2 rounded font-bold hover:bg-titleColor/50">Select</Link>
          </div>
          </div>
          </td>
           <td className="border">
          <div className="flex flex-col space-y-5 text-gray-600 justify-center items-center p-5">
          <span className="font-bold">$40</span>
          <div>
          <Link href="https://cutt.ly/qe1slUTX" target="_blank" className="bg-titleColor text-white px-10 py-2 rounded font-bold hover:bg-titleColor/50">Select</Link>
          </div>
          </div>
          </td>
        </tr>
        </tbody>

       </table>

       <div className="flex flex-col space-y-10 mx-auto">
       <ul className="flex flex-col space-y-3 list-disc space-x-5 text-lg">
        <h1 className="text-2xl font-bold">Why Choose Me?</h1>
        <li>100% responsive designs that look perfect on any device.</li>
        <li>Expert support to ensure easy setup.</li>
        <li>Fast delivery with top-notch quality guaranteed.</li>

       </ul>
       <div className="flex flex-col space-y-20 justify-center items-center">
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