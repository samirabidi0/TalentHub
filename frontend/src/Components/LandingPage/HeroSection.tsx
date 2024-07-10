import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="card glass w-96 flex flex-col justify-between h-full">
      <figure>
        <img
          src="https://st2.depositphotos.com/3369547/8161/v/950/depositphotos_81611512-stock-illustration-web-developer-design.jpg  className='w-6 h-6'"
          alt="car!"
        />
      </figure>
      <div className="card-body flex flex-col justify-between">
        <h2 className="card-title">Life hack</h2>
        <p>How to park your car at your garage?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Learn now!</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
