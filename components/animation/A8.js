import { useState } from "react";
import style from "../../styles/Landing.module.css";
import A9 from "../animation/A9";

const A8 = ({ indexA7, changedA7, colorArray }) => {
  const [indexA8, setIndexA8] = useState(null);
  const [changedA8, setChangedA8] = useState(null);

  const changeIndex = () => {
    if (indexA7 +1 < colorArray.length) {
      setIndexA8(indexA7 + 1), setChangedA8(true);
    } else setIndexA8(0), setChangedA8(true);
  };

  const changeColor = () => {
    setIndex(Math.floor(Math.random() * colorArray.length));
  };

  return (
    <div
      className={style.vertical}
      style={{
        background: colorArray[indexA8],
        display: "flex",
        flexWrap: "wrap",
      }}
      onClick={changedA7 && !changedA8 ? () => changeIndex() : null}
      // onMouseEnter={changedCurrent ? () => changeColor() : null}
    >
      <A9 colorArray={colorArray} changedA8={changedA8} indexA8={indexA8} />
      <A9 colorArray={colorArray} changedA8={changedA8} indexA8={indexA8} />    
    </div>
  );
};

export default A8;
