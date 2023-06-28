import { useState, useEffect, useRef } from "react";
import styles from "../styles/Kalender.module.css";

import KalenderSubcategory from "./KalenderSubcategory";

const KalenderMobile = ({
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
  activeIndex,
  setActiveIndex,
  scrollTo,
}) => {
  const [activeSubIndex, setActiveSubIndex] = useState(null);

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

export default KalenderMobile;
