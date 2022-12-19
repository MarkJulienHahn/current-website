import { useState, useRef } from "react";
import styles from "../styles/Footer.module.css";
import Impressum from "./Impressum";

const Footer = ({ english, impressum }) => {
  const [background, setBackground] = useState(true);
  const [background2, setBackground2] = useState(true);
  const [impr, setImpr] = useState(false);

  const ref2 = useRef(null);

  const scrollToRef = () => {
    window.scrollTo({
      top: ref2.current.offsetTop - 500,
      left: 0,
      behavior: "smooth",
    });
  };

  const showImpressum = () => {
    setTimeout(scrollToRef, 500);
    setImpr(true);
  };

  const hideImpressum = () => {
    setTimeout(scrollToRef, 500);
    setImpr(false);
  };

  return (
    <>
      <div className={styles.footerWrapper}>
        <div className={styles.footerLinks}>
          <h2 onClick={impr ? hideImpressum : showImpressum}>
            <a>Impressum</a>
          </h2>
          <h2>
            <a
              href="https://www.instagram.com/current.stuttgart/?hl=de"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </h2>
          <h2>
            <a
              href="https://www.facebook.com/currentstuttgart/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </h2>
        </div>
        <div
          className={styles.footerSegment}
          style={{ background: background ? "var(--pink)" : "" }}
          onClick={() => setBackground(!background)}
        ></div>
        <div
          className={styles.footerSegment}
          style={{ background: background2 ? "var(--pink)" : "" }}
          onClick={() => setBackground2(!background2)}
        >
          <h2>
            Art Public Space — Culture Matters gUG
            <br />
            Reitzensteinstr. 31, 70190 Stuttgart
            <br />
            +49 176 7606 9589
            <br />
            <a href="mailto:info@artpublicspace.de">info@artpublicspace.de</a>
          </h2>
        </div>
      </div>
      <div ref={ref2}>
        <Impressum
          impr={impr}
          english={english}
          impressum={impressum[0]}
          background={background}
          setBackground={setBackground}
        />
      </div>
    </>
  );
};

export default Footer;
