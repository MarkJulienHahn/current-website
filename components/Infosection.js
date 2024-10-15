import { useState } from "react";
import styles from "../styles/Main.module.css";

import { PortableText } from "@portabletext/react";
import NewsletterMarquee from "./NewsletterMarquee";
import CurrentlyPreview from "./CurrentlyPreview";

import Link from "next/link";

const Infosection = ({
  english,
  editorial,
  about,
  programm,
  beteiligte,
  currently,
}) => {
  const [background, setBackground] = useState(true);
  const [background2, setBackground2] = useState(true);

  const [mobileText1, setMobileText1] = useState(false);
  const [mobileText2, setMobileText2] = useState(false);

  return (
    <div className={styles.infoWrapper}>
      <div className={"anchor"} id="program"></div>

      <div className={styles.infoTextHeadlineWrapper}>
        <h1 className={styles.infoHeadline}>
          {english ? (
            <PortableText value={editorial?.titleEnglish} />
          ) : (
            <PortableText value={editorial?.titleGerman} />
          )}
        </h1>
      </div>

      <div className={styles.infoTextWrapper}>
        <h2
          className={styles.infoTextHeadline}
          style={{ paddingLeft: "var(--spaceSmall)" }}
        >
          {english ? "About the Festival" : "Über das Festival"}
        </h2>
        <div className={styles.infoTextTwoColumn}>
          <div>
            {english ? (
              <PortableText value={about?.textEnglish} />
            ) : (
              <PortableText value={about?.textGerman} />
            )}
          </div>
        </div>
      </div>

      <div className={styles.infoTextWrapper} style={{ color: "rgb(0,2,28)" }}>
        <div className={styles.infoText}>
          <div className={styles.infoTextColumn}>
            <h1 className={styles.infoTextHeadline}>Open Call</h1>
            {english ? (
              <PortableText value={editorial?.textEnglish} />
            ) : (
              <PortableText value={editorial?.textGerman} />
            )}
          </div>
          <div className={styles.infoTextColumn}>
            <h1 className={styles.infoTextHeadline}>
              {english
                ? editorial?.callTitleEnglish
                : editorial?.callTitleGerman}
            </h1>
            {english ? (
              <PortableText value={editorial?.callForEntriesEnglish} />
            ) : (
              <PortableText value={editorial?.callForEntriesGerman} />
            )}
            <h1 className={styles.callButton}>
              <Link href="/open-call">Zum Open Call</Link>
            </h1>
          </div>
        </div>

        <div className={"anchorNewsletter"} id="newsletter"></div>
        <NewsletterMarquee english={english} />

        {/* <div className={styles.openCall__button}>
          <button>{english ? "submit now" : "jetzt einreichen"}</button>
        </div> */}
      </div>

      <div className={styles.mobileInfoText}>
        <div
          className={
            !mobileText1
              ? styles.mobileAccordionClosed
              : styles.mobileAccordionOpen
          }
          onClick={() => setBackground(!background)}
        >
          <span className={styles.infoTextHeadlineSection}>
            <h2>Editorial</h2>
            <h1>
              {english
                ? editorial?.textTitleEnglish
                : editorial?.textTitleGerman}
            </h1>
          </span>
          {english ? (
            <PortableText value={editorial?.textEnglish} />
          ) : (
            <PortableText value={editorial?.textGerman} />
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

      <CurrentlyPreview currently={currently} english={english} />

      <div className={"anchor"} id="about"></div>

      <div className={styles.mobileInfoText}>
        <div
          className={
            !mobileText2
              ? styles.mobileAccordionClosed
              : styles.mobileAccordionOpen
          }
          onClick={() => setBackground2(!background2)}
        >
          <p className={styles.mobileInfoHeading}>
            {english ? "About the Festival" : "Über das Festival"}
          </p>
          {english ? (
            <PortableText value={about?.textEnglish} />
          ) : (
            <PortableText value={about?.textGerman} />
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
