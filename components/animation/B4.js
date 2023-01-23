import { useState, useEffect } from "react";
import style from "../../styles/Landing.module.css";
import B5 from "../animation/B5";

const Layer04 = ({colorArray, indexB3, changedB3, margin}) => {
  const [indexB4, setIndexB4] = useState(null);
  const [changedB4, setChanged] = useState(null);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const changeIndex = () => {
    if (indexB3 +1 < colorArray.length) 
    {setIndexB4(indexB3 + 1), setChanged(true)}
    else setIndexB4(0), setChanged(true);
  };

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
        // scrollPosition < 450 + margin
           { background: colorArray[indexB4] }
          // : { opacity: 0 }
      }
      onClick={!changedB4 && changedB3 ? () => changeIndex() : null}
      // onMouseEnter={changed && !changedCurrent ? () => changeColor() : null}
    >
      <B5 colorArray={colorArray} changedB4={changedB4} indexB4={indexB4}/>
      <B5 colorArray={colorArray} changedB4={changedB4} indexB4={indexB4}/>
    </div>
  );
};

export default Layer04;
