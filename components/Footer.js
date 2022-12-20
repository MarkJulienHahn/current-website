import { useState, useRef } from "react";
import styles from "../styles/Footer.module.css";
import Impressum from "./Impressum";

import { PortableText } from "@portabletext/react";

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
          <PortableText value={impressum[0].contact} />
            <a href={`mailto:${impressum[0].contact}`}>{impressum[0].email}</a>
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
