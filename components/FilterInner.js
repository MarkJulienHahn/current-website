import { useState, useEffect } from "react";
import styles from "../styles/Kalender.module.css";

const FilterInner = ({ i, data, filterValue, filter, setScrollTo }) => {
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

  useEffect(() => {
    data.map(
      (entry) => entry.date == filterValue && setFilterArray(filterValue)
    );
  }, [filter]);

  return filter.sortType == "datum" ? (
    filterArray && (
      <a
        className={styles.filterDate}
        key={i}
        onClick={() => setScrollTo(filterValue)}
      >
        {convertDate(filterArray)}
      </a>
    )
  ) : i + 1 < filter.filter.length ? (
    <a key={i} onClick={() => setScrollTo(filterValue)}>
      {filterValue},{" "}
    </a>
  ) : (
    <a key={i} onClick={() => setScrollTo(filterValue)}>
      {filterValue}
    </a>
  );
};

export default FilterInner;
