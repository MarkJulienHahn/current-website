import { useEffect, useRef } from "react";
import styles from "../styles/Beteiligte.module.css";

const BeteiligteRow = ({ beteiligter, i, index, setIndex }) => {
  const ref = useRef();

  const scroll = () => {
    ref.current?.scrollIntoView(), console.log("scroll");
  };

  const open = () => {
    setIndex(i), scroll();
  };

  const initialScroll = () => {
    setTimeout(scroll, 1000);
  };

  useEffect(() => {
    index == i ? scroll() : "";
  }, [index]);

  return (
    <>
      <div ref={ref} className="anchor"></div>
      <div
        key={i}
        className={`${styles.nameRow} ${i % 2 == 0 && styles.nameRowGrey} ${
          beteiligter.different && styles.nameRowGreen
        }`}
        style={
          index == i
            ? beteiligter.different
              ? { background: "var(--green)" }
              : { background: "var(--blue)" }
            : { background: "" }
        }
        onClick={open}
      >
        <h2>{beteiligter.name}</h2>
      </div>
    </>
  );
};

export default BeteiligteRow;
