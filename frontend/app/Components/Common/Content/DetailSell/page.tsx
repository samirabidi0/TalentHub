import Link from 'next/link';
import React from 'react';

const page: React.FC = () => {
  return (
    <div>
      <h1>Marketing</h1>
      <Link href='/Components/Common/Content/DetailSell/Talent'>
      <div className="w-60 bg-gradient-to-r from-purple-800 via-indigo-600 to-pink-300 rounded-lg pt-2 relative mx-auto font-sans">
        <img src="https://www.expedrion.biz/uploads/blog_featured_image/20230201084905__20230104092143__post6.jpg" alt="Card Image" className="w-full rounded-t-lg" />
        <div className="p-4">
          <h2 className="font-semibold text-white text-center block h2t-1 text-lg">Name</h2>
          <h2 className="font-semibold text-white text-center block h2t-1 text-lg">Title</h2>
          <h2 className="font-normal text-white text-center block h2t-1 text-lg">Description</h2>
          <h2 className="font-normal text-white text-center block h2t-1 text-lg">price</h2>
          <div>
            <p className="font-normal text-white text-center block pt-1 text-lg">Rating ⭐ </p>
          </div>
        </div>
      </div>
      </Link>
    </div>


  );
};
export default page
