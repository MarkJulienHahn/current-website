import { useState, useEffect } from "react";
import styles from "../styles/Kalender.module.css";

import KalenderSubcategory from "./KalenderSubcategory";

const Kalender = ({
  english,
  programm,
  datumFilter,
  personenFilter,
  standortFilter,
  formateFilter,
  filter,
  setFilter,
  focus,
  setFocus,
  data,
  days,
  setFlyToState,
  query
}) => {
  const [activeSubIndex, setActiveSubIndex] = useState(null);

  useEffect(() => {
    query && standortFilter
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.headerFilter}>
          <h2 className={styles.headerSegment} onClick={datumFilter}>
            {english ? "Date" : "Datum"}
          </h2>
          <h2 className={styles.headerSegment} onClick={personenFilter}>
          {english ? "People" : "Personen"}
          </h2>
          <h2 className={styles.headerSegment} onClick={standortFilter}>
          {english ? "Location" : "Standort"}
          </h2>
          <h2 className={styles.headerSegment} onClick={formateFilter}>
            Format
          </h2>
        </div>
        {/* <div className={styles.headerLinks}>
          {days.map(day => `${dayNames[new Date(day).getDay()]}`)}
        </div> */}
      </div>

      <div className={styles.body}>
        {filter.filter.map(
          (filterValue, i) =>
            filterValue && (
              <KalenderSubcategory
                activeSubIndex={activeSubIndex}
                setActiveSubIndex={setActiveSubIndex}
                subIndex={i}
                sortType={filter.sortType}
                setFilter={setFilter}
                key={i}
                filterValue={filterValue}
                data={data}
                days={days}
                english={english}
                focus={focus}
                setFocus={setFocus}
                setFlyToState={setFlyToState}
                programm={programm}
                query={query}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Kalender;
