import { useState, useEffect, useRef } from "react";

import KalenderRowBeteiligte from "./KalenderRowBeteiligte";
import styles from "../styles/Kalender.module.css";

const KalenderSubcategory = ({

  filterValue,
  data,
  activeSubIndex,
  setActiveSubIndex,
  subIndex,
  english,
  focus,
  beteiligter,
  activeIndex,
  setActiveIndex,
}) => {
  const [filterArray, setFilterArray] = useState(
    data.filter((entry) => entry.date == filterValue)
  );
  const [dateConverted, setDateConverted] = useState("");
  const [rerender, setRerender] = useState(false);

  const convertDate = async (input) => {
    const dayNames = ["SO", "MO", "DI", "MI", "DO", "FR", "SA"];
    const day = new Date(input).getDay();
    const date = new Date(input).getDate();
    const month = new Date(input).getUTCMonth() + 1;
    await setDateConverted(
      month < 10
        ? `${dayNames[day]} / ${date}.0${month}`
        : `${dayNames[day]} / ${date}.${month}`
    );
  };

  const containsDate = (element) => element.date == filterValue ;
  const containsPerson = (element) => element.beteiligte.some(bet => bet.name  == beteiligter.name);

  const filteredForDate = filterArray.some(containsDate)
  const filteredForPerson = filterArray.some(containsPerson)

  useEffect(() => {
    setTimeout(() => setRerender(true), 500), convertDate(filterValue);
    setActiveIndex(null);
  }, []);

  useEffect(() => {
    setFilterArray(data.filter((entry) => entry.date == filterValue));
  }, [rerender]);

  console.log(filterArray)


  return (
    filteredForDate && filteredForPerson && (
    <>
      <div
        style={{
          position: "absolute",
          transform: "translateY(-130px)",
        }}
      ></div>

      <div className={styles.filterHeader}>
        {dateConverted}
      </div>

      {filterArray.map((entry, i) => (
        <KalenderRowBeteiligte
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          activeSubIndex={activeSubIndex}
          setActiveSubIndex={setActiveSubIndex}
          english={english}
          subIndex={subIndex}
          key={i}
          index={i}
          title={entry.headline}
          date={entry.date}
          standort={entry.standort}
          entry={entry}
          beteiligter={beteiligter}
        />
      ))}
    </>
    )
  );
};

export default KalenderSubcategory;
