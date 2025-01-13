"use client"
import React, { useState } from 'react'
import SectionTitle from '../sectionTitle'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

type Props = {}

const FAQ = [
    {
        question : "What is a clickable email signature?",
        answer : "A clickable email signature is a custom-designed digital signature added at the bottom of your emails. It includes elements like your name, title, contact details, social media icons, and website links, making it easy for recipients to connect with you."
    },
    {
        question : "Will the email signature work on all email platforms?",
        answer : "Yes! My email signatures are fully compatible with major platforms, including Gmail, Outlook, Apple Mail, Yahoo Mail, and more. They are also responsive, ensuring they look great on both desktop and mobile devices."
    },
    {
        question : "Can I add my logo and social media links?",
        answer : "Absolutely! You can include your company logo, profile picture, clickable social media icons, website, and even call-to-action buttons like “Book a Meeting” or “Visit Website.”"
    },
    {
        question : "How do I install the email signature?",
        answer : "You’ll receive a step-by-step video tutorial to guide you through the installation process for platforms like Gmail and Outlook. If you need further assistance, I’m just a message away!"
    },
    {
        question : "What if I need changes after delivery?",
        answer : "No worries! I offer unlimited revisions with the Premium package to ensure your complete satisfaction. For other packages, minor adjustments are included."
    },
    {
        question : "How long does it take to deliver?",
        answer : "The delivery time depends on the package you choose: *Basic: 2 Days *Standard: 2 Days  *Premium: 1 Day"
    },
    {
        question : "Do you offer bulk email signature designs for teams?",
        answer : "Yes, my Premium package is perfect for teams and businesses needing multiple signatures with consistent branding. I can create customized designs for each team member."
    },
    {
        question : "Why should I choose your service?",
        answer : "I specialize in creating professional, responsive, and visually appealing email signatures tailored to your brand. With a proven track record and global clientele, I ensure high-quality designs with fast delivery and exceptional customer support."
    }
]

const Faq = (props: Props) => {
    const [faq, setFaq] = useState(FAQ)
    const [opentFaq, setOpenFaq] = useState(null)
    const faqHandler = (i : any) => {
       if(opentFaq === i){
        return setOpenFaq(null)
       }
       setOpenFaq(i)
    }
  return (
    <section className="section-padding">
        <div className="container flex flex-col space-y-16 ">
                <div className="flex flex-col space-y-3">
                <SectionTitle subTitle="Frequently Asked Questions" sectionTitle="FAQ " description="Got questions? Find answers to the most common queries about my email signature services." />
                </div>
                <div className="grid  gap-10 xl:w-[70%]">
                    {faq.map((item, i) => (

                        <div className=" rounded flex flex-col" key={i}>
                        <div onClick={() => faqHandler(i)} className={`text-lg font-bold cursor-pointer bg-gray-100 flex justify-between items-start xl:items-center border p-3 rounded-t ${opentFaq !== i ? "rounded-b" : "" }`}>
                        <span> {item.question}</span>

                        {opentFaq === i ? <div className="w-7 h-7 bg-gray-200 rounded-full flex justify-center items-center"><FaChevronUp /></div>  : <div className="w-7 h-7 bg-gray-200 rounded-full flex justify-center items-center"><FaChevronDown /></div>}  
                        </div>
                        {opentFaq === i && <div className="text-lg border border-t-0  p-3 rounded-b">
                            {item.answer}
                            </div>}  
                        </div>

                    ))}
                    

                   
                </div>
        </div>
    </section>
  )
}

export default Faq