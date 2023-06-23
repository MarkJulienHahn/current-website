import { useRef, useState, useEffect } from "react";

import styles from "../styles/Beteiligte.module.css";
import useWindowDimensions from "../hooks/useWindowDimensions";

import { PortableText } from "@portabletext/react";
import Image from "next/image";

import BeteiligteProgramm from "./BeteiligteProgramm";

const days = [
  "2023-09-14",
  "2023-09-15",
  "2023-09-16",
  "2023-09-17",
  "2023-09-18",
  "2023-09-19",
  "2023-09-20",
  "2023-09-21",
  "2023-09-22",
  "2023-09-23",
  "2023-09-24",
];

const Entry = ({ english, beteiligter, programm }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSubIndex, setActiveSubIndex] = useState(null);

  const ref = useRef();

  const { width } = useWindowDimensions();

  const [data, setData] = useState([]);

  const scroll = () => ref.current.scrollIntoView();

  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        datum: "date",
        personen: "personen.name",
        standort: "standort.name",
        formate: "formate.format",
      };
      const sortProperty = types[type];
      const sorted = [...programm].sort((a, b) => {
        if (a[sortProperty] > b[sortProperty]) {
          return 1;
        } else if (b[sortProperty] > a[sortProperty]) {
          return -1;
        } else {
          return 0;
        }
      });
      setData(sorted);
    };
    sortArray("datum");
    scroll();
  }, []);

  useEffect(() => {
    scroll();
  }, [beteiligter]);

  return (
    <>
      <div
        className={styles.headline}
        ref={ref}
        style={
          beteiligter?.different
            ? { background: "var(--green)" }
            : { background: "var(--blue)" }
        }
      >
        <h1>{beteiligter.name}</h1>
      </div>
      <div className={styles.websiteWrapper}>
        {beteiligter.webseiten &&
          beteiligter.webseiten.map((website, i) => (
            <a
              href={`http://${website}`}
              target="_blank"
              rel="noreferrer"
              className={styles.website}
              key={i}
            >
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
          <div className={styles.bildunterschrift}>
            {beteiligter.bild.bildunterschrift}
          </div>
        </div>
      )}
      <BeteiligteProgramm
        beteiligter={beteiligter}
        programm={programm}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        activeSubIndex={activeSubIndex}
        setActiveSubIndex={setActiveSubIndex}
        english={english}
        data={data}
        days={days}
      />
    </>
  );
};

export default Entry;
