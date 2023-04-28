import { useState } from "react";
import styles from "../styles/Main.module.css";

import { PortableText } from "@portabletext/react";
import NewsletterMarquee from "./NewsletterMarquee";

const Infosection = ({ english, intro, about }) => {
  const [background, setBackground] = useState(true);
  const [background2, setBackground2] = useState(true);
  const [background3, setBackground3] = useState(true);

  const [mobileText1, setMobileText1] = useState(false);
  const [mobileText2, setMobileText2] = useState(false);

  return (
    <div className={styles.infoWrapper}>
      <div className={"anchor"} id="program"></div>

      <div
        className={styles.infoTextHeadlineWrapper}
        style={{ background: background ? "var(--red)" : "" }}
        onMouseEnter={() => setBackground(false)}
        onMouseLeave={() => setBackground(true)}
      >
        <h1 className={styles.infoHeadline}>
          {english ? (
            <PortableText value={intro.titleEnglish} />
          ) : (
            <PortableText value={intro.titleGerman} />
          )}
        </h1>
      </div>
      <div className={"anchorNewsletter"} id="newsletter"></div>
      <NewsletterMarquee english={english} />

      <div
        className={styles.infoTextWrapper}
        style={{ background: background2 ? "var(--blue)" : "" }}
        onMouseEnter={() => setBackground2(false)}
        onMouseLeave={() => setBackground2(true)}
      >
        <div className={styles.infoText}>
          {english ? (
            <PortableText value={intro.textEnglish} />
          ) : (
            <PortableText value={intro.textGerman} />
          )}
        </div>
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
              ? "Read more..."
              : "Mehr lesen.."
            : english
            ? "Show less..."
            : "Weniger lesen.."}
        </div>
      </div>

      <div className={"anchor"} id="about"></div>

      <div
        className={styles.infoTextWrapper}
        style={{ background: background3 ? "var(--pink)" : "" }}
        onMouseEnter={() => setBackground3(false)}
        onMouseLeave={() => setBackground3(true)}
      >
        <h1 className={styles.infoTextHeadline}>
          {english ? "About the Festival" : "Über das Festival"}
        </h1>
        <div className={styles.infoText}>
          <div>
            {english ? (
              <PortableText value={about.textEnglish} />
            ) : (
              <PortableText value={about.textGerman} />
            )}
          </div>
        </div>
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
              ? "Read more..."
              : "Mehr lesen.."
            : english
            ? "Show less..."
            : "Weniger lesen.."}
        </div>
      </div>
    </div>
  );
};

export default Infosection;
