import { useState, useRef } from "react";

import styles from "../styles/Currently.module.css";
import Image from "next/image";

import { PortableText } from "@portabletext/react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade } from "swiper";

import TextPostImageSlide from "./TextPostImageSlide";

const Blogpost = ({ post, i }) => {
  const [active, setActive] = useState(false);

  const ref = useRef();
  const ref2 = useRef();
  const quote = useRef();

  const hidden = { height: "0" };
  const visible = { height: ref.current?.clientHeight };

  const scroll = () =>
    setTimeout(() => ref2.current.scrollIntoView({ block: "start" }), 200);

  const open = () => {
    setActive(!active), scroll();
  };

  const dateFormattedDE = (date) =>
    new Date(date).toLocaleString("de-de", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    const dateFormattedEN = (date) =>
    new Date(date).toLocaleString("de-de", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  return (
    <>
      <div
        className={styles.postWrapper}
        style={i % 2 == 0 ? { background: "white" } : { background: "#F2F2F2" }}
        onClick={open}
        ref={ref2}
      >
        <div className={styles.postLeft}>
          <h2>{post.nwsbeitrag ? "NEWS" : <>#{i + 1}</>}</h2>
          <h2>{dateFormattedDE(post.header.date)}</h2>
        </div>
        <div className={styles.postRight}>
          <span>
            <h2>{post.header.titel.titleDE}</h2>
            <p>{!post.nwsbeitrag && post.header.subtitle.subtitleDE}</p>
          </span>
          <h2
            className={styles.plusAnimation}
            style={
              active
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

      <div style={!active ? hidden : visible} className={styles.postAccordeon}>
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
                      {image.captions?.captionDE}
                    </p>
                  </span>
                ))}
              </span>

              <span className={styles.bildbeitragRight}>
                <PortableText value={post.bildbeitrag.text.textDE} />
              </span>
            </>
          )}

          {/* TEXTBEITRAG */}

          {post.txtbeitrag && (
            <>
              {post.textbeitrag.map((beitrag, i) => (
                <>
                  <span className={styles.textbeitragWrapper}>
                    <span
                      className={styles.textbeitragLeft}
                      style={{ marginBottom: quote.current?.clientHeight }}
                    >
                      <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        effect={"fade"}
                        modules={[EffectFade]}
                        fadeEffect={{ crossFade: true }}
                        loop
                      >
                        {beitrag.images.map((image, i) => (
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
                      <PortableText value={beitrag.textDE} />
                      <div ref={quote} className={styles.quote}>
                        <PortableText value={beitrag.quoteDE} />
                      </div>
                    </span>
                  </span>
                </>
              ))}
            </>
          )}

          {/* NEWSBEITRAG */}

          {post.nwsbeitrag && (
            <>
              <span className={styles.newsbeitragLeft}>
                {post.newsbeitrag.images.map((image, i) => (
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
                      alt={image.captions.captionEN}
                    />
                    <p className={styles.bildunterschrift}>
                      {image.captions?.captionDE}
                    </p>
                  </span>
                ))}
              </span>

              <span className={styles.newsbeitragRight}>
                <PortableText value={post.newsbeitrag.text.textDE} />
              </span>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Blogpost;
