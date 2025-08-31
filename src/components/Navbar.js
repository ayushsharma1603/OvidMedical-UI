"use client"
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const makeActive = (e) => {
    e.preventDefault();
    const activeA = document.querySelector(`.${styles.active}`);
    if (activeA) activeA.classList.remove(`${styles.active}`);
    e.target.parentElement.classList.add(`${styles.active}`);
  };

  // ✅ Disable scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <nav className={`container-fluid ${styles.navbar}`}>
      <div className={`container ${styles.navDiv}`}>
        <div className={styles.logoContainer}>
          <img src="/NavLogo.svg" />
        </div>

        {/* Hamburger Button */}
        <button
          className={styles.toggler}
          onClick={() => setIsOpen(true)}
          aria-label="Open Menu"
        >
          ☰
        </button>

        {/* ✅ Overlay Background */}
        {isOpen && <div className={styles.overlayBg} onClick={() => setIsOpen(false)}></div>}

        {/* Navbar Links */}
        <div className={`${styles.navA} ${isOpen ? styles.showMenu : ""}`}>
          {/* Close Button */}
          <button
            className={styles.closeBtn}
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            ✖
          </button>

          {/* Menu Items */}
          <div className={`${styles.anchor} ${styles.active}`}><a href="#" onClick={makeActive}>Home</a></div>
          <div className={styles.anchor}><a href="#" onClick={makeActive}>Products</a></div>
          <div className={styles.anchor}><a href="#" onClick={makeActive}>News</a></div>
          <div className={styles.anchor}><a href="#" onClick={makeActive}>Customer References</a></div>

          {/* Mobile Contact Button */}
          <button className={`${styles.mobileButton} ${styles.button}`}>
            Contact Us
          </button>
        </div>

        {/* Desktop Contact Button */}
        <button className={styles.button}>Contact Us</button>
      </div>
    </nav>
  );
};

export default Navbar;
