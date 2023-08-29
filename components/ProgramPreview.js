import ProgramPreviewInner from "./ProgramPreviewInner";

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import useWindowDimensions from "../hooks/useWindowDimensions";

import { Navigation } from "swiper";

import styles from "../styles/ProgramPreview.module.css";

const dateObject = new Date();
let today = dateObject.toISOString();

const ProgramPreview = ({ programm, english }) => {
  const { width } = useWindowDimensions();

  function compareFn(a, b) {
    if (a.dates[0] < b.dates[0]) {
      return -1;
    }
    if (a.dates[0] > b.dates[0]) {
      return 1;
    }
    return 0;
  }

  const progSorted = programm.sort(compareFn);

  return (
    programm.length > 0 && (
      <>
        {programm.find((element) => element.dates[0].date >= today) && (
          <>
            <div className={styles.programPreviewWrapper}>
              <Swiper
                navigation={true}
                modules={[Navigation]}
                spaceBetween={0}
                slidesPerView={width < 700 || programm.length == 1 ? 1 : 2}
                loop
              >
                {progSorted.map((event, i) =>
                  event.dates[0].date >= today && event.startpage ? (
                    <SwiperSlide>
                      <Link
                        key={i}
                        href={{
                          pathname: "/kalender",
                          query: { active: event.headline },
                        }}
                      >
                        <ProgramPreviewInner event={event} english={english} programLength={programm.length}/>
                      </Link>
                    </SwiperSlide>
                  ) : (
                    " "
                  )
                )}
              </Swiper>
            </div>

            <Link href="/kalender">
              <div className={styles.programPreviewLink}>
                <h1>
                  {english
                    ? "GO TO THE PROGRAM OVERVIEW"
                    : "ZUR GESAMTEN PROGRAMMÜBERSICHT"}
                </h1>
              </div>
            </Link>
          </>
        )}
      </>
    )
  );
};

export default ProgramPreview;
