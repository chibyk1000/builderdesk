import Footer from '@/components/common/footer'
import Navbar from '@/components/common/navbar'
import React, { ReactNode } from 'react'

const AppLayout = ({children}:{children:ReactNode}) => {
  return (
      <main className='flex flex-col min-h-screen'>
          <Navbar />
          <div className='flex-1'>
          {children}
              
          </div>
          <Footer/>
      
    </main>
  )
}

export default AppLayout
