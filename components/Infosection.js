import { useState } from "react";
import styles from "../styles/Main.module.css";

import { PortableText } from "@portabletext/react";

const Infosection = ({ english, intro, about }) => {
  const [background, setBackground] = useState(false);
  const [background2, setBackground2] = useState(true);

  const [mobileText1, setMobileText1] = useState(false);
  const [mobileText2, setMobileText2] = useState(false);

  return (
    <div className={styles.infoWrapper}>
      <h1
        className={styles.infoHeadline}
        style={{
          background: background ? "var(--red)" : "",
          color: background ? "var(--blue)" : "",
        }}
        onClick={() => setBackground(!background)}
      >
        {english ? (
          <PortableText value={intro.titleEnglish} />
        ) : (
          <PortableText value={intro.titleGerman} />
        )}
      </h1>

      <div
        className={styles.infoText}
        style={{ background: background ? "var(--red)" : "" }}
        onClick={() => setBackground(!background)}
      >
        {english ? (
          <PortableText value={intro.textEnglish} />
        ) : (
          <PortableText value={intro.textGerman} />
        )}
      </div>

      <div
        className={styles.mobileInfoText}
        style={{ background: background ? "var(--red)" : "" }}
      >
        <div
          className={
            !mobileText1
              ? styles.mobileAccordionClosed
              : styles.mobileAccordionOpen
          }
          onClick={() => setBackground(!background)}
        >
          {english ? (
            <PortableText value={intro.textEnglish} />
          ) : (
            <PortableText value={intro.textGerman} />
          )}
        </div>
        <div
          className={styles.mehrLesen}
          onClick={() => setMobileText1(!mobileText1)}
        >
          {!mobileText1
            ? english
              ? "Read More..."
              : "Mehr lesen.."
            : english
            ? "Read More..."
            : "Mehr lesen.."}
        </div>
      </div>

      <div className={"anchor"} id="about"></div>
      <div style={{ display: "flex" }}>
        <div
          className={styles.infoSubHeadline}
          style={{ background: background2 ? "var(--pink)" : "" }}
          onClick={() => setBackground2(!background2)}
        >
          <h1>{english ? "About the Festival" : "Über das Festival"}</h1>
        </div>
        <div
          className={styles.space}
          style={{ background: background ? "var(--red)" : "" }}
          onClick={() => setBackground(!background)}
        ></div>
      </div>

      <div
        className={styles.infoText}
        style={{ background: background2 ? "var(--pink)" : "" }}
        onClick={() => setBackground2(!background2)}
      >
        {english ? (
          <PortableText value={about.textEnglish} />
        ) : (
          <PortableText value={about.textGerman} />
        )}
      </div>

      <div
        className={styles.mobileInfoText}
        style={{ background: background2 ? "var(--pink)" : "" }}
      >
        <div
          className={
            !mobileText2
              ? styles.mobileAccordionClosed
              : styles.mobileAccordionOpen
          }
          onClick={() => setBackground2(!background2)}
        >
          {english ? (
            <PortableText value={about.textEnglish} />
          ) : (
            <PortableText value={about.textGerman} />
          )}
        </div>
        <div
          className={styles.mehrLesen}
          onClick={() => setMobileText2(!mobileText2)}
        >
          {!mobileText2
            ? english
              ? "Read More..."
              : "Mehr lesen.."
            : english
            ? "Read More..."
            : "Mehr lesen.."}
        </div>
      </div>
    </div>
  );
};

export default Infosection;
