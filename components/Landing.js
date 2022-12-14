import { useState, useEffect } from "react";

import styles from "../../styles/Landing.module.css";
import L01_T from "./L01_T";
import L01_B from "./L01_B";

// const color = "red";
// const styleStates = [
//   { width: "100%", height: "50%", background: "red" },
//   { width: "50%", height: "50%", background: "blue" },
//   { width: "50%", height: "50%", background: "blue" },
// ];

const Landing = () => {
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
    <div className={styles.landingInner}>
      <div
        className={styles.item1}
        style={{
          background: colorArray[Math.floor(Math.random() * colorArray.length)],
        }}
      >
        {/* <L01_T />
        <L01_B /> */}

        {/* <div className={`${styles.item3} ${styles.c2}`}>
          {" "}
          <div className={styles.item1}>
            {" "}
            <div className={styles.item1}></div>
            <div className={styles.item2}></div>
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
        </div> */}
        {/* <div className={styles.item4}>
          {" "}
          <div className={styles.item1}>
            {" "}
            <div className={styles.item1}></div>
            <div className={styles.item2}></div>
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
      </div>
      <div className={styles.item2}>
        {" "}
        <div className={styles.item1}>
          {" "}
          <div className={styles.item1}>
            {" "}
            <div className={styles.item1}></div>
            <div className={styles.item2}></div>
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
        <div className={styles.item2}>
          {" "}
          <div className={styles.item1}>
            {" "}
            <div className={styles.item1}></div>
            <div className={styles.item2}></div>
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
        <div className={styles.item3}>
          {" "}
          <div className={styles.item1}>
            {" "}
            <div className={styles.item1}></div>
            <div className={styles.item2}></div>
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
        <div className={styles.item4}>
          {" "}
          <div className={styles.item1}>
            {" "}
            <div className={styles.item1}></div>
            <div className={styles.item2}></div>
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
      </div>
      <div className={styles.item3}>
        {" "}
        <div className={styles.item1}>
          {" "}
          <div className={styles.item1}>
            {" "}
            <div className={styles.item1}></div>
            <div className={styles.item2}></div>
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
        <div className={styles.item2}>
          {" "}
          <div className={styles.item1}>
            {" "}
            <div className={styles.item1}></div>
            <div className={styles.item2}></div>
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
        <div className={styles.item3}>
          {" "}
          <div className={styles.item1}>
            {" "}
            <div className={styles.item1}></div>
            <div className={styles.item2}></div>
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
        <div className={styles.item4}>
          {" "}
          <div className={styles.item1}>
            {" "}
            <div className={styles.item1}></div>
            <div className={styles.item2}></div>
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
      </div>
      <div className={styles.item4}> */}
        {" "}
        <div className={styles.item1}>
          {" "}
          <div className={styles.item1}>
            {" "}
            <div className={styles.item1}></div>
            <div className={styles.item2}></div>
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
        <div className={styles.item2}>
          {" "}
          <div className={styles.item1}>
            {" "}
            <div className={styles.item1}></div>
            <div className={styles.item2}></div>
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
        <div className={styles.item3}>
          {" "}
          <div className={styles.item1}>
            {" "}
            <div className={styles.item1}></div>
            <div className={styles.item2}></div>
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
        <div className={styles.item4}>
          {" "}
          <div className={styles.item1}>
            {" "}
            <div className={styles.item1}></div>
            <div className={styles.item2}></div>
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
      </div>
    </div>
  );
};

export default Landing;
