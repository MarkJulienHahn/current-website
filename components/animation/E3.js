import { useState, useEffect } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions"
import style from "../../styles/Landing.module.css";

const Layer03 = ({ colorArray, delay, margin, autoChange, setAutoChange }) => {
  const [index, setIndex] = useState(null);
  const { height } = useWindowDimensions();

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const changeColor = () => {
    if (index +1 < colorArray.length) 
    {setIndex(index + 1)}
    else setIndex(0);
  };

  useEffect(() => {
    setIndex(Math.floor(Math.random() * colorArray.length));
  }, []);

  useEffect(() => {
    if (delay && autoChange) {
      const interval = setInterval(() => {
        setIndex(Math.floor(Math.random() * colorArray.length));
      }, delay);
      return () => clearInterval(interval);
    }
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={style.vertical}
      style={
        scrollPosition < height * 1.2 + margin
          ? { background: colorArray[index] }
          : { background: "#ddd" }
      }
      onClick={() => changeColor()}
      onMouseEnter={() => changeColor()}
    ></div>
  );
};

export default Layer03;
