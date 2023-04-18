import { useState, useRef, useEffect } from "react";
// import useWindowDimensions from "../hooks/useWindowDimensions"

import styles from "../styles/Currently.module.css";
import Image from "next/image";

import { PortableText } from "@portabletext/react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade } from "swiper";

import TextPostImageSlide from "./TextPostImageSlide";
import Textbeitrag from "./Textbeitrag";

const Blogpost = ({
  post,
  i,
  english,
  newsSubtraction,
  setNewsSubtraction,
  length,
  openIndex,
  setOpenIndex,
}) => {
  const ref = useRef();
  const ref2 = useRef();
  const quote = useRef();
  const headerRef = useRef();


  const hidden = { height: "0" };
  const visible = { height: ref.current?.clientHeight };

  const scroll = () => setTimeout(() => ref2.current.scrollIntoView(), 200);

  const open = () => {
    setOpenIndex(i), scroll();
  };

  const dateFormattedDE = (date) =>
    new Date(date).toLocaleString("de-de", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  const dateFormattedEN = (date) =>
    new Date(date).toLocaleString("en-gb", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  const indexNumber = (num) => {
    if (num < 11) {
      return `#0${length - (num + 1)}`;
    }
    return `#${length - (num + 1)}`;
  };

  useEffect(() => {
    post.newsbeitrag && setNewsSubtraction(newsSubtraction + 1);
  }, []);

  return (
    <>
      <div ref={ref2} className="anchor"></div>
      <div
        className={styles.postWrapper}
        style={i % 2 == 0 ? { background: "white" } : { background: "#F2F2F2" }}
        onClick={openIndex == i ? () => setOpenIndex(null) : open}
      >
        <div className={styles.postLeft} ref={headerRef}>
          {post.nwsbeitrag ? (
            <h2 className={styles.newsIcon}>◌</h2>
          ) : (
            <h2>{indexNumber(i)}</h2>
          )}
          <h2 className={styles.date}>
            {english
              ? dateFormattedEN(post.header.date)
              : dateFormattedDE(post.header.date)}
          </h2>
        </div>
        <div className={styles.postRight}>
          <span>
            <h2 className={styles.postTitle}>
              {english ? post.header.titel.titleEN : post.header.titel.titleDE}
            </h2>
            {!post.nwsbeitrag ? (
              <h3>
                {english
                  ? post.header.subtitle?.subtitleEN
                  : post.header.subtitle?.subtitleDE}
              </h3>
            ) : (
              <span style={{ height: "10px", width: "100%", display: "block" }}>
                {" "}
              </span>
            )}
          </span>
          <div className={styles.plusAnimationWrapper}>
            <h2
              className={styles.plusAnimation}
              style={
                openIndex == i
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
        </div>
      </div>

      <div
        style={openIndex != i ? hidden : visible}
        className={styles.postAccordeon}
      >
        <div ref={ref} className={styles.postInner}>

          {/* BILDBEITRAG */}

          {post.bldbeitrag && (
            <>
              <span className={styles.bildbeitragLeft}>
                {post.bildbeitrag.images.map((image, i) => (
                  <span
                    key={i}
                    className={
                      image.image.metadata.dimensions.height >
                        image.image.metadata.dimensions.width &&
                      styles.imagePortrait
                    }
                  >
                    <Image
                      src={image.image.url}
                      layout="responsive"
                      width={image.image.metadata.dimensions.width}
                      height={image.image.metadata.dimensions.height}
                      alt={image.captions.captionEN}
                    />
                    <p className={styles.bildunterschrift}>
                      {english
                        ? image.captions?.captionEN
                        : image.captions?.captionDE}
                    </p>
                  </span>
                ))}
              </span>

              <span className={styles.bildbeitragRight}>
                <PortableText
                  value={
                    english
                      ? post.bildbeitrag.text.textEN
                      : post.bildbeitrag.text.textDE
                  }
                />
              </span>
            </>
          )}

          {/* TEXTBEITRAG */}

          {post.txtbeitrag && (
            <>
              {post.textbeitrag.map((beitrag, i) => (
                <Textbeitrag beitrag={beitrag} i={i} quote={quote} english={english}/>
              ))}
            </>
          )}

          {/* NEWSBEITRAG */}

          {post.nwsbeitrag && (
            <>
              <span className={styles.newsbeitragLeft}>
                {post.newsbeitrag.images?.map((image, i) => (
                  <span
                    key={i}
                    className={
                      image.image.metadata.dimensions.height >
                        image.image.metadata.dimensions.width &&
                      styles.newsImagePortrait
                    }
                  >
                    <Image
                      src={image.image.url}
                      layout="responsive"
                      width={image.image.metadata.dimensions.width}
                      height={image.image.metadata.dimensions.height}
                      alt={image.captions?.captionEN}
                    />
                    <p className={styles.bildunterschrift}>
                      {english
                        ? image.captions?.captionEN
                        : image.captions?.captionDE}
                    </p>
                  </span>
                ))}
              </span>

              <span className={styles.newsbeitragRight}>
                <PortableText
                  value={
                    english
                      ? post.newsbeitrag.text.textEN
                      : post.newsbeitrag.text.textDE
                  }
                />
              </span>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Blogpost;
