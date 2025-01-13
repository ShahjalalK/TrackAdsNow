"use client"

import React from 'react'
import CookieConsent from 'react-cookie-consent'

type Props = {}

const CookieConsentComponent = (props: Props) => {
  return (
    <CookieConsent
  location="bottom"
  buttonText="Got it!"
  cookieName="myAwesomeCookieName2"
  style={{ background: "rgb(149, 165, 166)", }} 
  buttonStyle={{ color: "#000", fontSize: "17px", borderRadius: "5px", padding : "2px 20px", backgroundColor: "rgb(241, 214, 0)" }}
  expires={150}
>
<p className="text-base xl:ml-7">We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.</p>
  
</CookieConsent>
  )
}

export default CookieConsentComponent