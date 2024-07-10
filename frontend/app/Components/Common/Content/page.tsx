import React from 'react';
import Link from 'next/link';

const Page: React.FC = () => {
  return (
    <div>
        <h2 className=" text-center">Find Top Freelancers</h2>
        <div className="flex justify-center items-center flex-wrap gap-8">
        <Link href="/Components/Common/Content/DetailDev">
<div className="card glass w-96">
  <figure>
    <img
      src="https://st2.depositphotos.com/3369547/8161/v/950/depositphotos_81611512-stock-illustration-web-developer-design.jpg"
      alt="car!"
      className="w-16 h-16 mx-auto mb-2"
    />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-center hover:text-blue-500">Programming & Development</h2>
    <div className="card-actions justify-end"></div>
  </div>
</div>
</Link>
<Link href="/Components/Common/Content/DetailArt">
<div className="card glass w-96">
  <figure>
    <img
      src="https://www.expedrion.biz/uploads/blog_featured_image/20230201084905__20230104092143__post6.jpg"
      alt="car!"
      className="w-16 h-16 mx-auto mb-2"
    />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-center hover:text-blue-500">Design & Art</h2>
    <div className="card-actions justify-end"></div>
  </div>
</div>
</Link>
<Link href="/Components/Common/Content/DetailSell">
<div className="card glass w-96">
  <figure>
    <img
      src="https://builtin.com/sites/www.builtin.com/files/inline-images/marketing-pillar-page-marketing-overview_0.png"
      alt="car!"
      className="w-16 h-16 mx-auto mb-2"
    />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-center hover:text-blue-500">Sales & Marketing</h2>
    <div className="card-actions justify-end"></div>
  </div>
</div>
</Link>
</div>
    </div>
    
  );
};

export default Page;
