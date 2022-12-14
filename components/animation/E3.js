import { useState, useEffect } from "react";
import style from "../../styles/Landing.module.css";

const Layer03 = ({ colorArray, color }) => {
  const [index, setIndex] = useState(null);

  const changeColor = () => {
    setIndex(Math.floor(Math.random() * colorArray.length))
  }

  useEffect(() => {
    setIndex(Math.floor(Math.random() * colorArray.length));
  }, []);

  return (
    <div
      className={style.vertical}
      style={
        color
          ? { background: colorArray[color] }
          : { background: colorArray[index] }
      }
      onClick={() => changeColor()}
      onMouseEnter={() => changeColor()}
    ></div>
  );
};

export default Layer03;
