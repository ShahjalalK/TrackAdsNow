import React from 'react'
import ResponsiveEmail from "@/public/email signature responsive2.png"
import Image from 'next/image'
import Link from 'next/link'
import FiverrLinkButton from '../contact/fiverrLinkButton'

type Props = {}

const Services = (props: Props) => {
  return (
    <section className="section-padding">
        <div className="container flex flex-col space-y-10 xl:space-y-20">
            <div className="flex flex-col space-y-4 xl:text-center">
                <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-titleColor">Transform Your Emails with Professional Clickable Email Signatures</h1>
                <p className=" lg:text-lg font-bold">From sleek designs to flawless functionality, I offer everything you need to elevate your email communication.</p>
            </div>
            <div className="grid xl:grid-cols-2 space-y-10 xl:space-y-0 xl:space-x-20">
               
            <div>
                    <Image src={ResponsiveEmail} alt='Responsive Email' className="w-full" placeholder="blur" />
                </div>
                
                <div className="flex flex-col space-y-5">
                    <ul className="text-lg flex flex-col space-y-2  space-x-4 list-disc">
                        <p className="font-bold">1. Custom HTML Email Signature Design</p>
                        <li>
                        Unique and personalized designs tailored to your brand identity.
                        </li>
                        <li>Perfect for individuals, teams, and businesses.</li>
                    </ul>

                    <ul className="text-lg flex flex-col space-y-2  space-x-4 list-disc">
                        <p className="font-bold">2. Responsive and Mobile-Friendly Signatures</p>
                        <li>
                        Your signature will look stunning and work seamlessly on any device—desktop, tablet, or mobile.
                        </li>                        
                    </ul>

                    <ul className="text-lg flex flex-col space-y-2  space-x-4 list-disc">
                        <p className="font-bold">3. Clickable Links and Call-to-Actions</p>
                        <li>
                        Add clickable social media icons, websites, and buttons to drive engagement.
                        </li> 
                        <li>
                        Include “Schedule a Meeting,” “Visit Website,” or other CTAs.
                        </li>                         
                    </ul>

                    <ul className="text-lg flex flex-col space-y-2  space-x-4 list-disc">
                        <p className="font-bold">4. Integration with Popular Email Platforms</p>
                        <li>
                        Compatible with Gmail, Outlook, Apple Mail, and other major email clients.
                        </li> 
                        <li>
                        Step-by-step guidance for effortless setup.
                        </li>                         
                    </ul>

                    <ul className="text-lg flex flex-col space-y-2  space-x-4 list-disc">
                        <p className="font-bold">5. Logo and Image Inclusion</p>
                        <li>
                        Professionally embed your company logo or profile picture to strengthen your brand visibility.
                        </li> 
                                             
                    </ul>

                    <ul className="text-lg flex flex-col space-y-2  space-x-4 list-disc">
                        <p className="font-bold">6. Fast Delivery and Unlimited Revisions</p>
                        <li>
                        Receive your signature quickly with the flexibility to make adjustments as needed.
                        </li> 
                                             
                    </ul>
                    
                </div>
               
                
            </div>
            <div className="flex items-center justify-center space-y-16 flex-col">
                    <p className="text-lg font-bold">Ready to upgrade your emails? Let’s create something extraordinary for you today.</p>
                    <FiverrLinkButton buttonTitle='Order Now on Fiverr' />
                    </div>
        </div>

    </section>
  )
}

export default Services