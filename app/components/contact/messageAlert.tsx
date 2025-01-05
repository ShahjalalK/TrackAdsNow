import React from 'react'

type Props = {
    messageAlert : string
}

const MessageAlert = ({messageAlert}: Props) => {
  return (
    <div className="flex flex-col">       
        
        <b> Thank You for Reaching Out! 🙌</b>
         <p>
         Your message has been successfully sent, and we're thrilled to hear from you! 🎉 <br />
         Our team will get back to you as soon as possible. If it's urgent, feel free to contact us directly. Have a wonderful day! 🌟
         </p>
    </div>
  )
}

export default MessageAlert