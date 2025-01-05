"use client"

import React from 'react'
import CookieConsent from 'react-cookie-consent'

type Props = {}

const CookieConsentComponent = (props: Props) => {
  return (
    <CookieConsent
  location="bottom"
  buttonText="Accept All"
  cookieName="myAwesomeCookieName2"
  style={{ background: "#2B373B", padding : "10px" }}
  buttonStyle={{ color: "#F5467E", fontSize: "13px", borderRadius: "10px", backgroundColor: "#fff" }}
  expires={150}
>
We use cookies to improve your browsing experience, analyze website performance, and provide personalized content. By clicking "Accept All," you agree to our use of cookies. You can manage your preferences anytime in the settings.
  
</CookieConsent>
  )
}

export default CookieConsentComponent