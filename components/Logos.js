import { useState } from "react";
import styles from "../styles/Main.module.css";
import Image from "next/image";

const Logos = ({ english, logos }) => {
  const [background, setBackground] = useState(true);

  return (
    <div
      className={styles.logosWrapper}
      style={{
        background: background ? "var(--blue)" : "",
      }}
      onMouseEnter={() => setBackground(false)}
      onMouseLeave={() => setBackground(true)}
    >
      <div className={styles.logoHeader}>
        <h2> {english ? "Supported by" : "Gefördert von"}</h2>
      </div>
      
      <div className={styles.logoInner}>
        {logos.map((logo, i) => (
          <div>
            <Image
              src={logo.logo.url}
              layout="responsive"
              objectFit="contain"
              width={logo.logo.width}
              height={logo.logo.height}
              alt="current website logos"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logos;
