import { useState, useEffect, useRef } from "react";
import styles from "../styles/Kalender.module.css";

import KalenderSubcategory from "./KalenderSubcategory";
import FilterInner from "./FilterInner";

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
  query,
}) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSubIndex, setActiveSubIndex] = useState(null);
  const [filterActive, setFilterActive] = useState(false);
  const [scrollTo, setScrollTo] = useState(null);

  const ref = useRef();
  const bodyRef = useRef();

  const open = { height: ref.current?.clientHeight };
  const closed = { height: "0px" };

  const scroll = () => bodyRef.current.scrollIntoView();

  useEffect(() => {
    query && standortFilter;
  }, []);

  return (
    <div className={styles.wrapper} ref={bodyRef}>
      <div
        className={styles.header}
        style={
          filterActive ? { background: "var(--pink)" } : { background: "white" }
        }
        onClick={() => setActiveIndex(null)}
      >
        <div
          className={styles.headerFilter}
          onClick={() => {
            setFilterActive(true), scroll();
          }}
        >
          <h2 className={styles.headerSegment} onClick={datumFilter}>
            {english ? "Date" : "Datum"}
          </h2>

          {data.length > 5 && (
            <>
              <h2 className={styles.headerSegment} onClick={personenFilter}>
                {english ? "People" : "Personen"}
              </h2>
              <h2 className={styles.headerSegment} onClick={standortFilter}>
                {english ? "Location" : "Standort"}
              </h2>
              <h2 className={styles.headerSegment} onClick={formateFilter}>
                Format
              </h2>
            </>
          )}
        </div>
      </div>

      <div className={styles.body}>
        <div
          className={styles.headerLinks}
          style={filterActive ? open : closed}
        >
          <div
            className={styles.headerLinksWrapper}
            ref={ref}
            onClick={() => setFilterActive(false)}
          >
            {filter.filter.map((filterValue, i) => (
              <FilterInner
                key={i}
                i={i}
                data={data}
                filterValue={filterValue}
                filter={filter}
                setScrollTo={setScrollTo}
                setActiveIndex={setActiveIndex}
                setFlyToState={setFlyToState}
              />
            ))}
          </div>
        </div>
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
                scrollTo={scrollTo}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Kalender;
