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

const Entry = ({ scroll, english, beteiligter, programm }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSubIndex, setActiveSubIndex] = useState(null);
  const [data, setData] = useState([]);

  const { width } = useWindowDimensions();

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
    width < 700 ? scroll() : () => {};
  }, []);

  useEffect(() => {
    width < 700 ? scroll() : () => {};
  }, [beteiligter]);

  console.log(width);

  return (
    <>
      <div className={styles.websiteWrapper}>
        {beteiligter?.webseiten &&
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
        <>
          <div
            className={styles.imageWrapper}
            style={{
              height: `calc(${
                50 / beteiligter.bild.asset.metadata.dimensions.aspectRatio
              }vw + 10px)`,
            }}
          >
            <Image
              fill
              src={beteiligter.bild.asset.url}
              style={{ objectFit: "contain", objectPosition: "left top" }}
            />
          </div>
          <div className={styles.bildunterschrift}>
            {beteiligter.bild.bildunterschrift}
          </div>
        </>
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
