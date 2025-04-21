import Link from "next/link"
import '@/app/globals.css'
import Image from "next/image"

import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      

<head>
  
  </head>

      <body>

        <Header />
        <div className="pages">
          {children}
        </div>
        
        <Footer />
      
      </body>
    </html>
  )
}


