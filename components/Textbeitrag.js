import { useState, useRef, useEffect } from "react";

import styles from "../styles/Currently.module.css";

import { PortableText } from "@portabletext/react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade } from "swiper";

import TextPostImageSlide from "./TextPostImageSlide";

const Textbeitrag = ({ beitrag, i, quote, english }) => {
  const textImage = useRef();


  return (
    <>
      <span className={styles.textbeitragWrapper}>
        <span
          className={styles.textbeitragLeft}
          style={{ marginBottom: beitrag.quoteDE || beitrag.quoteEN ? quote.current?.clientHeight : ""}}
          ref={textImage}
        >
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            effect={"fade"}
            modules={[EffectFade]}
            fadeEffect={{ crossFade: true }}
            loop
          >
            {beitrag.images?.map((image, i) => (
              <SwiperSlide key={i}>
                <TextPostImageSlide
                  image={image}
                  length={beitrag.images.length}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </span>
        <span className={styles.textbeitragRight}>
          <div style={{ minHeight: textImage.current?.clientHeight }}>
            <PortableText value={english ? beitrag.textEN : beitrag.textDE} />
          </div>
          {beitrag.quoteDE || beitrag.quoteEN ? (
            <div ref={quote} className={styles.quote}>
              <PortableText
                value={english ? beitrag.quoteEN : beitrag.quoteDE}
              />
            </div>
          ) : (
            ""
          )}
        </span>
      </span>
    </>
  );
};

export default Textbeitrag;
