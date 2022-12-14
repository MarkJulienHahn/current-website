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

  console.log(ref2.current.offsetTop - 500)
  };

  const showImpressum = () => {
    setTimeout(scrollToRef, 500);
    setImpr(!impr);
  };


  return (
    <>
      <div className={styles.footerWrapper}>
        <div
          className={styles.footerSegment}
          style={{ background: background ? "var(--pink)" : "" }}
          onClick={() => setBackground(!background)}
        >
          <h2 onClick={() => showImpressum()}>
            <a>Impressum</a>
          </h2>
          <h2>
            <a>Instagram</a>
          </h2>
          <h2>
            <a>Facebook</a>
          </h2>
        </div>
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
            info@artpublicspace.de
          </h2>
        </div>
      </div>
      <div ref={ref2}>
        {impr && (
          <Impressum
            english={english}
            impressum={impressum[0]}
            background={background}
            setBackground={setBackground}
          />
        )}
      </div>
    </>
  );
};

export default Footer;
