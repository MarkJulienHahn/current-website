import { useState } from "react";

import styles from "../styles/Main.module.css";

const Team = ({ english, team }) => {
  const [background, setBackground] = useState(true);
  const [background2, setBackground2] = useState(false);

  return (
    <div className={styles.teamWrapper}>
      <div className={"anchor"} id="team"></div>
      <div className={styles.teamLeft}>
        <div
          className={styles.teamLeftHeadline}
          style={
            background ? { background: "var(--blue)" } : { background: "" }
          }
          onClick={() => setBackground(!background)}
        >
          <h1>{english ? "Curatorial Team" : "Kuratorisches Team"}</h1>
        </div>
        <div
          className={styles.teamSpace}
          style={
            background2 ? { background: "var(--green)" } : { background: "" }
          }
          onClick={() => setBackground2(!background2)}
        ></div>
      </div>
      <div
        className={styles.teamRight}
        style={background ? { background: "var(--blue)" } : { background: "" }}
        onClick={() => setBackground(!background)}
      >
        <ul>
          {team.map((entry, i) => (
            <li>
              <h1>{entry.teamEntry.name}</h1>
              <p>{english ? entry.teamEntry.positionEnglish : entry.teamEntry.positionGerman}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Team;
