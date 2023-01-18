import { useState, useEffect } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions"
import style from "../../styles/Landing.module.css";
import D4 from "../animation/D4";

const Layer03 = ({ changed, colorArray, delay, margin, autoChange, setAutoChange }) => {
  const [indexD3, setIndexD3] = useState(null);
  const [changedD3, setChangedD3] = useState(false);
  const { height } = useWindowDimensions();

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const changeIndex = () => {
    if (indexD3 +1 < colorArray.length) 

    {setIndexD3(indexD3 + 1), setChangedD3(true)}
    else setIndexD3(0), setChangedD3(true);
  };

  const changeColor = () => {
    if (indexD3 + 1 < colorArray.length) {
      setIndexD3(indexD3 + 1), setAutoChange(false);
    } else setIndexD3(0), setAutoChange(false);
  };

  useEffect(() => {
    setIndexD3(Math.floor(Math.random() * colorArray.length));
  }, []);

  useEffect(() => {
    if (delay && autoChange) {
      const interval = setInterval(() => {
        setIndexD3(Math.floor(Math.random() * colorArray.length));
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
        scrollPosition < height * 1.6 + margin
          ? { background: colorArray[indexD3] }
          : { background: "white" }
      }
      onClick={() => setChangedD3(true)}
      onMouseEnter={!changedD3 ? () => changeColor() : null}
    >
      <D4 colorArray={colorArray} changedD3={changedD3} indexD3={indexD3} />
      <D4 colorArray={colorArray} changedD3={changedD3} indexD3={indexD3} />
    </div>
  );
};

export default Layer03;
