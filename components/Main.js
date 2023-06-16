import React from "react";

import Infosection from "../components/Infosection";
import Marquee from "react-fast-marquee";
import Team from "../components/Team";
import Downloads from "../components/Downloads";
import Logos from "../components/Logos";

import styles from "../styles/Main.module.css";
import Presse from "./Presse";

const Main = ({
  english,
  editorial,
  about,
  team,
  programm,
  downloads,
  currently,
  logos,
  marquee,
  beteiligte,
}) => {
  return (
    <div>
      <Infosection
        english={english}
        editorial={editorial}
        about={about}
        programm={programm}
        beteiligte={beteiligte}
        currently={currently}
      />

      {/* <a href={marquee.link} target="_blank" rel="noreferrer">
        <Marquee
          gradient={false}
          direction={"right"}
          className={styles.marquee}
        >
          <div style={{ display: "flex" }}>
            <h1>{english ? marquee.textEnglish : marquee.textGerman}</h1>
            <h1>{english ? marquee.textEnglish : marquee.textGerman}</h1>
            <h1>{english ? marquee.textEnglish : marquee.textGerman}</h1>
            <h1>{english ? marquee.textEnglish : marquee.textGerman}</h1>
            <h1>{english ? marquee.textEnglish : marquee.textGerman}</h1>
            <h1>{english ? marquee.textEnglish : marquee.textGerman}</h1>
            <h1>{english ? marquee.textEnglish : marquee.textGerman}</h1>
            <h1>{english ? marquee.textEnglish : marquee.textGerman}</h1>
          </div>
        </Marquee>
      </a> */}

      <Team english={english} team={team} downloads={downloads}/>
      {/* <Presse english={english} presse={presse}/> */}
      {/* <Downloads english={english} downloads={downloads} /> */}
      <Logos english={english} logos={logos} />
    </div>
  );
};

export default Main;
