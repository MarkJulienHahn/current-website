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
  return (
    <>
      {index != i && (
        <div
          className={`${styles.nameRow} ${i % 2 == 0 && styles.nameRowGrey} ${
            beteiligter.different && styles.nameRowGreen
          }`}
          style={
            index == i
              ? beteiligter.different
                ? { background: "var(--pink)" }
                : { background: "var(--blue)" }
              : { background: "" }
          }
          onClick={index == i ? () => setIndex(null) : () => setIndex(i)}
        >
          <h2>{beteiligter.name}</h2>
        </div>
      )}
      {index == i && (
        <div className={styles.mobileContent}>
          <Entry
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
