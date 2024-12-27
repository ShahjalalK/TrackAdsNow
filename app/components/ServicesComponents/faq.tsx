// import React, { useState } from 'react'

"use client"
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";


type Props = {}

const questionData = [
  {
    
    question : "What is a clickable HTML email signature?",
    answer : "A clickable HTML email signature is a professional, interactive footer added to your emails, featuring clickable links to your website, social media profiles, or contact information."
  },
  {
    
    question : "Why do I need a clickable email signature?",
    answer : "It enhances your brand’s professionalism, increases engagement, and makes it easier for recipients to connect with you or visit your website."
  },
  {
    
    question : "What information can I include in my email signature?",
    answer : "You can include your name, job title, company logo, contact details, social media icons, website link, and even a call-to-action."
  },
  {
    
    question : "Is the email signature compatible with all email clients?",
    answer : "Yes, I ensure the signature is compatible with major email platforms like Gmail, Outlook, Apple Mail, and more."
  },
  {
    
    question : "Can you customize the design to match my brand?",
    answer : "Absolutely! I can create a fully customized signature that aligns with your brand’s colors, style, and identity."
  },
  {
    
    question : "Do you include clickable social media icons?",
    answer : "Yes, I add professionally designed, clickable social media icons that link directly to your profiles."
  },
  {
    
    question : "How long does it take to create an email signature?",
    answer : "Typically, it takes 1-3 business days, depending on the complexity of the design."
  },
  {
    
    question : "Can I use the email signature on multiple devices?",
    answer : "Yes, the signature is designed to work seamlessly across desktops, tablets, and smartphones."
  },
  {
    
    question : "Do you provide installation instructions?",
    answer : "Yes, I include clear, step-by-step instructions to help you install the signature on your email platform."
  },
  {
    
    question : "What if I need revisions or updates later?",
    answer : "I offer revision and update services to ensure your email signature stays current and meets your needs."
  }
]

const Faq = () => {

  const [selected, setSelected] = useState(null)
  const toggle = (i : any) => {
    if(selected == i){
        return setSelected(null)
    }

    setSelected(i)
  }

  return (
    <div className="flex flex-col space-y-5">
          <h1  className="text-3xl font-bold text-titleColor">Questions About Service</h1>
        <div className="flex flex-col space-y-4">
        {questionData.map((item, i) => (
            <div className="flex flex-col" key={i}>
            <h3 onClick={() => toggle(i)} className={` ${selected == i ? "bg-primary text-white " : " bg-white text-titleColor shadow-md border hover:bg-primary hover:text-white"} text-lg flex justify-between items-center p-3  rounded-t-md cursor-pointer transition-colors duration-300 `}>{item.question} {selected == i ? <FaMinus className={`text-sm`} />  : <FaPlus className={`text-sm`} /> } </h3>

              
              <div className={`${selected !== i ? "hidden" : "block"} border rounded-b-md shadow p-5`}>
                  <p>{item.answer}</p>
                </div>
            </div>
          ))}
        </div>
        </div>
  )
}

export default Faq