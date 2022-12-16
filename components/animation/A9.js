import { useState } from "react";
import style from "../../styles/Landing.module.css";

const A9 = ({ indexA8, changedA8, colorArray }) => {
  const [indexA9, setIndexA9] = useState(null);
  const [changedA9, setChangedA9] = useState(null);

  const changeIndex = () => {
    if (indexA9 +1 < colorArray.length) {
      setIndexA9(indexA9 + 1);
    } else setIndexA9(0);
  };

  const changeColor = () => {
    setIndex(Math.floor(Math.random() * colorArray.length));
  };

  return (
    <div
      className={style.horizontal}
      style={{
        background: colorArray[indexA9]
      }}
      onClick={changedA8 ? () => changeIndex() : null}
      // onMouseEnter={changedCurrent ? () => changeColor() : null}
    >
    </div>
  );
};

export default A9;
