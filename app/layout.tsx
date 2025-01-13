

import type { Metadata } from "next";
import { GoogleTagManager } from '@next/third-parties/google'
import "./globals.css";
import Link from "next/link";
import Header from "./components/header";
import Footer from "./components/footer";
import Image from "next/image";




export const metadata: Metadata = {
  title: "Professional Clickable HTML Email Signature Design Services",
  description: "Get a sleek, responsive, and clickable HTML email signature that enhances your brand identity. Perfect for businesses and professionals. Order now for top-quality designs!",
 
 
};





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

      {/* <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" /> */}
      <link rel="shortcut icon" href="https://raw.githubusercontent.com/ShahjalalK/picture/refs/heads/main/favicon2.png" type="image/x-icon" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        ></link> */}


        <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap" rel="stylesheet" />
      </head>

      
      

      <body className="font-Roboto">
        
      <Header />

       

          {children}
         


          <Footer />
        
      </body>

      <GoogleTagManager gtmId="GTM-KZTG5HKH" />
     
    </html>
  );
}
