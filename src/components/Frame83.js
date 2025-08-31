"use client";
import ContactUsBtn from "./ContactUsBtn";
import styles from "./Frame83.module.css";
import Image from "next/image";
import LearnMoreBtn from "./LearnMoreBtn";
const Frame83 = () => {
  return (
    <div className="container-fluid">
      
      <div className={`container ${styles.frame83}`}>
        <div className={`${styles.frame82}`}>
          <div className={`${styles.frame26}`}>
            <p>Innovative</p>
            <h1>
              Revolutionary Laser Technology for Advanced Medical Solutions
            </h1>
          </div>
          <div className={`${styles.frame25}`}>
            <p>
              Discover the cutting-edge laser technology used in Ovid Medical's
              advanced medical products. Our innovative solutions provide
              effective and reliable treatments for healthcare and beauty
              professionals. With state-of-the-art technology and a commitment
              to excellence, we deliver exceptional results for our clients.
            </p>
            <div className={styles.btnsDiv}>
              <button className={styles.learnBtn}>
                <span>Learn More</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.18143 0.36398L3.18143 2.14589L10.3091 2.14589L-0.000549486 12.4555L1.27224 13.7283L11.5819 3.41868L11.5819 10.5463H13.3638L13.3638 0.36398L3.18143 0.36398Z"
                    fill="white"
                  />
                </svg>
              </button>

              <button className={`${styles.btn}`}>
                Contact Us
                <svg
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.33358 5.53176L1.99343 0.191706C1.86992 0.068097 1.70504 0 1.52924 0C1.35343 0 1.18856 0.068097 1.06504 0.191706L0.671779 0.584873C0.415879 0.841066 0.415879 1.25745 0.671779 1.51326L5.15604 5.99751L0.666803 10.4867C0.543292 10.6104 0.475098 10.7751 0.475098 10.9508C0.475098 11.1267 0.543292 11.2915 0.666803 11.4152L1.06007 11.8083C1.18368 11.9319 1.34846 12 1.52426 12C1.70006 12 1.86494 11.9319 1.98845 11.8083L7.33358 6.46336C7.45738 6.33936 7.52538 6.1738 7.52499 5.99781C7.52538 5.82112 7.45738 5.65566 7.33358 5.53176Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
          width={1600}
          height={860}
            src="/eyeImg.svg" // your image path in public/
            alt="Hero Image"
            className={styles.img1} // optional extra styling
            priority // for faster loading if above the fold
          />
        </div>
      </div>
    </div>
  );
};

export default Frame83;
