import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

const LayoutTwo = ({ children }) => {
  return (
    <>
      <div className="dash">
        <Sidebar />
        <div className="dash-app">
          <Header />
          <main className="dash-content" style={{ backgroundColor: '#e3e7ef' }}>
            {children}
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LayoutTwo;   
