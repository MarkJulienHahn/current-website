import { useState, useEffect } from "react";
import style from "../../styles/Landing.module.css";
import { useInView } from "react-intersection-observer";
import B2 from "../animation/B2";

const Layer01 = ({ colorArray, delay, margin }) => {
  const [indexB1, setIndexB1] = useState(0);
  const [changedB1, setChangedB1] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const changeColor = () => {
    if (indexB1 + 1 < colorArray.length) {
      setIndexB1(indexB1 + 1);
    } else setIndexB1(0);
  };

  useEffect(() => {
    setIndexB1(Math.floor(Math.random() * colorArray.length));
  }, []);

  useEffect(() => {
    if (delay) {
      const interval = setInterval(() => {
        setIndexB1(Math.floor(Math.random() * colorArray.length));
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
      className={style.B1}
      style={
        scrollPosition < 400 + margin
          ? { background: colorArray[indexB1] }
          : { background: "white" }
      }
      onClick={!changedB1 ? () => setChangedB1(true) : null}
    >
      <B2 colorArray={colorArray} changedB1={changedB1} indexB1={indexB1} margin={10} />
      <B2 colorArray={colorArray} changedB1={changedB1} indexB1={indexB1} margin={50} />
    </div>
  );
};

export default Layer01;
