import Image from 'next/image'
import React from 'react'
import ServiceFeature1 from "@/public/images/service_feature_1.svg"
import ServiceFeatrue2 from "@/public/images/service_feature_2.svg"

type Props = {}

const BenefitsComponents = (props: Props) => {
  return (
    <div className="flex flex-col space-y-4">
    <h1 className="text-3xl font-bold text-titleColor">Benefits With Our Service</h1>
    <div className="grid grid-cols-1 xl:grid-cols-2 space-y-5 xl:space-y-0 xl:space-x-5 w-full">
    <div className=" flex items-center gap-x-5 shadow border rounded p-5">
        <div className="bg-primary w-[150px] h-[80px] flex justify-center items-center rounded shadow-3xl">
          {/* <Image src={ServiceFeature1} alt='servicefeatrue' placeholder="blur" /> */}
          <Image src={ServiceFeature1} alt="service Details"  />
        </div>
        <div className="flex flex-col space-y-1">
        <h3 className="text-2xl font-bold">Flexible Solutions</h3>
        <p className="text-sm">Flexible solutions tailored to your unique needs.</p>
        </div>
      </div>

      <div className="flex space-y-4 xl:space-y-0 items-center gap-x-5 shadow border rounded p-5">
        <div className="bg-primary w-[150px] h-[80px] flex justify-center items-center rounded shadow-3xl">
          {/* <Image src={ServiceFeature1} alt='servicefeatrue' placeholder="blur" /> */}
          <Image src={ServiceFeatrue2} alt="service Details"  />
        </div>
        <div className="flex flex-col space-y-1">
        <h3 className="text-2xl font-bold">24/7 Unlimited Support</h3>
        <p className="text-sm">24/7 unlimited support ensures constant reliability.</p>
        </div>
      </div>
      
    </div>
  </div>
  )
}

export default BenefitsComponents