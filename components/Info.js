import Marquee from "react-fast-marquee";

import LogosPresse from "./LogosPresse";
import Footer from "./Footer";

import useWindowDimensions from "../hooks/useWindowDimensions";

import styles from "../styles/Main.module.css";
import { PortableText } from "@portabletext/react";

const Info = ({ info, english, logos, impressum }) => {
  const { width } = useWindowDimensions();

  return (
    <div className={styles.infoPageWrapper}>
      <div className={styles.infoTextWrapper} id="about">
        <h1
          className={styles.infoTextHeadline}
          style={{ paddingBottom: "5px" }}
        >
          {info.title}
        </h1>
        <h2 className={styles.infoTextHeadline}>
          {english ? info.subtitleEnglish : info.subtitleGerman}
        </h2>
        <div className={styles.infoText}>
          <div>
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
          style={{ paddingBottom: "5px" }}
        >
          Team
        </h1>
        <div className={styles.teamList}>
          {info.team.map((entry, i) => (
            <div className={styles.teamEntry}>
              <h2>{entry.name}</h2>
              <p>{english ? entry.positionEN : entry.positionDE}</p>
            </div>
          ))}
        </div>
      </div>

      <a
        href="http://2021.current-stuttgart.de/de"
        target="_blank"
        rel="noreferrer"
        id="current21"
      >
        <Marquee
          gradient={false}
          style={{
            background: width > 700 ? "var(--red)" : "var(--pink)",
            padding: "calc(2*var(--spaceSmall)) 0",
          }}
        >
          <div className={styles.marqueeInner}>
            <h1>
              {english
                ? "Click here for Current 2021 → "
                : "Klick hier für Current 2021 → "}
            </h1>
            <h1>
              {english
                ? "Click here for Current 2021 → "
                : "Klick hier für Current 2021 → "}
            </h1>
            <h1>
              {english
                ? "Click here for Current 2021 → "
                : "Klick hier für Current 2021 → "}
            </h1>
            <h1>
              {english
                ? "Click here for Current 2021 → "
                : "Klick hier für Current 2021 → "}
            </h1>
          </div>
        </Marquee>
      </a>
      <div className={styles.infopageLogosWrapper}>
        <LogosPresse english={english} logos={logos} />
      </div>
      <Footer english={english} impressum={impressum} />
    </div>
  );
};

export default Info;
