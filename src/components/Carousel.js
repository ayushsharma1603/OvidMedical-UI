"use client";
import { useState } from "react";
import styles from "./Carousel.module.css";

const slides = [
  {
    id: 1,
    video: "/video.mp4",
    title: "Transforming Healthcare and Beauty with Innovative Laser Solutions",
    desc: "Discover cutting-edge medical and esthetic laser solutions that deliver exceptional results. Our advanced technology ensures safety, precision, and effectiveness.",
    button: "Learn More",
  },
  {
    id: 2,
    video: "/video.mp4",
    title: "Transforming Healthcare and Beauty with Innovative Laser Solutions",
    desc: "Discover cutting-edge medical and esthetic laser solutions that deliver exceptional results. Our advanced technology ensures safety, precision, and effectiveness.",
    button: "Learn More",
  },
  {
    id: 3,
    video: "/video.mp4",
    title: "Transforming Healthcare and Beauty with Innovative Laser Solutions",
    desc: "Discover cutting-edge medical and esthetic laser solutions that deliver exceptional results. Our advanced technology ensures safety, precision, and effectiveness.",
    button: "Learn More",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className={`container-fluid ${styles.carousel}`}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${
            index === current ? styles.active : ""
          }`}
        >
          {/* Background video */}
          <video
            src={slide.video}
            autoPlay
            loop
            muted
            playsInline
            className={styles.video}
          />

          {/* Overlay text */}
          <div className={styles.overlay}>
            <h1>{slide.title}</h1>
            <p>{slide.desc}</p>
            <button>
              <span>{slide.button}</span>
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
        </div>
      ))}

      <div className={`container ${styles.carouselButtons}`}>
        {/* Slide Number */}
        <div className={styles.slideNumber}>
          {current + 1}/{slides.length}
        </div>

        {/* Controls */}
        <div className={styles.controls}>
          <button onClick={prevSlide}>
            {/* Left arrow */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M7.5 12c0 .19.07.38.22.53l7.5 7.5c.29.29.76.29 1.06 0 .29-.29.29-.76 0-1.06L9.31 12l6.97-6.97c.29-.29.29-.76 0-1.06-.29-.29-.76-.29-1.06 0l-7.5 7.5A.75.75 0 007.5 12z"
                fill="#4FC5F2"
              />
            </svg>
          </button>

          <button className={styles.nextBtn} onClick={nextSlide}>
            {/* Right arrow */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M16.5 12c0 .19-.07.38-.22.53l-7.5 7.5c-.29.29-.76.29-1.06 0-.29-.29-.29-.76 0-1.06L14.69 12 7.72 5.03c-.29-.29-.29-.76 0-1.06.29-.29.76-.29 1.06 0l7.5 7.5c.15.15.22.34.22.53z"
                fill="#4FC5F2"
              />
            </svg>

            {/* Loaders with opacity control */}
            <svg
              className={`${styles.load} ${
                 styles.visible 
              }`}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M22 22C22 10.9543 13.0457 2 2 2"
                stroke="#4FC5F2"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>

            <svg
              className={`${styles.load2} ${
                current >= 1 ? styles.visible : styles.hidden
              }`}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M22 22C22 10.9543 13.0457 2 2 2"
                stroke="#4FC5F2"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>

            <svg
              className={`${styles.load3} ${
                current >= 1 ? styles.visible : styles.hidden
              }`}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M22 22C22 10.9543 13.0457 2 2 2"
                stroke="#4FC5F2"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
            <svg
              className={`${styles.load4} ${
                current >= 2 ? styles.visible : styles.hidden
              }`}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M22 22C22 10.9543 13.0457 2 2 2"
                stroke="#4FC5F2"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
