import { useState, useEffect } from "react";
import style from "../../styles/Landing.module.css";
import B3 from "../animation/B3";

const B2 = ({colorArray, indexB1, margin}) => {
  const [indexB2, setIndexB2] = useState(null);
  const [changedB2, setChanged] = useState(null);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const changeIndex = () => {
    if (indexB1 +1 < colorArray.length) 
    {setIndexB2(indexB1 + 1), setChanged(true)}
    else setIndexB2(0), setChanged(true);
  };

  const changeColor = () => {
    if (index < colorArray.length) 
    {setIndex(index + 1)}
    else setIndex(0);
  }

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
           { background: colorArray[indexB2] }
          // : { opacity: 0 }
      }
      onClick={!changedB2 ? () => changeIndex() : null}
      // onMouseEnter={index != null ? () => changeColor() : null}
    >
      <B3 colorArray={colorArray} changedB2={changedB2} indexB2={indexB2} margin={10}/>
      <B3 colorArray={colorArray} changedB2={changedB2} indexB2={indexB2} margin={20}/>
    </div>
  );
};

export default B2;
