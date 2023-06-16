import { useState, useEffect } from "react";

import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Nav.module.css";
import logo from "../public/images/Current-Logo.svg";
import logoMobile from "../public/images/Current-Logo-2023_mobile-01.svg";
import logo3 from "../public/images/Current-Logo-2023.svg";

const Nav = ({ english, setEnglish, colorArray, showNav }) => {
  const [index, setIndex] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [bottomRow, setBottomRow] = useState(null);

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
            showNav|| router.route != "/"
              ? { background: colorArray[index] }
              : { background: "transparent" }
          }
        >
          <div className={styles.navLogoWide}>
            <Link href="./">
              <h2>
                <span className={styles.outline}>
                  Current — Kunst und Urbaner Raum
                </span>{" "}
                14.–24.09.2023 / Stuttgart
              </h2>
            </Link>
          </div>
          <div className={styles.navLogoSmall}>
            <Link href="./">
              <h2>
                <span className={styles.outline}>
                  Current — Kunst und Urbaner Raum
                  <br />
                </span>
                14.–24.09.2023 / Stuttgart
              </h2>
            </Link>
          </div>
        </div>

        <div
          className={styles.navRight}
          style={
            showNav || router.route != "/"
              ? {
                  background:
                    index + 1 < colorArray.length
                      ? colorArray[index + 1]
                      : colorArray[0],
                }
              : { background: "transparent" }
          }
        >
          <div className={styles.menuSub} onMouseEnter={() => showMenuAgain()}>
            <div
              className={styles.menuSegment}
              style={
                bottomRow == "Programm"
                  ? { background: "var(--red)" }
                  : { background: "inherit" }
              }
              onClick={() => setBottomRow("Programm")}
            >
              <h2>{english ? "Program" : "Programm"}</h2>
              {bottomRow == "Programm" && (
                <div className={styles.bottomRow}>
                  <Link href="./kalender">
                    <h2>{english ? "Calendar" : "Kalender"}</h2>
                  </Link>

                  <Link href="./beteiligte">
                    <h2>{english ? "Participants" : "Beteiligte"}</h2>{" "}
                  </Link>
                </div>
              )}
            </div>

            <div
              className={styles.menuSegment}
              style={
                bottomRow == "Info"
                  ? { background: "var(--red)" }
                  : { background: "inherit" }
              }
              onClick={() => setBottomRow("Info")}
            >
              <Link href="./info">
                <h2>Info</h2>{" "}
              </Link>
              {bottomRow == "Info" && (
                <div className={styles.bottomRow}>
                  <a>
                    <h2>{english ? "About" : "Über"}</h2>
                  </a>
                  <a>
                    <h2>{english ? "Festival Team" : "Festivalteam"}</h2>
                  </a>
                  <a>
                    <h2>Current 21</h2>
                  </a>
                </div>
              )}
            </div>

            <div
              className={styles.menuSegment}
              style={
                bottomRow == "Currently"
                  ? { background: "var(--red)" }
                  : { background: "inherit" }
              }
              onClick={() => setBottomRow("Currently")}
            >
              <Link href="/currently">
                <h2>Currently</h2>
              </Link>
            </div>

            <div
              className={styles.menuSegment}
              style={
                bottomRow == "Presse"
                  ? { background: "var(--red)" }
                  : { background: "inherit" }
              }
              onClick={() => setBottomRow("Presse")}
            >
              <Link href="/presse">
                <h2>{english ? "Press" : "Presse"}</h2>
              </Link>
            </div>
            <h2
              className={styles.language}
              onClick={() => setEnglish(!english)}
            >
              DE/EN
            </h2>
          </div>
        </div>
      </div>

      {/* MOBILE */}

      {router.route == "/" ? (
        <div
          className={styles.mobileNavWrapper}
          style={
            showNav
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
            className={!showNav ? styles.mobileMenu : styles.mobileMenuRed}
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
            <Link href="/currently">Currently</Link>
          </div>
        </div>
      ) : (
        <div
          className={styles.mobileNavWrapper}
          style={{ background: "var(--red)" }}
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
            className={!showNav ? styles.mobileMenu : styles.mobileMenuRed}
            style={
              showMenu
                ? {
                    transform: "translateY(0vw)",
                    transition: "background-color 0.2s ease",
                    background: "var(--red)",
                  }
                : {
                    transform: "translateY(-1000px)",
                    transition: "background-color 0.2s ease",
                  }
            }
            onClick={() => setShowMenu(false)}
          >
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
            {/* <Link href="/currently">Currently</Link> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
