import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import CategoryPage from '../pages/CategoryPage';
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
             {/* Industry Pages */}
             {/* <Route path="/industry/:category" element={<CategoryPage type="industry" />} /> */}
            <Route path="/category/:type/:category" element={<CategoryPage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/quote" element={<CustomQuoteForm />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='/about-us' element={<AboutUs />} />
        </Routes>
    </div>
  )
}
export default AppRouter
