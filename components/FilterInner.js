import { useState, useEffect } from "react";
import styles from "../styles/Kalender.module.css";

const FilterInner = ({
  i,
  data,
  filterValue,
  filter,
  setScrollTo,
  setFlyToState,
  sortType,
}) => {
  const [filterArray, setFilterArray] = useState();

  const convertDate = (input) => {
    const dayNames = ["SO", "MO", "DI", "MI", "DO", "FR", "SA"];
    const day = new Date(input).getDay();
    const date = new Date(input).getDate();
    const month = new Date(input).getUTCMonth() + 1;
    return month < 10
      ? `${dayNames[day]} / ${date}.0${month}`
      : `${dayNames[day]} / ${date}.${month}`;
  };

  const koordinaten = data.filter(
    (element) => element.standort.name == filterValue
  )[0]?.standort.koordinaten;

  const clickAction = () =>
    sortType == "standort"
      ? (setScrollTo(filterValue), setFlyToState([koordinaten]))
      : setScrollTo(filterValue);

  useEffect(() => {
    data.map(
      (entry) => entry.date == filterValue && setFilterArray(filterValue)
    );
  }, [filter]);

  return filter.sortType == "datum" ? (
    filterArray && (
      <a className={styles.filterDate} key={i} onClick={clickAction}>
        {convertDate(filterArray)}
      </a>
    )
  ) : i + 1 < filter.filter.length ? (
    <a key={i} onClick={clickAction}>
      {filterValue},{" "}
    </a>
  ) : (
    <a key={i} onClick={clickAction}>
      {filterValue}
    </a>
  );
};

export default FilterInner;
