import { useState, useEffect } from "react";
import style from "../../styles/Landing.module.css";

const Layer03 = ({ colorArray, color }) => {
  const [index, setIndex] = useState(null);

  const changeColor = () => {
    if (index +1 < colorArray.length) 
    {setIndex(index + 1)}
    else setIndex(0);
  };

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
    ></div>
  );
};

export default Layer03;
