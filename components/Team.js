import { useState } from "react";

import styles from "../styles/Main.module.css";

const Team = ({ english, team, downloads }) => {
  const [background, setBackground] = useState(true);

  return (
    <>
      <div className={"anchor"} id="team"></div>
      <div
        className={styles.teamWrapper}
        // style={background ? { background: "var(--blue)" } : { background: "" }}
        // onMouseEnter={() => setBackground(false)}
        // onMouseLeave={() => setBackground(true)}
      >
        <h2 className={styles.teamHeadline}>Jobs</h2>

        <div className={styles.downloadContent}>
          {downloads.map((entry, i) => (
            <div key={i} className={styles.downloadItem}>
              <h1>{english ? entry.nameEN : entry.nameDE}</h1>
              <div>
                {entry.download.map((item, j) => (
                  <a
                    href={item.file.url}
                    target="_blank"
                    rel="noreferrer"
                    key={j}
                  >
                    <div className={styles.downloadRow}>
                      <p className={styles.fileExtension}>
                        ({item.file.extension})
                      </p>
                      <p>
                        {english ? item.beschreibungEN : item.beschreibungDE}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* <ul>
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
        </ul> */}
      </div>
    </>
  );
};

export default Team;
