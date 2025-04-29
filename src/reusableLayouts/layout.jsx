import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Navbar OUTSIDE any container */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Layout;
