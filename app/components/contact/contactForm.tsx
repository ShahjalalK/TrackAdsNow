"use client"
import React, {  useState } from 'react'
import SectionTitle from '../sectionTitle'

import MessageAlert from './messageAlert'
import { Oval } from 'react-loader-spinner'








type Props = {}

const ContactForm = (props: Props) => {

  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)
  
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [subject, setSubject] = useState("")
const [message, setMessage] = useState("")

const [response, setResponse] = useState("");
const [responseEroor, setResponseError] = useState("");


console.log(response)


const handleSubmit = async (e : any) => {
  e.preventDefault();

  if(!email || !message) return
  setLoading(true)
  try {
    const res = await fetch("/api/messageEmailApi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name, email, subject, message}),
    });

    const result = await res.json();
    if(result.message){
      setResponse(result.message);

      setName("")
      setEmail("")
      setSubject("")
      setMessage("")

    }
    if(result.error){
      setResponseError(result.error)
    }
    
  } catch (error) {
   console.log(error)
  }

 

  setLoading(false)

};

  
  
  return (
    <section className="section-padding bg-bgColor" id='contact'>
      <div className="grid xl:grid-cols-3 container">
        <div className="xl:col-span-2">
        <div className="flex flex-col space-y-10">
        <div className="flex flex-col space-y-3">
        <SectionTitle subTitle="Have Any Questions?" sectionTitle="CONTACT WITH US!" description="Have questions, ideas, or just want to say hello? We'd love to hear from you! 💬
Fill out the form below, and we'll get back to you in no time. Your message matters to us, and we’re here to help! 🚀" />
        </div>
        
      <form action="" method="post" className="flex flex-col space-y-5" onSubmit={(e) => handleSubmit(e)}>
                  <div className="flex flex-col xl:flex-row space-y-5 xl:space-y-0 items-center xl:space-x-5">
                  <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="" id="" className="border p-3 rounded-md w-full bg-white outline-none placeholder:text-titleColor/80 text-lg" placeholder='Enter Your Name' />
                  <input value={email} required onChange={(e) => setEmail(e.target.value)} type="email" name="" id="" className="border p-3 rounded-md w-full bg-white outline-none placeholder:text-titleColor/80 text-lg" placeholder='Enter Your Email' />
                  </div>
                  <input value={subject} onChange={(e) => setSubject(e.target.value)} type="text" name="" id="" className="border p-3 rounded-md w-full bg-white outline-none placeholder:text-titleColor/80 text-lg" placeholder='Enter Your Subject' />
                  <textarea value={message} required onChange={(e) => setMessage(e.target.value)} name="" id="" rows={5}  className="border p-3 rounded-md w-full bg-white outline-none placeholder:text-titleColor/80 text-lg" placeholder='Write Your Message'></textarea>
                  
                  <button type="submit" className={`w-full bg-secoundary rounded-md ${loading ? 'p-2' : 'p-4'} text-white flex justify-center items-center`}>{loading ? <Oval
  visible={true}
  height="40"
  width="40"
  color="#fff"
  
  /> : "Send Your Message 🚀"}   </button>
                </form>
                {response && <MessageAlert messageAlert={response}/>}
                {responseEroor && <p>Message is not sent, Please Try again</p>}
                
        </div>
        </div>
      </div>
    </section>

    
  )
}

export default ContactForm