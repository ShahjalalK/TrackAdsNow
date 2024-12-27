import React from 'react'

import ServiceDetails from "@/public/images/service_details.jpg"
import Image from 'next/image'

const EmailSignatureServiceInfo = () => {
  return (
    <>
   <Image src={ServiceDetails} alt="service Details" placeholder="blur" className="w-[100%]" />
        <h1 className="text-4xl font-bold text-titleColor break-words">Clickable HTML Email Signature</h1>
        <p className="text-lg">A professional and clickable HTML email signature offers numerous advantages for both personal branding and business growth. Here’s how it can benefit you:</p>
        <ul className="flex flex-col space-y-4 text-lg">
          <li> ➤ <b>Enhances Professionalism:</b> A well-designed email signature adds a polished and professional look to your emails, making a lasting impression on recipients.</li>

          <li>➤ <b>Boosts Brand Awareness:</b> By incorporating your company logo, colors, and social media links, you reinforce your brand identity every time you send an email.</li>

          <li>➤ <b>Increases Website Traffic:</b> Clickable elements like website links or call-to-action buttons direct recipients to your website, driving more traffic effortlessly.</li>

          <li>➤ <b>Facilitates Easy Contact:</b> Including clickable phone numbers, email addresses, and location links makes it convenient for clients to reach you.</li>

          <li>➤ <b>Supports Marketing Efforts:</b> You can promote special offers, events, or new products by adding banners or links to your signature.</li>

          <li>➤ <b>Builds Trust:</b> A clean and consistent signature conveys professionalism, instilling trust in your recipients.</li>
        </ul>
    </>
  )
}

export default EmailSignatureServiceInfo