import React from 'react'

import Image from 'next/image'



import EmailSignatureServiceInfo from '../ServicesComponents/emailSignatureServiceInfo';
import BestWorkComponents from '../ServicesComponents/bestWorkComponents';
import BenefitsComponents from '../ServicesComponents/benefitsComponents';
import Faq from '../ServicesComponents/faq';



export default function LeftSection() {
  return (
    <div className=" flex flex-col xl:col-span-2 space-y-10">
        
        <EmailSignatureServiceInfo />

      <BestWorkComponents />
        
      <BenefitsComponents />
       
      <Faq />
        
    </div>
  )
}