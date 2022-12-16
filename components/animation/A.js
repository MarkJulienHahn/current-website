import { useState, useEffect } from "react";
import style from "../../styles/Landing.module.css";

import A2 from "../animation/A2";

const Layer01 = ({ colorArray, indexA, setIndexA }) => {
  const [index, setIndex] = useState(null);
  const [changedA, setChangedA] = useState(false);

  const changeIndex = () => {
    setIndex(Math.floor(Math.random() * colorArray.length)), setChangedA(true);
  };

  const changeColor = () => {
    if (indexA +1 < colorArray.length) setIndexA(indexA + 1);
    else setIndexA(0);
  };

  useEffect(() => {
    setIndexA(index);
  }, []);

  return (
    <div
      className={style.A}
      style={{ background: colorArray[indexA] }}
      onClick={() => setChangedA(true)}
      onMouseEnter={!changedA ? () => changeColor() : null}
    >
      <div
        style={{
          background: colorArray[index],
          width: "100%",
          height: "100%",
          display: "flex",
        }}
      >
        <A2 colorArray={colorArray} changedA={changedA} indexA={indexA} />
        <A2 colorArray={colorArray} changedA={changedA} indexA={indexA} />
      </div>
    </div>
  );
};

export default Layer01;
