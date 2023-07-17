import React from 'react';

const HomeText = () => {
  return (
    <div className="home-text-container" style={{ margin: '0', padding: '0' }}>
      <div className="home-title-container">
        <h1 style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '60px', margin: '0', padding: '0', lineHeight: '1.2' }}>
          Empowering Investors with Data-driven Insights <br />
          <span style={{ color: 'orange', fontSize: '50px' }}>Make Informed Investment Decisions</span>
        </h1>
        <p style={{ textAlign: 'center', fontSize: '20px', margin: '0', padding: '0' }}>
          Explore our comprehensive financial data and gain valuable insights into the stock market. <br /> Together, we can make
          <span style={{ fontWeight: 'bold' }}> informed investment decisions </span> and{' '}
          <span style={{ fontWeight: 'bold' }}> achieve financial success.</span>
          <br />
          Thank you for supporting our mission to provide the tools and knowledge for successful investing!
        </p>
      </div>
    </div>
  );
};

export default HomeText;
