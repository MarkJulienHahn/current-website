import styles from "../styles/Main.module.css";
import Image from "next/image";

const LogosPresse = ({ english, logos }) => {
  return (
    <div
      className={styles.logosWrapper}
      style={{
        background: "var(--blue)",
      }}
    >
      <div className={styles.logoHeader}>
        <h2> {english ? "Supported by" : "Gefördert von"}</h2>
      </div>
      <div className={styles.logoInner}>
        {logos.map((logo, i) => (
          <div
            key={i}
            style={{ width: "25%", height: "60px", position: "relative" }}
          >
            {console.log(logo)}
            <Image
              src={logo.logo.url}
              fill
              style={{ objectFit: "contain" }}
              alt="current website logos"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogosPresse;
