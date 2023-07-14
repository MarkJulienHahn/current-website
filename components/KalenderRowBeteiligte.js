import { useState, useEffect, useRef } from "react";
import styles from "../styles/Kalender.module.css";

import { useRouter } from "next/router";

import KalenderImageSlide from "./KalenderImageSlide";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade } from "swiper";

import { PortableText } from "@portabletext/react";

const KalenderRow = ({
  entry,
  english,
  index,
  title,
  date,
  activeIndex,
  setActiveIndex,
  setActiveSubIndex,
  activeSubIndex,
  subIndex,
  query,
  beteiligter,
}) => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState(false);
  const [dateConverted, setDateConverted] = useState("");
  const [dateConvertedEN, setDateConvertedEN] = useState("");

  const convertDateDE = (input) => {
    const dayNames = ["SO", "MO", "DI", "MI", "DO", "FR", "SA"];
    const dayNamesEN = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const day = new Date(input).getDay();
    const date = new Date(input).getDate();
    const month = new Date(input).getUTCMonth() + 1;

    const convertedDate =
      month < 10
        ? `${dayNames[day]} / ${date}.0${month}.`
        : `${dayNames[day]} / ${date}.${month}.`;

    return convertedDate;
  };

  const convertDateEN = (input) => {
    const dayNamesEN = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const day = new Date(input).getDay();
    const date = new Date(input).getDate();
    const month = new Date(input).getUTCMonth() + 1;

    const convertedDate =
      month < 10
        ? `${dayNamesEN[day]} / ${date}.0${month}.`
        : `${dayNamesEN[day]} / ${date}.${month}.`;

    return convertedDate;
  };

  const ref = useRef();
  const refOuter = useRef();

  const scroll = () => setTimeout(() => refOuter.current.scrollIntoView(), 210);

  const openFunction = () => {
    setActiveIndex(index), setActiveSubIndex(subIndex);
  };

  const closeFunction = () => {
    setActiveIndex(null), setActiveSubIndex(null);
  };

  useEffect(() => {
    activeIndex == index && activeSubIndex == subIndex && setActive(true);
    activeSubIndex != subIndex && setActive(null);
    activeIndex != index && setActive(null);
    activeIndex == null && setActive(null);
  }, [activeIndex, activeSubIndex]);

  const open = {
    height: height,
  };

  const closed = {
    height: "0px",
  };

  useEffect(() => setHeight(ref.current?.clientHeight));

  useEffect(() => {
    query == title && setActive(true);
  }, []);

  useEffect(() => {
    active && scroll();
  }, [active]);

  return (
    entry.beteiligte.some((bet) => bet.name == beteiligter.name) && (
      <>
        <div
          style={{
            position: "absolute",
            transform: "translateY(-130px)",
          }}
        ></div>
        <div
          ref={refOuter}
          className={`${styles.infoOuter} ${index % 2 == 0 && styles.bgGrey}`}
        >
          <div
            className={styles.infoTextpart}
            onClick={active ? closeFunction : openFunction}
          >
            <div className={styles.headline}>
              <h2>{english ? entry.headlineEN : entry.headline}</h2>{" "}
              <h2>{entry.subheadline}</h2>
            </div>
            <div className={styles.infoRowBottom}>
              <div className={styles.infoSegment}>
                {entry.dates.map((time) => (
                  <>
                    <div>
                      {english
                        ? convertDateEN(time.date)
                        : convertDateDE(time.date)}
                    </div>
                    {time.time.start && time.time.start}
                    {time.time.ende && ` — ${time.time.ende}`}
                    <br /> <br />
                  </>
                ))}
              </div>
              <div className={styles.infoSegment}>
                {entry.beteiligte.map((beteiligter, i) => beteiligter.name)}
              </div>
              <div className={styles.infoSegment}>{entry.standort.name}</div>
              <div className={styles.infoSegment}>
                {english
                  ? entry.formate.map((format, i) => (
                      <div key={i}>{format.formateEN}</div>
                    ))
                  : entry.formate.map((format, i) => (
                      <div key={i}>{format.formate}</div>
                    ))}
              </div>
            </div>
          </div>

          <div className={styles.accordeon} style={active ? open : closed}>
            <div className={styles.imageWrapper}>
              <div ref={ref}>
                {entry.bilder && (
                  <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    effect={"fade"}
                    modules={[EffectFade]}
                    fadeEffect={{ crossFade: true }}
                    loop
                  >
                    {entry.bilder.map((image, i) => (
                      <SwiperSlide key={i}>
                        <KalenderImageSlide
                          image={image}
                          length={entry.bilder.length}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}

                <div className={styles.infoTextpart}>
                  <PortableText
                    value={english ? entry.beschreibung : entry.beschreibungEN}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default KalenderRow;
