import React from "react";

import Infosection from "../components/Infosection";
import Marquee from "react-fast-marquee";
import Team from "../components/Team";
import Downloads from "../components/Downloads";
import Logos from "../components/Logos";

import styles from "../styles/Main.module.css";

const Main = ({ english, intro, about, team, downloads, logos, marquee }) => {
  return (
    <div>
      <Infosection english={english} intro={intro} about={about} />
      <Marquee gradient={false}>
        <a href={marquee.link} target="_blank" rel="noreferrer">
          <div className={styles.marquee}>
            <h1>{english ? marquee.textEnglish : marquee.textGerman}</h1>
            <h1>{english ? marquee.textEnglish : marquee.textGerman}</h1>
            <h1>{english ? marquee.textEnglish : marquee.textGerman}</h1>
            <h1>{english ? marquee.textEnglish : marquee.textGerman}</h1>
            <h1>{english ? marquee.textEnglish : marquee.textGerman}</h1>
            <h1>{english ? marquee.textEnglish : marquee.textGerman}</h1>
            <h1>{english ? marquee.textEnglish : marquee.textGerman}</h1>
            <h1>{english ? marquee.textEnglish : marquee.textGerman}</h1>
          </div>
        </a>
      </Marquee>
      <Team english={english} team={team} />
      <Downloads english={english} downloads={downloads} />
      <Logos english={english} logos={logos} />
    </div>
  );
};

export default Main;
