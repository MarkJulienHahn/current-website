import { useState } from "react";
import styles from "../../styles/Landing.module.css";

const Layer07 = ({changed, colorArray}) => {
  const [index, setIndex] = useState(null);
  const [changedCurrent, setChanged] = useState(null);

  const changeIndex = () => {
    setIndex(Math.floor(Math.random() * colorArray.length)), setChanged(true);
  };
  
  const changeColor = () => {
    setIndex(Math.floor(Math.random() * colorArray.length))
  }

  return (
    <div
      className={styles.horizontal}
      style={{ background: colorArray[index]}}
      onClick={changed && !changedCurrent ? () => changeIndex() : null}
      onMouseEnter={changed && !changedCurrent ? () => changeColor() : null}
    ></div>
  );
};

export default Layer07;
