import { useState, useEffect, useRef } from "react";

import KalenderRow from "./KalenderRow";
import styles from "../styles/Kalender.module.css";

import useWindowDimensions from "../hooks/useWindowDimensions";

const KalenderSubcategory = ({
  sortType,
  filterValue,
  data,
  activeSubIndex,
  setActiveSubIndex,
  subIndex,
  english,
  focus,
  setFocus,
  setFlyToState,
  query,
  scrollTo,
  activeIndex,
  setActiveIndex,
}) => {
  const [filterArray, setFilterArray] = useState(
    data.filter((dataEntry) =>
      dataEntry.dates.some((singleDate) => singleDate.date == filterValue)
    )
  );
  const [dateConverted, setDateConverted] = useState("");

  const { width } = useWindowDimensions();

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
      ? element.dates.some((singleDate) => singleDate.date == filterValue)
      : sortType == "personen"
      ? element.beteiligte.some(
          (beteiligter) => beteiligter.name == filterValue
        )
      : sortType == "standort"
      ? element.standort.name == filterValue
      : sortType == "formate"
      ? element.formate.some((format) => format.formate == filterValue)
      : element.date == filterValue;

  useEffect(() => {
    sortType == "datum"
      ? setFilterArray(
          data.filter((dataEntry) =>
            dataEntry.dates.some((singleDate) => singleDate.date == filterValue)
          )
        )
      : sortType == "personen"
      ? setFilterArray(
          data.filter((dataEntry) =>
            dataEntry.beteiligte.some(
              (beteiligter) => beteiligter.name == filterValue
            )
          )
        )
      : sortType == "standort"
      ? setFilterArray(
          data.filter((entry) => entry.standort.name == filterValue)
        )
      : sortType == "formate"
      ? setFilterArray(
          data.filter((dataEntry) =>
            dataEntry.formate.some((format) => format.formate == filterValue)
          )
        )
      : "";
    () => setActiveIndex(null);
  }, [sortType]);

  const scroll = () => setTimeout(() => ref.current?.scrollIntoView(), 200);

  useEffect(() => {
    convertDate(filterValue);
    setActiveIndex(null);
  }, []);

  useEffect(() => {
    focus == filterArray[0]?.standort.slug.current && focus != null && scroll();
  }, [focus]);

  useEffect(() => {
    scrollTo == filterValue && scroll();
  }, [scrollTo]);

  const filterArraySorted = filterArray.sort(function (a, b) {
    if (a.dates[0].date < b.dates[0].date) return -1;
    if (a.dates[0].date > b.dates[0].date) return 1;

    if (a.dates[0].time?.start < b.dates[0].time?.start) return -1;
    if (a.dates[0].time?.start > b.dates[0].time?.start) return 1;
    else return 0;

    // return a.dates[0].date < b.dates[0].date ? -1
    //   : a.dates[0].date > b.dates[0].date
    //   ? 1
    //   : 0;
  });

  console.log(filterArraySorted);

  return (
    filterArraySorted.some(contains) && (
      <>
        <div
          ref={ref}
          style={{
            position: "absolute",
            transform: width > 700 ? "translateY(-130px)" : "translateY(-59px)",
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
            scrollTo={scrollTo}
          />
        ))}
      </>
    )
  );
};

export default KalenderSubcategory;
