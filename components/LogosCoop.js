import styles from "../styles/Main.module.css";
import Image from "next/image";

import useWindowDimensions from "../hooks/useWindowDimensions";

const Logos = ({ english, logos, published }) => {
  const { width } = useWindowDimensions();

  return published ? (
    <div
      className={styles.logosWrapper}
      style={{
        background: "var(--blue)",
      }}
    >
      <div className={styles.logoHeader}>
        <h2> {english ? "In Cooperation with" : "In Kooperation mit"}</h2>
      </div>

      <div className={styles.logoInner}>
        {logos?.map((logo, i) => (
          <div>
            <Image
              src={logo.url}
              layout="responsive"
              objectFit="contain"
              width={logo.metadata.dimensions.width}
              height={logo.metadata.dimensions.height}
              alt="current website logos"
            />
          </div>
        ))}
      </div>
    </div>
  ) : (
    ""
  );
};

export default Logos;
