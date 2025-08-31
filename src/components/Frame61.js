import styles from "./Frame61.module.css";
import LearnMoreBtn from "./LearnMoreBtn";
import Image from "next/image";
const Frame61 = () => {
  return (
    <div className={`container-fluid ${styles.frame61}`}>
      <div className={`container ${styles.frame60}`}>
        <h1>Explore Our Cutting-Edge Laser Solutions</h1>
        <p>
          Discover the Future of Medical and Aesthetic Laser Technology. From
          Precision to Innovation, Uncover Your Next Treatment Solution.
        </p>
      </div>
      <div className={`row ${styles.row1} ${styles.firstRow}`}>
        <div className={`col-md-6 col-12 ${styles.item}`}>
          <div>
            <h3>FRx CO2 Intenz</h3>
            <p>FRx CO2 Intenz: Advanced Skin Resurfacing Laser.</p>
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
          </div>
          <div className={` ${styles.pCard1}`}>
            <Image
              src="/pCard1.svg" // 👈 your image path in public/
              alt="Product Card 1"
              width={402} // original width
              height={484} // original height
              className={styles.pCardImg}
              priority // if it's above the fold
            />
          </div>
        </div>
        <div className={`col-md-6 col-12 ${styles.item} ${styles.itemG}`}>
          <div>
            <h3>PicoStar laser system</h3>
            <p>Advanced Laser for Tattoo Removal & Skin Rejuvenation.</p>
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
          </div>
          <div className={styles.pCard1}>
            <Image
              src="/pcard2.svg" // 👈 your image path in public/
              alt="Product Card 1"
              width={402} // original width
              height={484} // original height
              className={styles.pCardImg}
              priority // if it's above the fold
            />
          </div>
        </div>
      </div>

      <div className={`row ${styles.row1}`}>
        <div className={`col-md-6 col-12 ${styles.item} ${styles.itemG}`}>
          <div>
            <h3>Neolab laser</h3>
            <p>MedArt NeoNail: Diode Laser Treatment for Nail Fungus.</p>
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
          </div>
          <div className={` ${styles.pCard1}`}>
            <Image
              src="/pcard3.svg" // 👈 your image path in public/
              alt="Product Card 1"
              width={402} // original width
              height={484} // original height
              className={styles.pCardImg}
              priority // if it's above the fold
            />
          </div>
        </div>
        <div className={`col-md-6 col-12 ${styles.item}`}>
          <div>
            <h3>Patient monitors</h3>
            <p>Patient Monitor: Continuous Vital Signs Display.</p>
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
          </div>
          <div className={styles.pCard1}>
            <Image
              src="/pcard4.svg" // 👈 your image path in public/
              alt="Product Card 1"
              width={402} // original width
              height={484} // original height
              className={styles.pCardImg}
              sizes="(max-width: 768px) 100vw, 
               (max-width: 1200px) 50vw, 
               402px"
              priority // if it's above the fold
            />
          </div>
        </div>
      </div>

      <div className={`row ${styles.row1}`}>
        <div className={`col-md-6 col-12 ${styles.item}`}>
          <div>
            <h3>MedArt Smartsculpt device</h3>
            <p>MedArt Smartsculpt: Minimally Invasive Body Contouring Laser.</p>
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
          </div>
          <div className={styles.pCard1}>
            <Image
              src="/pcard5.svg" // 👈 your image path in public/
              alt="Product Card 1"
              width={402} // original width
              height={484} // original height
              className={styles.pCardImg}
              priority // if it's above the fold
            />
          </div>
        </div>
        <div className={`col-md-6 col-12 ${styles.item} ${styles.itemG}`}>
          <div>
            <h3>PicoStar laser system</h3>
            <p>Advanced Laser for Tattoo Removal & Skin Rejuvenation.</p>
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
          </div>
          <div className={` ${styles.pCard1}`}>
            <Image
              src="/pcard6.svg" // 👈 your image path in public/
              alt="Product Card 1"
              width={174} // original width
              height={391.01123046875} // original height
              className={styles.pCardImg}
              priority // if it's above the fold
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame61;
