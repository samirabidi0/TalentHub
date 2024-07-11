import React from 'react';
import styles from "../../../../Card.module.css"

const page: React.FC = () => {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <img src="https://www.expedrion.biz/uploads/blog_featured_image/20230201084905__20230104092143__post6.jpg" alt="Card Image" className={styles.cardImage} />
    <div className={`${styles.card}`}>
      <h2 className={styles.cardTitle}>Art</h2>
    </div>
  </div>
  );
};
export default page
