import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const PageLayout = ({children}:any) => {
  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default PageLayout