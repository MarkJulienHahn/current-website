import { useState } from "react";
import style from "../../styles/Landing.module.css";
import A6 from "../animation/A6";

const A5 = ({ indexA4, changedA4, colorArray }) => {
  const [indexA5, setIndexA5] = useState(null);
  const [changedA5, setChangedA5] = useState(null);

  const changeIndex = () => {
    if (indexA4 +1 < colorArray.length) {
      setIndexA5(indexA4 + 1), setChangedA5(true);
    } else setIndexA5(0), setChangedA5(true);
  };

  const changeColor = () => {
    setIndex(Math.floor(Math.random() * colorArray.length));
  };

  return (
    <div
      className={style.horizontal}
      style={{ background: colorArray[indexA5] }}
      onClick={changedA4 && !changedA5 ? () => changeIndex() : null}
      // onMouseEnter={changedCurrent ? () => changeColor() : null}
    >
      <A6 colorArray={colorArray} changedA5={changedA5} indexA5={indexA5} />
      <A6 colorArray={colorArray} changedA5={changedA5} indexA5={indexA5} />
    </div>
  );
};

export default A5;
