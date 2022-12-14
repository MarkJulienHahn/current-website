import { useState, useEffect } from "react";
import style from "../../styles/Landing.module.css";
import A5 from "../animation/A5";

const A4 = ({ indexA3, changedA3, colorArray }) => {
  const [indexA4, setIndexA4] = useState(null);
  const [changedA4, setChangedA4] = useState(null);

  const changeIndex = () => {
    if (indexA3 +1 < colorArray.length) {
      setIndexA4(indexA3 + 1), setChangedA4(true);
    } else setIndexA4(0), setChangedA4(true);
  };

  // const changeColor = () => {
  //   setIndex(Math.floor(Math.random() * colorArray.length));
  // };

  // useEffect(() => {
  //   if (changedA3 && !changedA4) {
  //     setChangedA4(true);
  //   }
  // });

  return (
    <div
      className={style.vertical}
      style={{ background: colorArray[indexA4] }}
      onClick={changedA3 && !changedA4 ? () => changeIndex() : null}
      // onMouseEnter={changedCurrent ? () => changeColor() : null}
    >
      <A5 colorArray={colorArray} changedA4={changedA4} indexA4={indexA4} />
      <A5 colorArray={colorArray} changedA4={changedA4} indexA4={indexA4} />
    </div>
  );
};

export default A4;
