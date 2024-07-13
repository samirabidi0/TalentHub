
'use client';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

const TalentDetail: React.FC = () => {
  const [apply, setapply] = useState()
  const [comment, setcomment] = useState('')
  const searchParams = useSearchParams();

  const id = searchParams.get('id');
  const title = searchParams.get('title');
  const description = searchParams.get('description');
  const imageUrl = searchParams.get('imageUrl') ?? '';
  const price = searchParams.get('price');
  const category = searchParams.get('category');
  const rating = searchParams.get('rating');
  const delivery = searchParams.get('delivery');

  return (
    <div className="flex flex-wrap -mx-4" key={id}>
      <div className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">

            <div>
              <h1 className="text-xl font-bold">{title}</h1>
              <div className="flex items-center mt-2">
                <img src={imageUrl} alt="Profile picture of Monjurul Islam" className="w-12 h-12 rounded-full mr-2" />
                <div>
                  <p className="text-lg font-medium">
                    Samir Abidi <span className="text-gray-500">| Level 2</span>

                    <span className="text-gray-500">(1k+)</span>
                  </p>
                  <p className="text-sm text-gray-500"><i className="fas fa-language"></i>ordered 1 time</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <img src={imageUrl} alt="Promotional banner with woman in orange sweater promoting WordPress website design and development services, ORDER NOW button" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <h1>About me:</h1>
          <p>{description}</p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 px-4">
        <div className="w-full bg-white shadow-lg rounded-lg">
          <div className="flex border-b">

            <div className="py-2 px-4 text-center cursor-pointer flex-1">Standard</div>

          </div>
          <div className="p-6">
            <h2 className="font-bold text-xl mb-1">{title}</h2>
            <p className="text-lg mb-4"><span className="font-bold">{price}$US</span></p>
            <p className="text-gray-600 mb-4">{description}</p>
            <ul className="mb-4 space-y-2 text-gray-600">
              <li className="flex items-center"><i className="fas fa-truck mr-2"></i> {delivery}(s)</li>

            </ul>

            <div className="py-2 px-4 mb-4 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <label className="sr-only">Your comment</label>
              <textarea id="comment"
                className="w-full text-sm text-gray-900 bg-white border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write a comment..." required></textarea>
            </div>
            <button className="w-full bg-black text-white py-2 rounded-lg flex items-center justify-center"><span className="mr-2">Apply</span><i className="fas fa-arrow-right"></i></button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TalentDetail;

