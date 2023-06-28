import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

import client from "../client";
import styles from "../styles/Kalender.module.css";

import Karte from "../components/Karte";
import Kalender from "../components/Kalender";
import KalenderMobile from "../components/KalenderMobile";
import FilterInner from "../components/FilterInner";

const days = [
  "2023-09-14",
  "2023-09-15",
  "2023-09-16",
  "2023-09-17",
  "2023-09-18",
  "2023-09-19",
  "2023-09-20",
  "2023-09-21",
  "2023-09-22",
  "2023-09-23",
  "2023-09-24",
];

const kalender = ({ english, programm, standorte, beteiligte, formate }) => {
  const [toggleMap, setToggleMap] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [mobileFilter, setMobileFilter] = useState(null);
  const [filterActive, setFilterActive] = useState(false);
  const [scrollTo, setScrollTo] = useState(null);
  const [filterIndex, setFilterIndex] = useState(0);

  const personenArray = beteiligte.map((person, i) => person.name);
  const standorteArray = standorte.map((ort, i) => ort.name);
  const formateArray = formate.map((format, i) => format.formate);

  const [data, setData] = useState([]);
  const [focus, setFocus] = useState(null);
  const [flyToState, setFlyToState] = useState([
    9.218195301506112, 48.80442744658279,
  ]);
  const [filter, setFilter] = useState({ sortType: "datum", filter: days });

  const router = useRouter();

  const datumRef = useRef();
  const personenRef = useRef();
  const standorteRef = useRef();
  const formateRef = useRef();

  const datumFilter = () => {
    setFilter({ sortType: "datum", filter: days });
    setFilterIndex(0);
  };

  const personenFilter = () => {
    setFilter({ sortType: "personen", filter: personenArray });
    setFilterIndex(1);
  };

  const standortFilter = () => {
    setFilter({ sortType: "standort", filter: standorteArray });
    setFilterIndex(2);
  };

  const formateFilter = () => {
    setFilter({ sortType: "formate", filter: formateArray });
    setFilterIndex(3);
  };

  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        datum: "date",
        personen: "personen.name",
        standort: "standort.name",
        formate: "formate.format",
      };
      const sortProperty = types[type];
      const sorted = [...programm].sort((a, b) => {
        if (a[sortProperty] > b[sortProperty]) {
          return 1;
        } else if (b[sortProperty] > a[sortProperty]) {
          return -1;
        } else {
          return 0;
        }
      });
      setData(sorted);
    };

    sortArray(filter.sortType);
  }, [filter]);

  useEffect(() => {
    setMobileFilter(false), setToggleMap(false);
  }, [filter]);

  useEffect(() => {
    setMobileFilter(false);
  }, [toggleMap]);

  return (
    <>
      <div className={styles.kalenderDesktop}>
        <div className={styles.outer}>
          <Karte
            programm={programm}
            standorte={standorte}
            standortFilter={standortFilter}
            setFocus={setFocus}
            flyToState={flyToState}
          />
          <Kalender
            datumFilter={datumFilter}
            personenFilter={personenFilter}
            standortFilter={standortFilter}
            formateFilter={formateFilter}
            filter={filter}
            setFilter={setFilter}
            focus={focus}
            setFocus={setFocus}
            programm={programm}
            beteiligte={beteiligte}
            formate={formate}
            standorte={standorte}
            data={data}
            setFlyToState={setFlyToState}
            days={days}
            query={router.query.active}
            english={english}
            flyToState={flyToState}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>
      </div>

      <div className={styles.kalenderMobile}>
        <div
          className={styles.headerMobile}
          onClick={() => setActiveIndex(null)}
        >
          <h2 onClick={() => setMobileFilter(!mobileFilter)}>Filter</h2>
          <h2 onClick={() => setToggleMap(!toggleMap)}>
            {!toggleMap ? "Karte" : "Liste"}
          </h2>
        </div>

        <div className={styles.headerLinks}>
          <div
            className={styles.headerLinksWrapper}
            style={
              mobileFilter
                ? {
                    top: "60px",
                  }
                : { top: "-100vh" }
            }
          >
            <div>
              <div className={styles.plusAnimationWrapper}>
                <h2
                  className={styles.plusAnimation}
                  style={
                    filterIndex == 0
                      ? { transform: "rotate(90deg) translateY(-1px)" }
                      : {
                          transform:
                            "rotate(180deg) translateX(-1px) translateY(-1px)",
                        }
                  }
                >
                  I
                </h2>
                <h2 className={styles.plusAnimationStatic}>I</h2>

                <h2
                  className={styles.headerSegment}
                  onClick={
                    filterIndex != 0
                      ? () => setFilterIndex(0)
                      : () => setFilterIndex(null)
                  }
                >
                  {english ? "Date" : "Datum"}
                </h2>
              </div>

              <div
                className={styles.filterInnerMobileDate}
                style={
                  filterIndex == 0
                    ? { height: datumRef.current?.clientHeight }
                    : { height: "0px" }
                }
                onClick={datumFilter}
              >
                <div ref={datumRef}>
                  {days.map((filterValue, i) => (
                    <FilterInner
                      key={i}
                      i={i}
                      data={data}
                      filterValue={filterValue}
                      filter={{ sortType: "datum", filter: days }}
                      setScrollTo={setScrollTo}
                      setActiveIndex={setActiveIndex}
                      setFlyToState={setFlyToState}
                      sortType={filter.sortType}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className={styles.plusAnimationWrapper}>
                <h2
                  className={styles.plusAnimation}
                  style={
                    filterIndex == 1
                      ? { transform: "rotate(90deg) translateY(-1px)" }
                      : {
                          transform:
                            "rotate(180deg) translateX(-1px) translateY(-1px)",
                        }
                  }
                >
                  I
                </h2>
                <h2 className={styles.plusAnimationStatic}>I</h2>
              </div>
              <h2
                className={styles.headerSegment}
                onClick={
                  filterIndex != 1
                    ? () => setFilterIndex(1)
                    : () => setFilterIndex(null)
                }
              >
                {english ? "People" : "Personen"}
              </h2>
              <div
                className={styles.filterInnerMobile}
                style={
                  filterIndex == 1
                    ? { height: personenRef.current?.clientHeight }
                    : { height: "0px" }
                }
                onClick={personenFilter}
              >
                <div ref={personenRef}>
                  {personenArray.map((filterValue, i) => (
                    <FilterInner
                      key={i}
                      i={i}
                      data={data}
                      filterValue={filterValue}
                      filter={{ sortType: "personen", filter: personenArray }}
                      setScrollTo={setScrollTo}
                      setActiveIndex={setActiveIndex}
                      setFlyToState={setFlyToState}
                      sortType={personenArray}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className={styles.plusAnimationWrapper}>
                <h2
                  className={styles.plusAnimation}
                  style={
                    filterIndex == 2
                      ? { transform: "rotate(90deg) translateY(-1px)" }
                      : {
                          transform:
                            "rotate(180deg) translateX(-1px) translateY(-1px)",
                        }
                  }
                >
                  I
                </h2>
                <h2 className={styles.plusAnimationStatic}>I</h2>
              </div>
              <h2
                className={styles.headerSegment}
                onClick={
                  filterIndex != 2
                    ? () => setFilterIndex(2)
                    : () => setFilterIndex(null)
                }
              >
                {english ? "Location" : "Standort"}
              </h2>
              <div
                className={styles.filterInnerMobile}
                style={
                  filterIndex == 2
                    ? { height: standorteRef.current?.clientHeight }
                    : { height: "0px" }
                }
                onClick={standortFilter}
              >
                <div ref={standorteRef}>
                  {standorteArray.map((filterValue, i) => (
                    <FilterInner
                      key={i}
                      i={i}
                      data={data}
                      filterValue={filterValue}
                      filter={{
                        sortType: "standort",
                        filter: standorteArray,
                      }}
                      setScrollTo={setScrollTo}
                      setActiveIndex={setActiveIndex}
                      setFlyToState={setFlyToState}
                      sortType={filter.sortType}
                    />
                  ))}
                </div>
              </div>{" "}
            </div>

            <div>
              <div className={styles.plusAnimationWrapper}>
                <h2
                  className={styles.plusAnimation}
                  style={
                    filterIndex == 3
                      ? { transform: "rotate(90deg) translateY(-1px)" }
                      : {
                          transform:
                            "rotate(180deg) translateX(-1px) translateY(-1px)",
                        }
                  }
                >
                  I
                </h2>
                <h2 className={styles.plusAnimationStatic}>I</h2>
              </div>
              <h2
                className={styles.headerSegment}
                onClick={
                  filterIndex != 3
                    ? () => setFilterIndex(3)
                    : () => setFilterIndex(null)
                }
              >
                Format
              </h2>
              <div
                className={styles.filterInnerMobile}
                style={
                  filterIndex == 3
                    ? { height: formateRef.current?.clientHeight }
                    : { height: "0px" }
                }
                onClick={formateFilter}
              >
                <div ref={formateRef}>
                  {formateArray.map((filterValue, i) => (
                    <FilterInner
                      key={i}
                      i={i}
                      data={data}
                      filterValue={filterValue}
                      filter={{ sortType: "formate", filter: formateArray }}
                      setScrollTo={setScrollTo}
                      setActiveIndex={setActiveIndex}
                      setFlyToState={setFlyToState}
                      sortType={filter.sortType}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {toggleMap && (
          <Karte
            programm={programm}
            standorte={standorte}
            standortFilter={standortFilter}
            setFocus={setFocus}
            flyToState={flyToState}
          />
        )}

        <div style={!toggleMap ? { display: "block" } : { display: "none" }}>
          <KalenderMobile
            datumFilter={datumFilter}
            personenFilter={personenFilter}
            standortFilter={standortFilter}
            formateFilter={formateFilter}
            filter={filter}
            setFilter={setFilter}
            focus={focus}
            setFocus={setFocus}
            programm={programm}
            beteiligte={beteiligte}
            formate={formate}
            standorte={standorte}
            data={data}
            setFlyToState={setFlyToState}
            days={days}
            query={router.query.active}
            english={english}
            flyToState={flyToState}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            mobileFilter={mobileFilter}
            scrollTo={scrollTo}
          />
        </div>
      </div>
    </>
  );
};

export default kalender;

export async function getServerSideProps() {
  const standorte = await client.fetch(`
  * [_type == "standorte"]{...}`);
  const beteiligte = await client.fetch(`
  *[_type == "beteiligte"]{..., "bild": bild{..., "asset": asset->{...}}}`);
  const formate = await client.fetch(`
  * [_type == "formate"]{...}`);
  const programm = await client.fetch(`
  *[_type == "programm"]{..., "standort": standort->{...}, "beteiligte": beteiligte[]->{...}, "formate": formate[]->{...},"bilder": bilder[]{..., "asset": asset->{...}}}`);

  return {
    props: {
      standorte,
      programm,
      beteiligte,
      formate,
    },
  };
}
