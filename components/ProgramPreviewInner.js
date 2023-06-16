import { useState, useEffect } from "react";

import styles from "../styles/ProgramPreview.module.css";

import Image from "next/image";

const ProgramPreviewInner = ({ event, english }) => {
  const [dateConverted, setDateConverted] = useState("");
  const [dateConvertedEN, setDateConvertedEN] = useState("");

  const convertDate = async (input) => {
    const dayNames = ["SO", "MO", "DI", "MI", "DO", "FR", "SA"];
    const dayNamesEN = ["SUN", "MON", "TUE", "WEN", "THU", "FRI", "SAT"];
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
    convertDate(event.date);
  }, []);

  return (
    <div className={styles.programPreviewInner}>
      <div className={styles.infoBox}>
        <div className={styles.infoInner}>
          {event.time.start}
          {event.time.ende && `–${event.time.ende}`}
          <br />
          {event.standort.name}
          <br />
          {english ? event.format.formateEN : event.format.formate}
        </div>
        <div className={styles.infoInner}>
          <h1>{english ? dateConvertedEN : dateConverted}</h1>
          <h2>
            {english ? event.headlineEN : event.headline}{" "}
            {event.subheadline &&
              (english ? event.subheadlineEN : event.subheadline)}
          </h2>
          <p className={styles.infoSmall}>{event.personen.name}</p>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        {event.bilder && (
          <Image
            src={event.bilder[1].asset.url}
            fill
            style={{ objectFit: "cover" }}
          />
        )}
      </div>
    </div>
  );
};

export default ProgramPreviewInner;
