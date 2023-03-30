import { useState } from "react";
import { PortableText } from "@portabletext/react";
import styles from "../styles/Main.module.css";

const Presse = ({ english, presse }) => {
  const [background, setBackground] = useState(true);

  console.log(presse[0]);

  return (
    <div
      onMouseEnter={() => setBackground(false)}
      onMouseLeave={() => setBackground(true)}
    >
      {presse.length != 100 ? (
        <>
          <div className={"anchor"} id="presse"></div>
          <div style={{ display: "flex" }}>
            <div
              className={styles.infoSubHeadlineDownloads}
              style={{ background: background ? "var(--red)" : "" }}
            >
              <h1>Presse</h1>
              <h2 className={styles.presseSubheadline}>
                {english ? presse[0].headlineEnglish : presse[0].headlineGerman}
              </h2>
            </div>
          </div>

          <div
            className={styles.presseContent}
            style={{ background: background ? "var(--red)" : "" }}
          >
            <div className={styles.presseText}>
              {english ? (
                <PortableText value={presse[0].textEnglish} />
              ) : (
                <PortableText value={presse[0].textGerman} />
              )}
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Presse;
