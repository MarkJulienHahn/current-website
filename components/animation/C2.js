import { useState, useEffect } from "react";
import useWindowDimensions from "../../Hooks/useWindowDimensions"
import style from "../../styles/Landing.module.css";
import C3 from "../animation/C3";

const C2 = ({changed, delay, colorArray, margin, autoChange, setAutoChange}) => {
  const [indexC2, setIndexC2] = useState(0);
  const [changedC2, setChanged] = useState(false);
  const { height } = useWindowDimensions();

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const changeIndex = () => {
    if (indexC2 +1 < colorArray.length) 
    {setIndexC2(indexC2 + 1), setChanged(true), setAutoChange(false);}
    else setIndexC2(0), setChanged(true), setAutoChange(false);;
  };

  const changeColor = () => {
    if (indexC2 +1 < colorArray.length) 
    {setIndexC2(indexC2 + 1)}
    else setIndexC2(0);
  }

  useEffect(() => {
    setIndexC2(Math.floor(Math.random() * colorArray.length));
  }, []);

  useEffect(() => {
    if (delay && autoChange) {
      const interval = setInterval(() => {
        setIndexC2(Math.floor(Math.random() * colorArray.length));
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
      className={style.horizontal_frst}
      style={
        scrollPosition < (height / 2) + margin
          ? { background: colorArray[indexC2] }
          : { opacity: 0 }
      }
      onClick={!changedC2 ? () => setChanged(true) : null}
      onMouseEnter={!changedC2 ? () => changeColor() : null}
    >
      <C3 colorArray={colorArray} changedC2={changedC2} indexC2={indexC2}/>
      <C3 colorArray={colorArray} changedC2={changedC2} indexC2={indexC2}/>
    </div>
  );
};

export default C2;
