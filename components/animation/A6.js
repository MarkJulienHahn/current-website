import { useState } from "react";
import style from "../../styles/Landing.module.css";
import A7 from "../animation/A7";

const A6 = ({ indexA5, changedA5, colorArray }) => {
  const [indexA6, setIndexA6] = useState(null);
  const [changedA6, setChangedA6] = useState(null);

  const changeIndex = () => {
    if (indexA5 + 1 < colorArray.length) {
      setIndexA6(indexA5 + 1), setChangedA6(true);
    } else setIndexA6(0), setChangedA6(true);
  };

  const changeColor = () => {
    setIndex(Math.floor(Math.random() * colorArray.length));
  };

  return (
    <div
      className={style.vertical}
      style={{
        background: colorArray[indexA6],
        display: "flex",
        flexWrap: "wrap",
      }}
      onClick={changedA5 && !changedA6 ? () => changeIndex() : null}
      // onMouseEnter={changedCurrent ? () => changeColor() : null}
    >
      <A7 colorArray={colorArray} changedA6={changedA6} indexA6={indexA6} margin={10}/>
      <A7 colorArray={colorArray} changedA6={changedA6} indexA6={indexA6} margin={50}/>
      <A7 colorArray={colorArray} changedA6={changedA6} indexA6={indexA6} margin={30}/>
      <A7 colorArray={colorArray} changedA6={changedA6} indexA6={indexA6} margin={20}/>
    </div>
  );
};

export default A6;
