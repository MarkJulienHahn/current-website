import { useState, useEffect } from "react";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import style from "../../styles/Landing.module.css";
import A3 from "../animation/A3";

const A2 = ({ changedA, colorArray, indexA, margin }) => {
  const [indexA2, setIndexA2] = useState(null);
  const [changedA2, setChangedA2] = useState(null);
  const { height } = useWindowDimensions();

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const changeIndex = () => {
    if (indexA + 1 < colorArray.length) {
      setIndexA2(indexA + 1), setChangedA2(true);
    } else setIndexA2(0), setChangedA2(true);
  };

  const changeColor = () => {
    if (indexA2 + 1 < colorArray.length) setIndexA2(indexA2 + 1);
    else setIndexA2(0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      className={style.vertical}
      style={
        scrollPosition < 10
          ? { background: colorArray[indexA2] }
          : { opacity: 0 }
      }
      onClick={!changedA2 ? () => changeIndex() : null}
      // onMouseEnter={changedA2 ? () => changeColor() : null}
    >
      <A3
        colorArray={colorArray}
        changedA2={changedA2}
        margin={-50}
        indexA2={indexA2}
      />
      <A3
        colorArray={colorArray}
        changedA2={changedA2}
        margin={20}
        indexA2={indexA2}
      />
    </div>
  );
};

export default A2;
