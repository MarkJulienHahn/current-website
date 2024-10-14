import client from "../client";

import Marquee from "react-fast-marquee";

import Link from "next/link";
import useWindowDimensions from "../hooks/useWindowDimensions";

import LogosPresse from "../components/LogosPresse";
import Footer from "../components/Footer";

import styles from "../styles/Main.module.css";
import { PortableText } from "@portabletext/react";

const openCall = ({ openCall, logos, impressum, english }) => {
  console.log(openCall);

  const { width } = useWindowDimensions();
  return (
    <>
      <div className={styles.openCallPageWrapper}>
        <div className={styles.openCallTextWrapper} id="about">
          <h1
            className={styles.openCallTextHeadline}
            style={{ paddingBottom: "5px" }}
          >
            {openCall.headline}
          </h1>

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
            <div>
              {english ? (
                <PortableText value={openCall.hardFactsEN} />
              ) : (
                <PortableText value={openCall.hardFactsDE} />
              )}
            </div>
          </div>

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
            <div>
              {english ? (
                <PortableText value={openCall.teilnahmebedingungenEN} />
              ) : (
                <PortableText value={openCall.teilnahmebedingungenDE} />
              )}
            </div>
          </div>
        </div>
      </div>

      <div>
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

        <div className={styles.pastFestivalLinksWrapper}>
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
        </div>

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
  * [_type == "openCall"][0]{...}`);
  const logos = await client.fetch(`
  * [_type == "logosNeu"]{"logosFoerderer": logosFoerderer[].logo.asset->{...}}`);
  const impressum = await client.fetch(`
  * [_type == "impressum"]{...}`);
  return {
    props: {
      openCall,
      logos,
      impressum,
    },
  };
}
