import { useState } from "react";
import styles from "../../styles/Landing.module.css";

const Layer07 = ({colorArray, indexB6, changedB6}) => {
  const [indexB7, setIndexB7] = useState(null);
  const [changedB7, setChanged] = useState(null);

  const changeIndex = () => {
    if (indexB7 +2 < colorArray.length) 
    {setIndexB7(indexB7 +2)}
    else setIndexB7(0);
  };
  
  const changeColor = () => {
    setIndex(Math.floor(Math.random() * colorArray.length))
  }

  console.log(changedB6)

  return (
    <div
      className={styles.horizontal}
      style={{ background: colorArray[indexB7]}}
      onClick={changedB6 ? () => changeIndex() : null}
      // onMouseEnter={changed && !changedCurrent ? () => changeColor() : null}
    ></div>
  );
};

export default Layer07;
