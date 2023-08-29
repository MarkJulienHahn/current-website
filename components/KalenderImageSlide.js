import { useRef } from "react";

import styles from "../styles/Currently.module.css";
import { useSwiper } from "swiper/react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Image from "next/image";

const TextPostImageSlide = ({ image, length }) => {
  const swiper = useSwiper();

  const imageRef = useRef();

  const imageStyle = { display: "flex" };
  const swiperStyle = { display: "flex", cursor: "pointer" };

  const { width } = useWindowDimensions();

  return (
    <span
      style={length > 1 ? swiperStyle : imageStyle}
      onClick={() => swiper.slideNext()}
      ref={imageRef}
    >
      <span
        className={
          image.asset.metadata.dimensions.aspectRatio < 1 &&
          styles.sliderImagePortrait
        }
        style={
          image.asset.metadata.dimensions.aspectRatio < 1 && width > 1200
            ? {
                height: `${imageRef.current?.clientWidth}px`,
                width: `${
                  imageRef.current?.clientWidth *
                    image.image?.metadata.dimensions.aspectRatio -
                  150
                }px`,
              }
            : {
                height: `${imageRef.current?.clientWidth}px`,
                width: `${
                  imageRef.current?.clientWidth *
                    image.image?.metadata.dimensions.aspectRatio -
                  150
                }px`,
              }
        }
      >
        <Image
          src={image.asset.url}
          alt={image?.alt}
          fill
          style={{ objectFit: "cover", paddingBottom: "20px" }}
        />
        <p className={styles.bildunterschrift}>{image.captions?.captionDE}</p>
      </span>
    </span>
  );
};

export default TextPostImageSlide;
