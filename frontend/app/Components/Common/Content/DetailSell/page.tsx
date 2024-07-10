import React from 'react';

const page: React.FC = () => {
  return (
    <div className="block rounded-lg bg-white shadow-md dark:bg-surface-dark w-[350px] h-[300px]">
    <a href="#!">
      <img
        className="rounded-t-lg w-full h-[250px]"
        src="https://www.expedrion.biz/uploads/blog_featured_image/20230201084905__20230104092143__post6.jpg"
        alt=""
      />
    </a>
    <div className="p-4 text-surface dark:text-white">
      <h5 className="mb-2 text-xl font-medium leading-tight">Card title</h5>
      
      <button
        type="button"
        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-lg transition duration-150 ease-in-out hover:bg-primary-accent-300 focus:bg-primary-accent-300 focus:outline-none active:bg-primary-600 dark:shadow-black/30"
      >
        Button
      </button>
    </div>
  </div>
  );
};
export default page
