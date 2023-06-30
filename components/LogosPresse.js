import styles from "../styles/Main.module.css";
import Image from "next/image";

import useWindowDimensions from "../hooks/useWindowDimensions";

const LogosPresse = ({ english, logos }) => {
  const { width } = useWindowDimensions();

  return (
    <div
      className={styles.logosWrapper}
      style={{
        background:
          width > 700
            ? "var(--blue)"
            : "var(--pink)"
      }}
    >
      <div className={styles.logoHeader}>
        <h2> {english ? "Supported by" : "Gefördert von"}</h2>
      </div>

      <div className={styles.logoInner}>
        {logos?.map((logo, i) => (
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

export default LogosPresse;
