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
          image.image.metadata.dimensions.aspectRatio < 1 &&
          styles.sliderImagePortrait
        }
        style={
          image.image.metadata.dimensions.aspectRatio < 1 && width > 1200
            ? {
                height: `${imageRef.current?.clientWidth}px`,
                width: `${
                  imageRef.current?.clientWidth *
                    image.image.metadata.dimensions.aspectRatio -
                  150
                }px`,
              }
            : { height: "auto" }
        }
      >
        <Image
          src={image.image.url}
          layout="responsive"
          width={image.image.metadata.dimensions.width}
          height={image.image.metadata.dimensions.height}
          alt={image.captions?.captionEN}
        />
        <p className={styles.bildunterschrift}>{image.captions?.captionDE}</p>
      </span>
    </span>
  );
};

export default TextPostImageSlide;
