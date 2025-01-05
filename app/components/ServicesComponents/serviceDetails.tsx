import Link from 'next/link'
import React from 'react'

type Props = {}

const ServiceDetails = (props: Props) => {
  return (
    <div className=" container flex flex-col space-y-7">
        <h1 className=" text-xl lg:text-4xl font-extrabold">Clickable HTML Email Signature Development</h1>

        <div className="flex flex-col space-y-7 text-xl">
        
          <p>I specialize in designing and developing <Link href="https://cutt.ly/qe1slUTX" target='_blank'><b className="text-secoundary hover:underline">professional, fully clickable HTML email signatures</b></Link> tailored to enhance your brand's identity and improve email communication. Whether you're an individual professional, a small business owner, or part of a corporate team, my email signatures are crafted to leave a lasting impression on your recipients.</p>

          <div className="flex flex-col space-y-5">
          <p className="text-2xl font-bold">What You’ll Get:</p>
          <ul className="flex flex-col space-y-2  list-disc xl:space-x-10" >
            <p className="text-xl font-medium"><b>1. Custom Design:</b></p>
            <li>Unique and professional design aligned with your brand’s style.</li>
            <li>Fully responsive across all devices (desktop, tablet, mobile).</li>
            
          </ul>

          <ul className="flex flex-col space-y-2 list-disc xl:space-x-10" >
            <p className="text-xl font-medium"><b> 2. Clickable Elements:</b></p>
            <li>Social media icons linked to your profiles.</li>
            <li>Clickable phone numbers, email addresses, and website URLs.</li>
            <li>Seamless integration with Gmail, Outlook, Apple Mail, and more.</li>            
          </ul>

          <ul className="flex flex-col space-y-2 list-disc xl:space-x-10" >
            <p className="text-xl font-medium"> <b> 3. Brand Integration:</b></p>
            <li>Use of your company logo and brand colors for consistency.</li>
            <li>Professional fonts and layout to match your corporate identity.</li>                     
          </ul>

          <ul className="flex flex-col space-y-2 list-disc xl:space-x-10" >
            <p className="text-xl font-medium"><b>4. High-Quality Coding:</b></p>
            <li>Clean, lightweight, and reliable HTML code.</li>
            <li>Tested for compatibility with major email clients.</li>                     
          </ul>


          </div>

          <ul className="flex flex-col space-y-2  list-disc xl:space-x-10" >
          <p className="text-2xl font-bold">Why Choose Me?</p>
            <li> <b>Experienced Designer:</b> I have successfully designed email signatures for multiple clients, including business professionals and corporate teams.</li>
            <li> <b>Quick Turnaround:</b> Get your email signature delivered on time without compromising on quality.</li>

            <li> <b>Full Support:</b> I provide complete guidance on how to integrate your signature into your email client.</li>
            
          </ul>


          <ul className="flex flex-col space-y-2  list-disc" >
          <p className="text-2xl font-bold">Portfolio Highlights:</p>
            <p> I’ve worked with clients like <Link className="text-secoundary hover:underline" href="https://cutt.ly/qe1slUTX" target="_blank"><b>Jhenelle Creighton and her team members</b></Link>, delivering results that align perfectly with their expectations. You can view more examples of my work on my website.</p>
           
            
          </ul>


          <ul className="flex flex-col space-y-2  list-disc xl:space-x-10" >
          <p className="text-2xl font-bold">How to Get Started:</p>
            <li> Visit my Fiverr gig <Link href="https://cutt.ly/qe1slUTX" target='_blank' className="text-secoundary hover:underline"><b>here</b></Link> to place an order.</li>
            <li> Provide your requirements, including logo, contact details, social media links, and any specific preferences.</li>

            <li>Receive your clickable HTML email signature within a few hours or days!
            </li>
            
          </ul>

         
          

        </div>

      </div>
  )
}

export default ServiceDetails