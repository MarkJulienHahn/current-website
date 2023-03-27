import { useState, useEffect } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import style from "../../styles/Landing.module.css";
import A4 from "../animation/A4";

const A3 = ({ indexA2, changedA2, colorArray, margin }) => {
  const [indexA3, setIndexA3] = useState(null);
  const [changedA3, setChangedA3] = useState(null);
  const { height } = useWindowDimensions();

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const changeIndex = () => {
    if (indexA2 + 1 < colorArray.length) {
      setIndexA3(indexA2 + 1), setChangedA3(true);
    } else setIndexA3(0), setChangedA3(true);
  };

  const changeColor = () => {
    if (indexA3 + 1 < colorArray.length) setIndexA3(indexA3 + 1);
    else setIndexA3(0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={style.horizontal}
      style={
        scrollPosition < 10
          ? { background: colorArray[indexA3] }
          : { background: "none" }
      }
      onClick={changedA2 && !changedA3 ? () => changeIndex() : null}
      // onMouseEnter={changedA2 ? () => changeColor() : null}
    >
      <A4
        colorArray={colorArray}
        changedA3={changedA3}
        indexA3={indexA3}
        margin={10}
      />
      <A4
        colorArray={colorArray}
        changedA3={changedA3}
        indexA3={indexA3}
        margin={10}
      />
    </div>
  );
};

export default A3;
