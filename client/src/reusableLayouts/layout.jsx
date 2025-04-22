import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

function layout({children}) {
  return (
    <div>
      <Navbar />
        <div className='container'>
            {children}
        </div>
        <Footer />
    </div>
  )
}

export default layout;
