
"use client"

import React, { useState } from 'react'




import Image from 'next/image'
import Link from 'next/link'

import SectionTitle from '../sectionTitle'
import PortfolioSectionCard from './portfolioSectionCard'
import { Rivews } from "@/types/rivew";


type Props = {
    buyerRivew : Rivews[]
}

const Portfolio = ({buyerRivew}: Props) => {

  

   const [reviewAll, setRivewAll] = useState<Rivews[]>(buyerRivew)

    const [visable, setVisibale] = useState(3)
    
    const RivewMoreHandler = () => {
        setVisibale((prev) => prev + 4)
        
    }

   
  return (
    <section className="section-padding" id='portfolio'>
        <div className="container flex flex-col space-y-20">
        
        <div className="grid xl:grid-cols-3">

           <div className=" col-span-2 flex flex-col space-y-14 xl:space-y-20">
           <SectionTitle subTitle="See My Work and Hear From My Clients" sectionTitle="Portfolio & Reviews" description="Discover the high-quality, clickable HTML email signatures I’ve created for clients worldwide. Each design is a blend of creativity and professionalism, tailored to meet unique branding needs. Alongside the work samples, read what my clients have to say about their experience working with me." />
           
           {reviewAll.slice(0, visable).map((item) => (
                <PortfolioSectionCard review={item} key={item._id} />
           ))}
           

           
            <div className="flex items-center justify-center">
              {visable < reviewAll.length &&  <button onClick={RivewMoreHandler} className={` hover:bg-secoundary  border-2 border-secoundary text-secoundary hover:text-white px-6 py-3 rounded-md text-lg font-medium`}>Show More Reviews</button>}
              
              
            </div>
           </div>
        
        
        
        
        </div>
        </div>
    </section>
  )
}

export default Portfolio