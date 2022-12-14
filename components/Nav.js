import { useState } from "react";

import Image from "next/image";

import styles from "../styles/Nav.module.css";
import logo from "../public/images/Current-Logo.svg";
import logoMobile from "../public/images/Current-Logo-2023_mobile-01.svg";

const Nav = ({ english, setEnglish, refInView }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className={styles.navWrapper}>
        <div
          className={styles.navLeft}
          style={
            refInView
              ? { background: "var(--green)" }
              : { background: "transparent" }
          }
        >
          <a href="#main">
            <Image src={logo} height={22.4} />
          </a>
        </div>
        <div
          className={styles.navRight}
          style={
            refInView
              ? { background: "var(--red)" }
              : { background: "transparent" }
          }
          onMouseEnter={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
        >
          <div className={styles.navRightTop}>
            <a onClick={() => setEnglish(!english)}>DE/EN</a>
            <span className={styles.menu}>
              <a>{english ? "Menu" : "Menü"}</a>
            </span>
          </div>
          <div
            className={styles.menuSub}
            style={
              !showMenu
                ? { transform: "translateX(100vw)" }
                : { transform: "translateX(0)" }
            }
          >
            {/* <a href="#">Programm</a> */}
            <a href="#about">{english ? "About" : "Über"}</a>
            <a href="#team">Team</a>
            <a href="#downloads">Downloads</a>
            <a href="#">Current 21</a>
          </div>
        </div>
      </div>

      {/* MOBILE */}

      <div
        className={styles.mobileNavWrapper}
        onClick={() => setShowMenu(!showMenu)}
        style={
          refInView
            ? { background: "var(--red)" }
            : { background: "transparent" }
        }
      >
        <div className={styles.mobileLogoWrapper}>
          <Image src={logoMobile} layout="responsive" />
        </div>
        <div className={styles.mobileMenuButton}>
          {english ? "Menu" : "Menü"}
        </div>
        <div
          className={!refInView ? styles.mobileMenu : styles.mobileMenuRed}
          style={
            showMenu
              ? { transform: "translateY(0vw)", transition: "background-color 0.2s ease" }
              : { transform: "translateY(calc(-60vw - 40px))", transition: "background-color 0.2s ease" }
          }
        >
          {/* <a href="#">Programm</a> */}
          <a href="#about">{english ? "About" : "Über"}</a>
          <a href="#team">Team</a>
          <a href="#downloads">Downloads</a>
          <a href="#">Current 21</a>
        </div>
      </div>
    </>
  );
};

export default Nav;
