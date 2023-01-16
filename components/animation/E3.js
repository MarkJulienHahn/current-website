import { useState, useEffect } from "react";
import style from "../../styles/Landing.module.css";

const Layer03 = ({ colorArray, delay, margin }) => {
  const [index, setIndex] = useState(null);

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
    if (delay) {
      const interval = setInterval(() => {
        setIndex(Math.floor(Math.random() * colorArray.length));
      }, delay);
      return () => clearInterval(interval);
    }
  }, []);

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
        scrollPosition < 550 + margin
          ? { background: colorArray[index] }
          : { background: "white" }
      }
      onClick={() => changeColor()}
    ></div>
  );
};

export default Layer03;
