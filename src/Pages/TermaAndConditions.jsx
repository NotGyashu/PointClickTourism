import React from 'react'
import Header from '../Components/Main/Header'
import Footer from '../Components/Main/Footer'
import TCMain from '../Components/Main/TCMain';

const TermaAndConditions = () => {
  return (
    <div className="flex flex-col min-h-screen scrollable">
      <Header />
      <TCMain/>
      <Footer />
    </div>
  );
}

export default TermaAndConditions