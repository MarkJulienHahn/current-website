import { useState, useEffect } from "react";
import styles from "../styles/Landing.module.css";

const L02_L = ({ changed }) => {
  const [index, setIndex] = useState(null);
  const colorArray = [
    "red",
    "blue",
    "yellow",
    "green",
    "brown",
    "purple",
    "orange",
  ];

  const changeIndex = () => {
    setIndex(Math.floor(Math.random() * colorArray.length));
  };
  return (
    <div
      className={styles.item1}
      style={{
        background: colorArray[index],
        gridColumnStart: "0",
        gridColumnEnd: "9",
        gridRowEnd: "17",
        border: "2px solid red",
      }}
      onClick={changed ? () => changeIndex() : null}
    >
      L02_L
      <div
        className={`${styles.item1} ${styles.c3}`}
        style={{ background: colorArray[null] }}
      >
        <div className={styles.item1}></div>
        <div
          className={styles.item2}
          style={{ background: colorArray[null] }}
        ></div>
        <div className={styles.item3}></div>
        <div className={styles.item4}></div>
      </div>
      <div className={styles.item2}>
        {" "}
        <div className={styles.item1}></div>
        <div className={styles.item2}></div>
        <div className={styles.item3}></div>
        <div className={styles.item4}></div>
      </div>
      <div className={styles.item3}>
        {" "}
        <div className={styles.item1}></div>
        <div className={styles.item2}></div>
        <div className={styles.item3}></div>
        <div className={styles.item4}></div>
      </div>
      <div className={styles.item4}>
        {" "}
        <div className={styles.item1}></div>
        <div className={styles.item2}></div>
        <div className={styles.item3}></div>
        <div className={styles.item4}></div>
      </div>
    </div>
  );
  s;
};

export default L02_L;
