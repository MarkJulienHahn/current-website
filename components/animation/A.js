import { useState, useEffect } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import style from "../../styles/Landing.module.css";
import A2 from "../animation/A2";

const Layer01 = ({
  colorArray,
  indexA,
  setIndexA,
  delay,
  autoChange,
  setAutoChange,
}) => {
  const [index, setIndex] = useState(null);
  const [changedA, setChangedA] = useState(false);
  const { height } = useWindowDimensions();

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const changeIndex = () => {
    setIndex(Math.floor(Math.random() * colorArray.length)), setChangedA(true);
  };

  const changeColor = () => {
    if (indexA + 1 < colorArray.length)
      setIndexA(indexA + 1), setAutoChange(false);
    else setIndexA(0), setAutoChange(false);
  };

  useEffect(() => {
    setIndexA(Math.floor(Math.random() * colorArray.length));
  }, []);

  // useEffect(() => {
  //   setIndexA(Math.floor(Math.random() * colorArray.length));
  // });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div
      className={style.A}
      style={
        scrollPosition < 10
          ? { background: colorArray[indexA] }
          : { background: "none" }
      }
      onClick={() => setChangedA(true)}
      onMouseEnter={!changedA ? () => changeColor() : null}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
        }}
      >
        <A2
          colorArray={colorArray}
          changedA={changedA}
          margin={10}
          indexA={indexA}
        />
        <A2
          colorArray={colorArray}
          changedA={changedA}
          margin={100}
          indexA={indexA}
        />
      </div>
    </div>
  );
};

export default Layer01;
