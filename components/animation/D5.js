import { useState, useEffect } from "react";
import style from "../../styles/Landing.module.css";

const Layer04 = ({changed, colorArray}) => {
  const [index, setIndex] = useState(null);
  const [changedCurrent, setChanged] = useState(null);

  const changeIndex = () => {
    setIndex(Math.floor(Math.random() * colorArray.length));
  };

  const changeColor = () => {
    setIndex(Math.floor(Math.random() * colorArray.length))
  }

  return (
    <div
      className={style.horizontal}
      style={{ background: colorArray[index] }}
      onMouseEnter={changed && !changedCurrent ? () => changeColor() : null}
      onClick={changed && !changedCurrent ? () => changeIndex() : null}
    >

    </div>
  );
};

export default Layer04;
