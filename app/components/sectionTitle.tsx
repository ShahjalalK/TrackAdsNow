import React from 'react'
import TitleMiror from "@/public/title.svg"
import Image from 'next/image'

type Props = {
    sectionTitle : string,
    subTitle : string,
    description : string
}

const SectionTitle = ({sectionTitle, subTitle, description}: Props) => {
  return (
    <>
        <div className="flex items-center space-x-1">
            <Image src={TitleMiror} alt='title' className="w-8" />
            <h1 className="text-lg font-medium text-secoundary uppercase ">{sectionTitle}</h1>
        </div>
        <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-titleColor">{subTitle}</h3>
        <p className="pt-3 text-lg">{description}</p>
    </>
  )
}

export default SectionTitle