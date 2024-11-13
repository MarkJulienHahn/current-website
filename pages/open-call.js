import client from "../client";

import { useState } from "react";

import ConfirmationPopup from "../components/ConfirmationPopup";

import LogosPresse from "../components/LogosPresse";
import Footer from "../components/Footer";
import NewsletterMarquee from "../components/NewsletterMarquee";
import CurrentlyPreview from "../components/CurrentlyPreview";

import styles from "../styles/Main.module.css";
import { PortableText } from "@portabletext/react";

const openCall = ({ currently, openCall, logos, impressum, english }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && (
        <ConfirmationPopup
          english={english}
          openCall={openCall}
          setShowPopup={setShowPopup}
        />
      )}
      <>
        <div
          className={styles.openCallTextsWrapper}
          style={{ pointerEvents: showPopup ? "none" : "auto" }}
        >
          <div
            style={{ color: "#ddd" }}
            className={`${styles.openCallColumnWrapper}`}
          >
            <h1 className={styles.openCallTextHeadline}>Open Call</h1>

            <div className={styles.openCallText}>
              <div>
                {english ? (
                  <PortableText value={openCall.textEN} />
                ) : (
                  <PortableText value={openCall.textDE} />
                )}
              </div>
            </div>

            <div className={styles.openCallText}>
              <h1 className={styles.openCallTextHeadline}>
                {english
                  ? "INFO, Dates & Deadlines"
                  : "INFOS, Termine & FRISTEN"}
              </h1>
              <div>
                {english ? (
                  <PortableText value={openCall.hardFactsEN} />
                ) : (
                  <PortableText value={openCall.hardFactsDE} />
                )}
              </div>
            </div>

            <h1
              className={styles.callButton}
              style={{ marginTop: "var(--spaceLarge)" }}
            >
              <a href={openCall?.pdf.url} download>
                {english
                  ? "Download the call for proposals as a PDF"
                  : "Ausschreibung als PDF herunterladen"}
              </a>
            </h1>
          </div>
          <div
            className={`${styles.openCallColumnWrapper}`}
            style={{ color: "#ddd" }}
          >
            <h1 className={styles.openCallTextHeadline}>
              {english
                ? "Documents to be submitted"
                : "Einzureichende Unterlagen"}
            </h1>
            <div className={styles.openCallText}>
              <div>
                {english ? (
                  <PortableText value={openCall.checklisteEN} />
                ) : (
                  <PortableText value={openCall.checklisteDE} />
                )}
              </div>
            </div>

            <div className={styles.openCallText}>
              <div className={styles.textSmall}>
                {english ? (
                  <PortableText value={openCall.teilnahmebedingungenEN} />
                ) : (
                  <PortableText value={openCall.teilnahmebedingungenDE} />
                )}
              </div>
            </div>

            <h1
              className={styles.callButton}
              style={{ marginTop: "var(--spaceLarge)", cursor: "pointer" }}
              onClick={() => setShowPopup(true)}
            >
              {/* <a
                href="https://forms.gle/1DfYWpqGaLc4DXup7"
                target="_blank"
                rel="noreferrer"
              >
                {english
                  ? "Submit now via our application portal"
                  : "Jetzt über unser Bewerbungsportal Einreichen"}
              </a> */}
              {english
                ? "Submit now via our application portal"
                : "Jetzt über unser Bewerbungsportal Einreichen"}
            </h1>

            <p style={{ padding: "var(--spaceMedium)", textAlign: "center" }}>
              {english
                ? "You will be redirected to an external page. You do not need a Google account for this."
                : "Sie werden auf eine externe Seite umgeleitet.Sie benötigen dafür keinen Google Account."}
            </p>
          </div>
        </div>
      </>

      <div style={{ position: "relative" }}>
        <div
          className={styles.mobileopenCallText}
          style={{ paddingTop: "calc(2*var(--space))" }}
        >
          <h2
            className={styles.openCallTextHeadline}
            style={{ paddingLeft: "0" }}
          >
            {english ? openCall.subtitleEnglish : openCall.subtitleGerman}
          </h2>
          <div style={{ paddingBottom: "var(--space)" }}>
            {english ? (
              <PortableText value={openCall.textEnglish} />
            ) : (
              <PortableText value={openCall.textGerman} />
            )}
          </div>
        </div>

        <div className={"anchorNewsletter"} id="newsletter"></div>
        <NewsletterMarquee english={english} />
        <CurrentlyPreview currently={currently} english={english} />

        <div className={styles.infopageLogosWrapper}>
          <LogosPresse english={english} logos={logos} />
        </div>
        <Footer english={english} impressum={impressum} />
      </div>
    </>
  );
};

export default openCall;

export async function getServerSideProps() {
  const openCall = await client.fetch(`
  * [_type == "openCall"][0]{"pdf": pdf.asset->{url}, ...}`);
  const logos = await client.fetch(
    `* [_type == "logos25"]|order(orderRank){"logo": logo.logo.asset->{"url": url, "height": metadata.dimensions.height, "width": metadata.dimensions.width}}`
  );
  const impressum = await client.fetch(`
  * [_type == "impressum25"]{...}`);
  const currently = await client.fetch(
    `* [_type == "currently"] {..., "textbeitrag": textbeitrag[]{..., "images": images[]{..., "image": image.asset->{...}}}, "bildbeitrag": bildbeitrag{..., "images": images[]{..., "image": image.asset->{...}}}, "newsbeitrag": newsbeitrag{..., "images": images[]{..., "image": image.asset->{...}}}} | order(header.date desc)`
  );
  return {
    props: {
      openCall,
      logos,
      impressum,
      currently,
    },
  };
}
