import { useState, useEffect } from "react";

import styles from "../styles/ProgramPreview.module.css";

import Image from "next/image";

const ProgramPreviewInner = ({ event, english, programLength }) => {
  const [dateConverted, setDateConverted] = useState("");
  const [dateConvertedEN, setDateConvertedEN] = useState("");

  const convertDate = async (input) => {
    const dayNames = ["SO", "MO", "DI", "MI", "DO", "FR", "SA"];
    const dayNamesEN = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const day = new Date(input).getDay();
    const date = new Date(input).getDate();
    const month = new Date(input).getUTCMonth() + 1;
    await setDateConverted(
      month < 10
        ? `${dayNames[day]} / ${date}.0${month}`
        : `${dayNames[day]} / ${date}.${month}`
    );
    await setDateConvertedEN(
      month < 10
        ? `${dayNamesEN[day]} / ${date}.0${month}`
        : `${dayNamesEN[day]} / ${date}.${month}`
    );
  };

  useEffect(() => {
    convertDate(event.dates[0].date);
  }, []);

  return (
    <div className={styles.programPreviewInner} style={{width: programLength > 1 ? "50vw" : "100vw", background: "var(--pink)"}}> 
      <div className={styles.infoBox} style={{width: programLength > 1 ? "66.666%" : "100%"}}>
        <div className={styles.infoInner}>
          {event.dates[0].time?.start}
          {event.dates[0].time?.ende && `–${event.dates[0].time?.ende}`}
          <br />
          {event.standort.name}
          <br />
          {english
            ? event.formate.map((format) => <div>{format.formateEN}</div>)
            : event.formate.map((format) => <div>{format.formate}</div>)}
        </div>
        <div className={styles.infoInner}>
          <h1>{english ? dateConvertedEN : dateConverted}</h1>
          <h2>
            {english ? event.headlineEN : event.headline}
            <br/>
            {event.subheadline &&
              (english ? event.subheadlineEN : event.subheadline)}
          </h2>
          <p className={styles.infoSmall}>
            {event.beteiligte.map((person, i) => (
              <>{person.name}<br/></>
            ))}
          </p>
        </div>
      </div>

      <div className={styles.imageWrapper} >
        {event.bilder && (
          <Image
            src={event.bilder[0]?.asset.url}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            placeholder="blur"
            blurDataURL={event.bilder[0]?.asset.metadata.lqip}
          />
        )}
      </div>
    </div>
  );
};

export default ProgramPreviewInner;
