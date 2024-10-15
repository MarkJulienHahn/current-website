import client from "../client";

import { use100vh } from "react-div-100vh";

import LogosPresse from "../components/LogosPresse";
import Footer from "../components/Footer";
import NewsletterMarquee from "../components/NewsletterMarquee";
import CurrentlyPreview from "../components/CurrentlyPreview";

import styles from "../styles/Main.module.css";
import { PortableText } from "@portabletext/react";
import WeatherMap from "../components/WeatherMap";
import GradientCanvas from "../components/GradientCanvas";
import Layout from "../components/Layout";

const openCall = ({ currently, openCall, logos, impressum, english }) => {
  const height = use100vh();

  console.log(openCall?.pdf);

  return (
    <>
      <>
        <div className={"particlesWrapper"}>
          <GradientCanvas />
          <WeatherMap />
        </div>
        <div
          style={{
            height: "54vh",
            width: "100vw",
            display: "flex",
            flexWrap: "wrap",
            overflow: "hidden",
            cursor: "pointer",
            background: "white",
          }}
          id="main"
        >
          <div
            className={styles.mainTitle}
            style={{ height: `calc(${height} + 30px)` }}
          >
            <h1>CURRENT</h1>
          </div>
        </div>

        <div className={styles.openCallTextsWrapper}>
          <div
            style={{ background: "var(--red)" }}
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
            style={{ color: "white" }}
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
              style={{ marginTop: "var(--spaceLarge)" }}
            >
              <a
                href="https://forms.gle/1DfYWpqGaLc4DXup7"
                target="_blank"
                rel="noreferrer"
              >
                {english
                  ? "Submit now via our application portal"
                  : "Jetzt über unser Bewerbungsportal Einreichen"}
              </a>
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
        {/* <div
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
        </div> */}

        {/* <div className={styles.pastFestivalLinksWrapper}>
          <div className={styles.pastFestivalLink}>
            <a
              href="http://2021.current-stuttgart.de/de"
              target="_blank"
              rel="noreferrer"
              id="current21"
            >
              {english
                ? "Click for Current 2021 →"
                : "Klick hier für Current 2021 →"}
            </a>
          </div>
          <div className={styles.pastFestivalLink}>
            <a
              href="http://2023.current-stuttgart.de/de"
              target="_blank"
              rel="noreferrer"
              id="current21"
            >
              {english
                ? "Click for Current 2023 →"
                : "Klick hier für Current 2023 →"}
            </a>
          </div>
        </div> */}

        <div className={"anchorNewsletter"} id="newsletter"></div>
        <NewsletterMarquee english={english} />
        <CurrentlyPreview currently={currently} english={english} />

        <div className={styles.infopageLogosWrapper}>
          <LogosPresse english={english} logos={logos[0].logosFoerderer} />
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
  const logos = await client.fetch(`
  * [_type == "logosNeu"]{"logosFoerderer": logosFoerderer[].logo.asset->{...}}`);
  const impressum = await client.fetch(`
  * [_type == "impressum"]{...}`);
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
