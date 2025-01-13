import Image from 'next/image'
import React from 'react'
import Buyer1 from "@/public/images/1.png"
import { FaStar } from "react-icons/fa6";
import Portfolio1 from "@/public/Email Signature Portfolio/2.jpg"
import Link from 'next/link';
import { Rivews } from "@/types/rivew";
import FiverrLinkButton from '../contact/fiverrLinkButton';
import ImageTestSignature from "@/public/testing gig.jpg"

type Props = {
    review :  Rivews;
}

const PortfolioSectionCard = ({review}: Props) => {
  return (
     <div className="flex flex-col space-y-5 xl:space-y-8 " >

<div  className="flex flex-col space-y-1 items-start">
                       
                       <div className="flex items-center space-x-3">
                       <Image src={review.buyerImage} alt={review.name} className=" w-16 xl:w-20 rounded-full object-cover border h-16 xl:h-20 " width={300} height={300}  />
                           <div className="flex flex-col">
                           <h1 className="text-2xl font-bold">{review.name}</h1>
                           <div className="flex items-center space-x-1 text-md text-yellow-500">
                               <FaStar />
                               <FaStar />
                               <FaStar />
                               <FaStar />
                               <FaStar />
                               <span className="text-xl font-bold">5</span>
                           </div>
                           </div>
                           
                       </div>
                       <p className="pt-2 text-lg block font-medium">{review.rivew}</p>
                       </div>

                       <Link href="https://cutt.ly/qe1slUTX" target="_blank" className="w-full xl:w-[80%] rounded-md overflow-hidden">
            <Image src={review.portfolioImage} alt={review.portfolioImage} className="w-full " unoptimized width={1000} height={500} loading="lazy" />           

        </Link>

                       {/* <div>
                <Image src={ImageTestSignature} alt='tks' className="w-[90%]" />
              </div> */}

{/* <div className=" xl:w-[90%] py-2 px-5 pb-10 border border-gray-400 rounded-md shadow-shadowSk flex flex-col space-y-14">
        
        
        <div className="grid xl:grid-cols-6 gap-x-5   items-end ">
            <div className="xl:col-span-4 flex flex-col space-y-3">
            <div className="border-b border-gray-400 py-1">
                <span className="text-xs text-gray-400">To</span>
            </div>

            <div className="border-b border-gray-400 py-1">
                <span className="text-xs text-gray-400">Subject</span>
            </div>
            <div className="h-3">

            </div>
            </div>

            <div className="xl:col-span-2">
                
                <FiverrLinkButton buttonTitle="Order on Fiverr" />
            </div>
        </div>

        




        </div> */}




       
                    </div>

  )
}

export default PortfolioSectionCard