import React from 'react'
import Header from '../Components/Main/Header'
import ContactMain from '../Components/Main/ContactMain'
import Footer from '../Components/Main/Footer'

const Contact = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Header/>
        <ContactMain/>
        <Footer/>
    </div>
  )
}

export default Contact