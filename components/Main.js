import React from "react";

import Infosection from "../components/Infosection";
import Marquee from "react-fast-marquee";
import Team from "../components/Team";
import Downloads from "../components/Downloads";
import Logos from "../components/Logos"

import styles from "../styles/Main.module.css";

const Main = ({ english, intro, about, team, downloads, logos }) => {
  return (
    <div>
      <Infosection english={english} intro={intro} about={about} />
      <Marquee gradient={false}>
        <div className={styles.marquee}>
          <h1>{english ? "Click here for Current 2021 → ": "Hier gehts zum Current 2021 → "}</h1>
          <h1>{english ? "Click here for Current 2021 → ": "Hier gehts zum Current 2021 → "}</h1>
          <h1>{english ? "Click here for Current 2021 → ": "Hier gehts zum Current 2021 → "}</h1>
          <h1>{english ? "Click here for Current 2021 → ": "Hier gehts zum Current 2021 → "}</h1>
          <h1>{english ? "Click here for Current 2021 → ": "Hier gehts zum Current 2021 → "}</h1>
        </div>
      </Marquee>
      <Team english={english} team={team} />
      <Downloads english={english} downloads={downloads} />
      <Logos english={english} logos={logos}/>
    </div>
  );
};

export default Main;
