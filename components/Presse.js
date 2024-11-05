import { PortableText } from "@portabletext/react";
import styles from "../styles/Main.module.css";

import Downloads from "./Downloads";
import LogosPresse from "./LogosPresse";
import Footer from "./Footer";

const Presse = ({ english, presse, logos, impressum }) => {
  return (
    <div className={styles.pressPageWrapper}>
      {presse.length != 100 ? (
        <>
          <div className={"anchor"} id="presse"></div>
          <div style={{ display: "flex", color: "#ddd" }}>
            <div className={styles.infoSubHeadlineDownloads}>
              <h1>{english ? "Press" : "Presse"}</h1>
              <h2 className={styles.presseSubheadline}>
                {english ? presse[0].headlineEnglish : presse[0].headlineGerman}
              </h2>
            </div>
          </div>

          <div className={styles.presseContent}>
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
      {presse[1] && (
        <Downloads english={english} downloads={presse[1].downloads} />
      )}
      <LogosPresse english={english} logos={logos} />
      <Footer english={english} impressum={impressum} />
    </div>
  );
};

export default Presse;
