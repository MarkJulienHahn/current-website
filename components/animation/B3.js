import { useState, useEffect } from "react";
import style from "../../styles/Landing.module.css";
import B4 from "../animation/B4";

const Layer03 = ({colorArray, indexB2, changedB2, margin}) => {
  const [indexB3, setIndexB3] = useState(null);
  const [changedB3, setChanged] = useState(null);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const changeIndex = () => {
    if (indexB2 +1 < colorArray.length) 
    {setIndexB3(indexB2 + 1), setChanged(true)}
    else setIndexB3(0), setChanged(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={style.horizontal}
      style={
        // scrollPosition < 450 + margin
          { background: colorArray[indexB3] }
          // : { opacity: 0 }
      }
      onClick={!changedB3 && changedB2 ? () => changeIndex() : null}
      // onMouseEnter={changed && !changedCurrent ? () => changeColor() : null}
    >
      <B4 colorArray={colorArray} changedB3={changedB3} indexB3={indexB3} margin={0}/>
      <B4 colorArray={colorArray} changedB3={changedB3} indexB3={indexB3} margin={0}/>
    </div>
  );
};

export default Layer03;
