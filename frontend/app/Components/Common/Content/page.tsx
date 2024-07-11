import React from 'react';
import Link from 'next/link';
import styles from "../../../Card.module.css"

const Page: React.FC = () => {
  return (
    <div>
      <h1 className=" flex justify-center items-center flex-wrap gap-8 mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white " >Find Top Freelancers</h1>
      <div className="flex justify-center items-center flex-wrap gap-8">
        <Link href="/Components/Common/Content/DetailDev">
          <div className="card card-side bg-base-100 shadow-xl">
            <img src="https://st2.depositphotos.com/3369547/8161/v/950/depositphotos_81611512-stock-illustration-web-developer-design.jpg" alt="Card Image" className={styles.cardImage} />
            <div className={`${styles.card}`}>
              <h2 className={styles.cardTitle}>Programming</h2>
            </div>
          </div>


        </Link>
        <Link href="/Components/Common/Content/DetailArt">
          <div className="card card-side bg-base-100 shadow-xl">
            <img src="https://www.expedrion.biz/uploads/blog_featured_image/20230201084905__20230104092143__post6.jpg" alt="Card Image" className={styles.cardImage} />
            <div className={`${styles.card}`}>
              <h2 className={styles.cardTitle}>Art&Design</h2>
            </div>
          </div>
        </Link>
        <Link href="/Components/Common/Content/DetailSell">
          <div className="card card-side bg-base-100 shadow-xl">
            <img src="https://builtin.com/sites/www.builtin.com/files/inline-images/marketing-pillar-page-marketing-overview_0.png" alt="Card Image" className={styles.cardImage} />
            <div className={`${styles.card}`}>
              <h2 className={styles.cardTitle}>Marketing</h2>
            </div>
          </div>
        </Link>
      </div>
    </div>

  );
};

export default Page;
