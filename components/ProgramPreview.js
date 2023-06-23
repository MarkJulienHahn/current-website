import ProgramPreviewInner from "./ProgramPreviewInner";

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

import styles from "../styles/ProgramPreview.module.css";

const dateObject = new Date();
let today = dateObject.toISOString();

const ProgramPreview = ({ programm, english }) => {
  function compareFn(a, b) {
    if (a.date < b.date) {
      return -1;
    }
    if (a.date > b.date) {
      return 1;
    }
    return 0;
  }

  const progSorted = programm.sort(compareFn);

  return (
    <>
      {programm.find((element) => element.date >= today) && (
        <>
          <div className={styles.programPreviewWrapper}>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              spaceBetween={0}
              slidesPerView={2}
              loop
            >
              {progSorted.map((event, i) =>
                event.date >= today && event.bilder.length ? (
                  <SwiperSlide>
                    <Link
                      key={i}
                      href={{
                        pathname: "/kalender",
                        query: { active: event.headline },
                      }}
                    >
                      <ProgramPreviewInner event={event} english={english} />
                    </Link>
                  </SwiperSlide>
                ) : (
                  ""
                )
              )}
            </Swiper>
          </div>

          <Link href="/kalender">
            <div className={styles.programPreviewLink}>
              <h1>
                {english
                  ? "SHOW THE COMPLETE PROGRAM"
                  : "ZUM GESAMTEN PROGRAMM"}
              </h1>
            </div>
          </Link>
        </>
      )}
    </>
  );
};

export default ProgramPreview;
