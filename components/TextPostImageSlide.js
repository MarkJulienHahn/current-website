import styles from "../styles/Currently.module.css";
import { useSwiper } from "swiper/react";
import Image from "next/image";

const TextPostImageSlide = ({ image, length }) => {
  const swiper = useSwiper();

  const imageStyle = { display: "flex" };
  const swiperStyle = { display: "flex", cursor: "pointer" };

  return (
    <span
      style={length > 1 ? swiperStyle : imageStyle}
      onClick={() => swiper.slideNext()}
    >
      <span
        className={
          image.image.metadata.dimensions.height >
            image.image.metadata.dimensions.width && styles.sliderImagePortrait
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
