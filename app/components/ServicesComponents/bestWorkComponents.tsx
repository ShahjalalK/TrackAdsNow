import Image from 'next/image'
import React from 'react'
import BestWork from "@/public/images/service_inner.jpg"
import { PiSealCheckFill } from "react-icons/pi";
import { PiPlayFill } from "react-icons/pi";

type Props = {}

const BestWorkComponents = (props: Props) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 space-x-7">
          <div className="flex flex-col space-y-4">
            <Image src={BestWork} alt="best work" placeholder="blur" className="w-[100%] h-full rounded-md" />
            <PiPlayFill className="text-2xl text-gray-600" />
          </div>
          <div className="flex flex-col space-y-5">
            <h1 className="text-3xl font-bold text-titleColor">We Serve The Best Work</h1>
            <ul className="flex flex-col space-y-3">
              <li className="flex items-start gap-x-2"><PiSealCheckFill className="text-primary text-3xl w-10" /> We deliver top-notch quality with attention to detail.</li>

              <li className="flex items-start gap-x-2"><PiSealCheckFill className="text-primary text-3xl w-10" /> Timely delivery ensures reliability and client trust always.</li>

              <li className="flex items-start gap-x-2"><PiSealCheckFill className="text-primary text-3xl w-10" /> Innovative solutions tailored to meet unique client needs.</li>

              <li className="flex items-start gap-x-2"><PiSealCheckFill className="text-primary text-3xl w-10" /> Our commitment builds long-lasting relationships with clients.</li>

              <li className="flex items-start gap-x-2"><PiSealCheckFill className="text-primary text-3xl w-10" /> Client satisfaction is our ultimate measure of success.</li>
            </ul>
          </div>
        </div>
  )
}

export default BestWorkComponents