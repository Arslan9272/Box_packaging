import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import CustomQuoteForm from '../components/quote';
import ProductDetail from '../pages/ProductDetail';
import ContactUs from '../pages/Contact';
import AboutUs from '../pages/AboutUs';
import Portfolio from '../pages/Portfolio';

const AppRouter = ()  =>{
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/quote" element={<CustomQuoteForm />} />
            <Route path="/product/:title" element={<ProductDetail />} />
        </Routes>
    </div>
  )
}
export default AppRouter
