import Marquee from "react-fast-marquee";

import Link from "next/link";

import LogosPresse from "./LogosPresse";
import Footer from "./Footer";
import GradientCanvas from "./GradientCanvas";
import WeatherMap from "./WeatherMap";

import useWindowDimensions from "../hooks/useWindowDimensions";

import styles from "../styles/Main.module.css";
import { PortableText } from "@portabletext/react";

const Info = ({ info, english, logos, impressum }) => {
  const { width } = useWindowDimensions();

  return (
    <>
      <div className={"particlesWrapper"}>
        <GradientCanvas />
        <WeatherMap />
      </div>
      <div className={styles.infoPageWrapper}>
        <div className={styles.infoTextWrapper} id="about">
          <div
            className={styles.infoTextInfo}
            style={{ background: "transparent", color: "#ddd" }}
          >
            <h2 className={styles.infoTextHeadline}>
              {english ? info.subtitleEnglish : info.subtitleGerman}
            </h2>
            <div className={styles.twoColumn}>
              {english ? (
                <PortableText value={info.textEnglish} />
              ) : (
                <PortableText value={info.textGerman} />
              )}
            </div>
          </div>
        </div>

        <div
          className={styles.mobileInfoText}
          style={{ paddingTop: "calc(2*var(--space))" }}
        >
          <h1
            className={styles.infoTextHeadline}
            style={{ paddingBottom: "5px", paddingLeft: "0" }}
          >
            {info.title}
          </h1>
          <h2 className={styles.infoTextHeadline} style={{ paddingLeft: "0" }}>
            {english ? info.subtitleEnglish : info.subtitleGerman}
          </h2>
          <div style={{ paddingBottom: "var(--space)" }}>
            {english ? (
              <PortableText value={info.textEnglish} />
            ) : (
              <PortableText value={info.textGerman} />
            )}
          </div>
        </div>

        <div className={styles.infoTeamWrapper} id="team">
          <h1
            className={styles.infoTextHeadline}
            style={{ padding: "0 0 5px var(--spaceSmall)" }}
          >
            Team
          </h1>
          <div className={styles.teamList}>
            {info.team.map((entry, i) => (
              <div className={styles.teamEntry}>
                <h2>{entry.name}</h2>

                <p>{english ? entry.positionEN : entry.positionDE}</p>
                {entry.email && (
                  <a href={`mailto:${entry.email}`}> {entry.email}</a>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.pastFestivalLinksWrapper}>
          <div className={styles.pastFestivalLink} style={{ background: "transparent", color: "#ddd" }}>
            <a
              href="http://2021.current-stuttgart.de/de"
              target="_blank"
              rel="noreferrer"
              id="current21"
            >
              {english
                ? "Click for Current 2021 →"
                : "Klick hier für Current 2021 →"}
            </a>
          </div>
          <div className={styles.pastFestivalLink}>
            <a
              href="http://2023.current-stuttgart.de/de"
              target="_blank"
              rel="noreferrer"
              id="current21"
            >
              {english
                ? "Click for Current 2023 →"
                : "Klick hier für Current 2023 →"}
            </a>
          </div>
        </div>
        <div className={styles.infopageLogosWrapper}>
          <LogosPresse english={english} logos={logos[0].logosFoerderer} />
        </div>
        <Footer english={english} impressum={impressum} />
      </div>
    </>
  );
};

export default Info;
