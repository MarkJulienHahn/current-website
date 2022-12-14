import { useState, useEffect } from "react";
import style from "../../styles/Landing.module.css";
import A3 from "../animation/A3";

const A2 = ({changedA, colorArray, indexA}) => {
  const [indexA2, setIndexA2] = useState(null);
  const [changedA2, setChangedA2] = useState(null);

  const changeIndex = () => {
    if (indexA +1 < colorArray.length) 

    {setIndexA2(indexA + 1), setChangedA2(true)}
    else setIndexA2(0);
  };

  // const changeColor = () => {
  //   if (indexA < colorArray.length) 
  //   {setIndexA2(indexA + 1)}
  //   else setIndexA2(0);
  // }

  useEffect(() => {
    if (changedA && !changedA2) {
      setChangedA2(true)
    }
  })

  return (
    <div
      className={style.vertical}
      style={{ background: colorArray[indexA2]}}
      onClick={!changedA2 ? () => changeIndex() : null}
      // onMouseEnter={changedA && !changedA2 ? () => changeColor() : null}
    >
      <A3 colorArray={colorArray} changedA2={changedA2} indexA2={indexA2}/>
      <A3 colorArray={colorArray} changedA2={changedA2} indexA2={indexA2}/>
    </div>
  );
};

export default A2;
