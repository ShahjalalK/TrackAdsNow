import Link from 'next/link'
import React from 'react'
import { FaCloudDownloadAlt } from "react-icons/fa";


type Props = {}

const Video = (props: Props) => {
  return (
    <section className=" section-padding pt-10 xl:pt-32  flex flex-col space-y-10 pb-24 bg-bgColor herobg" id="#">
      <div className="container flex flex-col space-y-10 items-center justify-center">
        <div className="flex flex-col space-y-3 justify-center items-center xl:text-center">
        <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold">Easily Add Your New Email Signature</h1>
        <p className="text-lg">Follow the step-by-step video guide to quickly add your professional email signature to Gmail, Outlook, or any other email client. Download a sample below to test it yourself!</p>
        </div>
      <div className=" relative p-[30%] lg:p-[16%] xl:p-[25%]  flex justify-center items-center rounded overflow-x-hidden w-[100%] xl:w-[70%] ">
        <iframe src="https://www.youtube.com/embed/oVfQNB51P30?autoplay=0&muted=1&loop=1&title=0&byline=0&badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="1" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen className=" absolute top-5 left-0 w-[100%] h-full rounded p-0"></iframe>
        </div>

        <div>
            <Link href="/Anna David Signature.html" download="signature" target="_blank" className="bg-titleColor hover:bg-dipTigleColor text-white text-base flex items-center space-x-2 px-3 lg:px-5 xl:px-7 py-2 xl:py-4 rounded-md font-bold flex-col xl:flex-row space-y-2 xl:space-y-0  text-center"><span>Download Sample Email Signature</span> <FaCloudDownloadAlt className="text-2xl" /> </Link>
        </div>
      </div>


      {/* <video src="https://www.dropbox.com/scl/fi/le04r5gve6j1a7vsqj8jp/Untitled-design-2.mp4?rlkey=z177vbkshx4fjk5nxzvj3pk07&st=v2jxr9q4&row=0" typeof="video/mp4"></video> */}
        

      {/* <video width="640" height="360" controls>
                <source src="https://www.dropbox.com/scl/fi/le04r5gve6j1a7vsqj8jp/Untitled-design-2.mp4?rlkey=z177vbkshx4fjk5nxzvj3pk07&st=v2jxr9q4?raw=1" type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}

      

      

     

    </section>
  )
}

export default Video