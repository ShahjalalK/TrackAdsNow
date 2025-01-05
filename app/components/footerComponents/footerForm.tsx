"use client"
import React, { useState } from 'react'
import { CiMail } from "react-icons/ci";
import { SpinnerCircularFixed } from 'spinners-react';

type Props = {}

const FooterForm = (props: Props) => {

  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState('');
  const [loading, setLoading] = useState(false)
  

  const handleSubmit = async (e : any) => {
    e.preventDefault();

    if(!email) return 

    setLoading(true)    

    setSubscribed("Shabscribed and projectiong")

    setEmail("")
    setLoading(false)
    
  };


  return (
    <div className="flex flex-col space-y-2 xl:col-span-2">
          <h3 className="text-xl font-bold uppercase text-white">Join Our Community</h3>
          <p className="text-base ">Stay Ahead with Exclusive Updates and Insights!</p>
         
          <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col xl:flex-row space-y-4 xl:space-y-0 items-start xl:items-center xl:space-x-5 pt-5">
                <div className="flex items-center border rounded-md space-x-2 p-3  w-full">
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required className="  bg-transparent w-full  outline-none placeholder:text-lg placeholder:text-gray-300" placeholder='Email Address' />
    
                <CiMail className="text-gray-400 text-2xl " />
    
                </div>
                <button type="submit" className="bg-secoundary px-5 py-3 rounded-md uppercase">{loading ? <SpinnerCircularFixed color='#fff' size={25} /> : "Subscribe"}</button>
              </form>
              

            {subscribed && <p className="text-white">
              <b>Thank You for Subscribing! 🎉</b> <br />
You're now part of an amazing community! 📨
Get ready to receive exclusive updates, valuable insights, and special offers straight to your inbox. We're excited to have you on board! 🌟</p>}              
            
        </div>
  )
}

export default FooterForm