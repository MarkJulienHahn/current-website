import { useState, useEffect, useRef } from "react";

import KalenderRow from "./KalenderRow";
import styles from "../styles/Kalender.module.css";

const KalenderSubcategory = ({
  sortType,
  filterValue,
  data,
  setFilter,
  activeSubIndex,
  setActiveSubIndex,
  subIndex,
  english,
  days,
  focus,
  setFocus,
  setFlyToState,
  query,
}) => {
  const [filterArray, setFilterArray] = useState(
    data.filter((entry) => entry.date == filterValue)
  );
  const [dateConverted, setDateConverted] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);

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

  const ref = useRef();

  const contains = (element) =>
    sortType == "datum"
      ? element.date == filterValue
      : sortType == "personen"
      ? element.personen.name == filterValue
      : sortType == "standort"
      ? element.standort.name == filterValue
      : sortType == "formate"
      ? element.format.formate == filterValue
      : element.date == filterValue;

  useEffect(() => {
    sortType == "datum"
      ? setFilterArray(data.filter((entry) => entry.date == filterValue))
      : sortType == "personen"
      ? setFilterArray(
          data.filter((entry) => entry.personen.name == filterValue)
        )
      : sortType == "standort"
      ? setFilterArray(
          data.filter((entry) => entry.standort.name == filterValue)
        )
      : sortType == "formate"
      ? setFilterArray(
          data.filter((entry) => entry.format.formate == filterValue)
        )
      : "";
  }, [sortType]);

  const alarm = () => setFilter({ sortType: "datum", filter: days });

  useEffect(() => {
    convertDate(filterValue);
    setActiveIndex(null);
    setTimeout(alarm, 10);
  }, []);

  useEffect(() => {
    focus == filterArray[0]?.standort.slug.current &&
      ref.current?.scrollIntoView();
  }, [focus]);

  return (
    filterArray.some(contains) && (
      <>
        <div
          ref={ref}
          style={{
            position: "absolute",
            transform: "translateY(-130px)",
          }}
        ></div>

        <div className={styles.filterHeader}>
          {sortType == "datum" ? dateConverted : filterValue}
        </div>

        {filterArray.map((entry, i) => (
          <KalenderRow
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            activeSubIndex={activeSubIndex}
            subIndex={subIndex}
            setActiveSubIndex={setActiveSubIndex}
            english={english}
            key={i}
            index={i}
            setFocus={setFocus}
            title={entry.headline}
            date={sortType == "datum" ? filterValue : entry.date}
            standort={entry.standort}
            setFlyToState={setFlyToState}
            query={query}
            entry={entry}
          />
        ))}
      </>
    )
  );
};

export default KalenderSubcategory;
