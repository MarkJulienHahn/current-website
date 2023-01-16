import { useState } from "react";

import styles from "../styles/Main.module.css";

const Team = ({ english, team }) => {
  const [background, setBackground] = useState(true);

  return (
    <>
      {" "}
      <div className={"anchor"} id="team"></div>
      <div
        className={styles.teamWrapper}
        style={background ? { background: "var(--blue)" } : { background: "" }}
        onMouseEnter={() => setBackground(false)}
        onMouseLeave={() => setBackground(true)}
      >
        <h1 className={styles.teamHeadline}>
          {english ? "Curatorial Team" : "Kuratorisches Team"}
        </h1>

        <ul>
          {team.map((entry, i) => (
            <li>
              <h1>{entry.teamEntry.name}</h1>
              <p>
                {english
                  ? entry.teamEntry.positionEnglish
                  : entry.teamEntry.positionGerman}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Team;
