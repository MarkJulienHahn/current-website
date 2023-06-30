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
    data.filter((entry) => entry.date == filterValue)
  );
  const [dateConverted, setDateConverted] = useState("");
  const [rerender, setRerender] = useState(false)

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
      ? element.date == filterValue
      : sortType == "personen"
      ? element.beteiligte[0].name == filterValue
      : sortType == "standort"
      ? element.standort.name == filterValue
      : sortType == "formate"
      ? element.formate[0].formate == filterValue
      : element.date == filterValue;

  useEffect(() => {
    sortType == "datum"
      ? setFilterArray(data.filter((entry) => entry.date == filterValue))
      : sortType == "personen"
      ? setFilterArray(
          data.filter((entry) => entry.beteiligte[0].name == filterValue)
        )
      : sortType == "standort"
      ? setFilterArray(
          data.filter((entry) => entry.standort.name == filterValue)
        )
      : sortType == "formate"
      ? setFilterArray(
          data.filter((entry) => entry.formate[0].formate == filterValue)
        )
      : "";
      () => setActiveIndex(null)
  }, [sortType])

  const scroll = () => setTimeout(() => ref.current?.scrollIntoView(), 200);

  useEffect(() => {
    setTimeout(() => setRerender(true), 500),
    convertDate(filterValue);
    setActiveIndex(null);
  }, []);

  useEffect(() => {
    focus == filterArray[0]?.standort.slug.current &&
     scroll()
  }, [focus]);

  useEffect(() => {
    scrollTo == filterValue && scroll();
  }, [scrollTo]);

  useEffect(() => {
    setFilterArray(data.filter((entry) => entry.date == filterValue))
  }, [rerender]);

  return (
    filterArray.some(contains) && (
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
