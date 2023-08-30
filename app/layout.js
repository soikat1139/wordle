
"use client"

import { Inter } from 'next/font/google'
import Header from './components/Header/Header'
import "./globals.css"
import Link from 'next/link'
import Sidebar from './components/sideBar/Sidebar'

import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})


import { Black_Ops_One } from 'next/font/google'
 
export const black_Ops_One=Black_Ops_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})


export const metadata = {
  title: 'Wordle Game',
  description: 'Generated by create next app',
 
}


export default function RootLayout({ children }) {

  const [isSidebar,setIsSideBar]=useState(false)


  function setSide(value){
    console.log(value)
    setIsSideBar(value)

  }











  return (
    <html lang="en"   className={black_Ops_One.className}>
      {/* <Link href="https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap" rel="stylesheet"/>  */}
      
      <body >
        <Header setSide={setSide}/>
        {
          isSidebar && <Sidebar/>
        }
        
        <div>
        {children}

        </div>

        
        </body>
    </html>
  )
}
