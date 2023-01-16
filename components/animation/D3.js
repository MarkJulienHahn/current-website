import { useState, useEffect } from "react";
import style from "../../styles/Landing.module.css";
import D4 from "../animation/D4";

const Layer03 = ({ changed, colorArray, delay, margin }) => {
  const [indexD3, setIndexD3] = useState(null);
  const [changedD3, setChanged] = useState(true);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    setIndexD3(Math.floor(Math.random() * colorArray.length));
  }, []);

  useEffect(() => {
    if (delay) {
      const interval = setInterval(() => {
        setIndexD3(Math.floor(Math.random() * colorArray.length));
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
        scrollPosition < 450 + margin
          ? { background: colorArray[indexD3] }
          : { background: "white" }
      }
      // onClick={changed && !changedCurrent ? () => changeIndex() : null}
      // onMouseEnter={!changedCurrent ? () => changeColor() : null}
    >
      <D4 colorArray={colorArray} changedD3={changedD3} indexD3={indexD3} />
      <D4 colorArray={colorArray} changedD3={changedD3} indexD3={indexD3} />
    </div>
  );
};

export default Layer03;
