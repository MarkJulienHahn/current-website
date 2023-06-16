import { useRef, useState } from "react";

import styles from "../styles/Beteiligte.module.css";
import useWindowDimensions from "../hooks/useWindowDimensions";

import { PortableText } from "@portabletext/react";
import Image from "next/image";

const Entry = ({ english, beteiligter }) => {
  const imgRef = useRef();
  const { width } = useWindowDimensions();
  
  return (
    <>
      <div
        className={styles.headline}
        ref={imgRef}
        style={
          beteiligter?.different
            ? { background: "var(--green)" }
            : { background: "var(--blue)" }
        }
      >
        <h1>{beteiligter.name}</h1>
      </div>
      <div className={styles.websiteWrapper}>
        {beteiligter.webseiten.map((website, i) => (
          <a href={`http://${website}`} target="_blank" rel="noreferrer" className={styles.website} key={i}>
            {website}
          </a>
        ))}
      </div>
      <div className={styles.textWrapper}>
        <PortableText
          value={
            english ? beteiligter.beschreibungEN : beteiligter.beschreibung
          }
        />
      </div>

      {beteiligter.bild && (
        <div className={styles.imageWrapper}>
            <Image
              responsive
              width={
                beteiligter.bild.asset.metadata.dimensions.aspectRatio > 1
                  ? width / 2
                  : width / 4
              }
              height={
                beteiligter.bild.asset.metadata.dimensions.aspectRatio > 1
                  ? width /
                    2 /
                    beteiligter.bild.asset.metadata.dimensions.aspectRatio
                  : width /
                    4 /
                    beteiligter.bild.asset.metadata.dimensions.aspectRatio
              }
              src={beteiligter.bild.asset.url}
              style={{ objectFit: "contain", objectPosition: "left top" }}
            />
            <div className={styles.bildunterschrift}>{beteiligter.bild.bildunterschrift}</div>
        </div>
      )}
    </>
  );
};

export default Entry;
