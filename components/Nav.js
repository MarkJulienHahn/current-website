import { useState, useEffect } from "react";

import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Nav.module.css";
import logo from "../public/images/Current-Logo.svg";
import logoMobile from "../public/images/Current-Logo-2023_mobile-01.svg";
import logo3 from "../public/images/Current-Logo-2023.svg";

const Nav = ({ english, setEnglish, refInView, colorArray }) => {
  const [index, setIndex] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  const router = useRouter();

  const showMenuAgain = () => {
    clearTimeout(hideMenu);
    setShowMenu(true);
  };

  const hideMenu = () => {
    setTimeout(() => setShowMenu(false), 5000);
  };

  useEffect(() => {
    setIndex(Math.floor(Math.random() * colorArray.length));
  }, []);

  return (
    <>
      <div className={styles.navWrapper}>
        <div
          className={styles.navLeft}
          style={
            refInView || router.route != "/"
              ? { background: colorArray[index] }
              : { background: "transparent" }
          }
        >
          <div className={styles.navLogoWide}>
            <Link href="./">
              <Image alt="Current Festival's Logo" src={logo} height={22.4} />
            </Link>
          </div>
          <div className={styles.navLogoSmall}>
            <a href="#main">
              <Image
                alt="Current Festival's Logo"
                src={logoMobile}
                height={50}
              />
            </a>
          </div>
        </div>
        <div
          className={styles.navRight}
          style={
            refInView || router.route != "/"
              ? {
                  background:
                    index + 1 < colorArray.length
                      ? colorArray[index + 1]
                      : colorArray[0],
                }
              : { background: "transparent" }
          }
        >
          {router.route == "/" ? (
            <div
              className={styles.menuSub}
              onMouseEnter={() => showMenuAgain()}
            >
              <a href="./#program">
                <h2>{english ? "Program" : "Programm"}</h2>
              </a>
              <a href="#about">
                <h2>{english ? "About" : "Über"}</h2>
              </a>
              <a href="#team">
                <h2>Team</h2>
              </a>
              {/* <a href="#downloads">Downloads</a> */}
              <Link href="/currently">
                <h2>Currently</h2>
              </Link>
            </div>
          ) : (
            <div className={styles.menuSub}>
              <Link href="./#program">
                <h2>{english ? "Program" : "Programm"}</h2>
              </Link>
              <Link href="./#about">
                <h2>{english ? "About" : "Über"}</h2>
              </Link>
              <Link href="./#team">
                <h2>Team</h2>
              </Link>
              {/* <a href="#downloads">Downloads</a> */}
              <Link href="/currently">
                <h2>Currently</h2>
              </Link>
            </div>
          )}

          <div className={styles.navRightTop}>
            <a className={styles.menu} onClick={() => setEnglish(!english)}>
              <h2>DE/EN</h2>
            </a>
          </div>
        </div>
      </div>

      {/* MOBILE */}

      <div
        className={styles.mobileNavWrapper}
        style={
          refInView
            ? { background: "var(--red)" }
            : { background: "transparent" }
        }
      >
        <div className={styles.mobileLogoWrapper}>
          <Image
            alt="Current Festival's Logo"
            src={logo3}
            layout="responsive"
          />
        </div>
        <div className={styles.mobileMenuButton}>
          <div onClick={() => setEnglish(!english)}>EN/DE</div>
          <div onClick={() => setShowMenu(!showMenu)}>
            {english ? "Menu" : "Menü"}
          </div>
        </div>
        <div
          className={!refInView ? styles.mobileMenu : styles.mobileMenuRed}
          style={
            showMenu
              ? {
                  transform: "translateY(0vw)",
                  transition: "background-color 0.2s ease",
                }
              : {
                  transform: "translateY(-1000px)",
                  transition: "background-color 0.2s ease",
                }
          }
          onClick={() => setShowMenu(false)}
        >
          <a href="#program">{english ? "Program" : "Programm"}</a>
          <a href="#about">{english ? "About" : "Über"}</a>
          <a href="#team">Team</a>
          {/* <a href="#downloads">Downloads</a> */}
          {/* <Link href="/currently">Currently</Link> */}
        </div>
      </div>
    </>
  );
};

export default Nav;
