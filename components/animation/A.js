import { useState, useEffect } from "react";
import style from "../../styles/Landing.module.css";
import { useInView } from "react-intersection-observer";
import A2 from "../animation/A2";

const Layer01 = ({ colorArray, indexA, setIndexA, delay }) => {
  const [index, setIndex] = useState(null);
  const [changedA, setChangedA] = useState(false);

  const { ref: ref, inView: refIsVisible } = useInView({
    threshold: 0.6,
  });

  const changeIndex = () => {
    setIndex(Math.floor(Math.random() * colorArray.length)), setChangedA(true);
  };

  const changeColor = () => {
    if (indexA +1 < colorArray.length) setIndexA(indexA + 1);
    else setIndexA(0);
  };

  useEffect(() => {
    setIndexA(index);
  }, []);

  useEffect(() => {
    if (delay) {
      const interval = setInterval(() => {
        setIndex(Math.floor(Math.random() * colorArray.length));
      }, delay);
      return () => clearInterval(interval);
    }
  }, []);




  return (
    <div
      className={style.A}
      style={ refIsVisible ? { background: colorArray[indexA] } : { background: "white"}}
      onClick={() => setChangedA(true)}
      ref={ref}
      // onMouseEnter={!changedA ? () => changeColor() : null}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
        }}
      >
        <A2 colorArray={colorArray} changedA={changedA} margin={50} indexA={indexA} />
        <A2 colorArray={colorArray} changedA={changedA} margin={70} indexA={indexA} />
      </div>
    </div>
  );
};

export default Layer01;
