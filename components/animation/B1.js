import { useState, useEffect } from "react";
import style from "../../styles/Landing.module.css";

import B2 from "../animation/B2";

const Layer01 = ({ colorArray, delay }) => {
  const [indexB1, setIndexB1] = useState(0);
  const [changedB1, setChangedB1] = useState(false);

  const changeColor = () => {
    if (indexB1 +1 < colorArray.length) 
    {setIndexB1(indexB1 + 1)}
    else setIndexB1(0);
  };

  useEffect(() => {
    setIndexB1(Math.floor(Math.random() * colorArray.length));
  }, []);

  // useEffect(() => {
  //   if (delay) {
  //     const interval = setInterval(() => {
  //       setIndex(Math.floor(Math.random() * colorArray.length));
  //     }, delay);
  //     return () => clearInterval(interval);
  //   }
  // }, []);


  return (
    <div
      className={style.B1}
      style={{ background: colorArray[indexB1] }}
      onClick={!changedB1 ? () => setChangedB1(true) : null}
      onMouseEnter={!changedB1 ? changeColor : () => {}}
    >
      <B2 colorArray={colorArray} changedB1={changedB1} indexB1={indexB1}/>
      <B2 colorArray={colorArray} changedB1={changedB1} indexB1={indexB1}/>
    </div>
  );
};

export default Layer01;
