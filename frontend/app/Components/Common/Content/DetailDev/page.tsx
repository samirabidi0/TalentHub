import React from 'react';

const page: React.FC = () => {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
    <figure>
      <img
        src="https://st2.depositphotos.com/3369547/8161/v/950/depositphotos_81611512-stock-illustration-web-developer-design.jpg"
        className="w-20 h-20 mx-auto mb-2"
        alt="Movie" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Samir</h2>
      <p>Developpeur full-stuck</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">contact</button>
      </div>
    </div>
  </div>
  );
};
export default page
