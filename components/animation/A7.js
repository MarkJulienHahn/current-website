import { useState } from "react";
import style from "../../styles/Landing.module.css";
import A8 from "../animation/A8";

const A7 = ({ indexA6, changedA6, colorArray }) => {
  const [indexA7, setIndexA7] = useState(null);
  const [changedA7, setChangedA7] = useState(null);

  const changeIndex = () => {
    if (indexA6 +1 < colorArray.length) {
      setIndexA7(indexA6 + 1), setChangedA7(true);
    } else setIndexA7(0), setChangedA7(true);
  };

  const changeColor = () => {
    setIndex(Math.floor(Math.random() * colorArray.length));
  };
  return (
    <div
      className={style.horizontal}
      style={{ background: colorArray[indexA7] }}
      onClick={changedA6 && !changedA7 ? () => changeIndex() : null}
      // onMouseEnter={changedCurrent ? () => changeColor() : null}
    >
      <A8 colorArray={colorArray} changedA7={changedA7} indexA7={indexA7} />
      <A8 colorArray={colorArray} changedA7={changedA7} indexA7={indexA7} />     
    </div>
  );
};

export default A7;
