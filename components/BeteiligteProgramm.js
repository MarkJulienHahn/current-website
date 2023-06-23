import { useState } from "react";

import KalenderSubcategoryBeteiligte from "../components/KalenderSubcategoryBeteiligte";

const BeteiligteProgramm = ({
  beteiligter,
  programm,
  activeIndex,
  activeSubIndex,
  setActiveSubIndex,
  setActiveIndex,
  english,
  days,
  data,
}) => {
  return (
    <div>
      {days.map(
        (filterValue, i) =>
          filterValue && (
            <KalenderSubcategoryBeteiligte
              activeSubIndex={activeSubIndex}
              setActiveSubIndex={setActiveSubIndex}
              subIndex={i}
              beteiligter={beteiligter}
              key={i}
              filterValue={filterValue}
              data={data}
              days={days}
              english={english}
              programm={programm}
              scrollTo={scrollTo}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          )
      )}
    </div>
  );
};

export default BeteiligteProgramm;
