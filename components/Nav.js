import { useState, useEffect } from "react";

import { useRouter } from "next/router";
import Link from "next/link";

import { Cross as Hamburger } from "hamburger-react";
import styles from "../styles/Nav.module.css";

const Nav = ({ english, setEnglish, colorArray, showNav, setShowNav }) => {
  const [index, setIndex] = useState(null);
  const [bottomRow, setBottomRow] = useState(null);

  const [menuExtended, setMenuExtended] = useState(true);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const router = useRouter();

  const openMenu = () => {
    setShowNav(true);
    setMenuExtended(true);
  };

  const closeMenu = () => {
    setShowNav(false);
    setMenuExtended(false);
  };

  useEffect(() => {
    setIndex(Math.floor(Math.random() * colorArray.length));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    scrollPosition > 10 && !showNav && setMenuExtended(false);
    scrollPosition < 10 &&
      !showNav &&
      router.route == "/" &&
      setMenuExtended(true);
  }, [scrollPosition, showNav]);

  useEffect(() => {
    router.route == "/" ? setMenuExtended(true) : setMenuExtended(false);
  }, [router]);

  return (
    <>
      <div className={styles.navWrapper}>
        <div
          className={styles.navLeft}
          style={{ background: colorArray[index] }}
        >
          <div className={styles.navLogoWide}>
            <Link href="./">
              <h2>
                <span className={styles.outline}>
                  Current — Kunst und Urbaner Raum
                </span>
                <span>
                  <br /> 14.–24.09.2023 / Stuttgart
                </span>
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
          style={{
            background: index < 4 ? colorArray[index + 1] : colorArray[0],
          }}
        >
          <div
            className={styles.menuSub}
          >
            <div
              className={styles.menuSegment}
              onClick={() => setBottomRow("Programm")}
            >
              <Link href="./kalender">
                <h2>{english ? "Program" : "Programm"}</h2>
              </Link>
              {bottomRow == "Programm" && (
                <div className={styles.bottomRow}>
                  <Link href="./kalender">
                    <h2>{english ? "Calendar" : "Kalender"}</h2>
                  </Link>

                  <Link href="./beteiligte">
                    <h2>{english ? "Participants" : "Beteiligte"}</h2>
                  </Link>
                </div>
              )}
            </div>

            <div
              className={styles.menuSegment}
              onClick={() => setBottomRow("Info")}
            >
              <Link href="./info">
                <h2>Info</h2>
              </Link>
              {bottomRow == "Info" && (
                <div className={styles.bottomRow}>
                  <Link href="./info">
                    <h2>{english ? "About" : "Über"}</h2>
                  </Link>
                  <Link href="./info/#team">
                    <h2>{english ? "Festival Team" : "Festivalteam"}</h2>
                  </Link>
                  <Link href="info/#current21">
                    <h2>Current 21</h2>
                  </Link>
                </div>
              )}
            </div>

            <div
              className={styles.menuSegment}
              onClick={() => setBottomRow("Currently")}
            >
              <Link href="/currently">
                <h2>Currently</h2>
              </Link>
            </div>

            <div
              className={styles.menuSegment}
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

      <div
        className={styles.mobileNavWrapper}
        style={{ height: menuExtended ? "73px" : "30px" }}
      >
        <div
          className={styles.mobileLogoWrapper}
          onClick={() => setShowNav(false)}
        >
          <Link href="./">
            <h2>
              <span className={styles.outline}>
                Current
                <br />
                <span style={{ display: menuExtended ? "" : "none" }}>
                  Kunst und Urbaner Raum
                  <br /> 14.–24.09.2023 / Stuttgart
                </span>
              </span>
            </h2>
          </Link>
        </div>

        <div className={styles.mobileMenuButton}>
          <Hamburger
            toggled={showNav}
            onToggle={showNav ? closeMenu : openMenu}
            size={20}
          />
          <div
            className={styles.mobileLanguage}
            onClick={() => setEnglish(!english)}
          >
            {english ? "DE" : "EN"}
          </div>
        </div>

        {showNav && (
          <div
            className={styles.mobileMenu}
            style={
              showNav
                ? {
                    transform: "translateY(0vw)",
                    transition: "background-color 0.2s ease",
                  }
                : {
                    transform: "translateY(-1000px)",
                    transition: "background-color 0.2s ease",
                  }
            }
            onClick={() => setShowNav(false)}
          >
            <a href="#program">{english ? "Program" : "Programm"}</a>
            <Link className={styles.eingerueckt} href="./kalender">
              {english ? "Calendar" : "Kalender"}
            </Link>
            <Link className={styles.eingerueckt} href="./beteiligte">
              {english ? "Participants" : "Beteiligte"}
            </Link>
            <a>Info</a>
            <Link className={styles.eingerueckt} href="./info">
              {english ? "About" : "Über"}
            </Link>
            <Link className={styles.eingerueckt} href="./team">
              Team
            </Link>
            <Link href="/currently">Currently</Link>
            <Link href="/press">{english ? "Press" : "Presse"}</Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
