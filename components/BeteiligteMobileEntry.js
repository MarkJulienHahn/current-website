import { useRef, useState, useEffect } from "react";

import styles from "../styles/Beteiligte.module.css";

import Entry from "./Entry";

const BeteiligteMobileEntry = ({
  programm,
  beteiligte,
  english,
  i,
  beteiligter,
  index,
  setIndex,
}) => {
  const ref = useRef();
  const scroll = () => ref.current.scrollIntoView();

  return (
    <>
      <div style={{ transform: "translateY(-30px)" }} ref={ref}></div>
      <div
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
        onClick={index == i ? () => setIndex(null) : () => setIndex(i)}
      >
        <h2>{beteiligter.name}</h2>
      </div>
      {index == i && (
        <div className={styles.content}>
          <Entry
            scroll={scroll}
            english={english}
            beteiligter={beteiligte[index]}
            programm={programm}
          />
        </div>
      )}
    </>
  );
};

export default BeteiligteMobileEntry;
