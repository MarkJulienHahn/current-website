import { useState, useEffect } from "react";
import A from "../components/A";
import B1 from "../components/B1";
import C2 from "../components/C2";
import D3 from "../components/D3";
import E3 from "../components/E3";
import Layout from "../components/Layout";

import styles from "../styles/Landing.module.css";

const Index = () => {
  const [index, setIndex] = useState(null);
  const colorArray = [
    "#f099cd",
    "#1d480f",
    "white",
    "#eb0000",
    "#50b8f9",
    "#ec4f27",
  ];

  if (typeof window !== "undefined") {
    window.addEventListener("contextmenu", (e) => e.preventDefault());
  }

  useEffect(() => {
    setIndex(Math.floor(Math.random() * colorArray.length));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(Math.floor(Math.random() * colorArray.length));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Layout>
        <div
          style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            flexWrap: "wrap",
            overflow: "hidden",
          }}
        >
          <A indexA={index} />
          <A indexA={index} />
          <div className={styles.A_row}>
            <div className={styles.B_row}>
              <B1 delay={9000} />
              <B1 delay={null} />
            </div>
            <div className={styles.C_row}>
              <C2 changed={true} /> <C2 changed={true} />
              <C2 delay={6000} changed={true} /> <C2 changed={true} />
            </div>
            <div className={styles.D_row}>
              <D3 changed={true} /> <D3 changed={true} />
              <D3 changed={true} /> <D3 changed={true} />
              <D3 changed={true} /> <D3 changed={true} />
              <D3 changed={true} /> <D3 changed={true} />
            </div>
            <div className={styles.E_row}>
              <E3 changed={true} /> <E3 changed={true} />
              <E3 changed={true} /> <E3 changed={true} /> <E3 changed={true} />{" "}
              <E3 changed={true} /> <E3 changed={true} /> <E3 changed={true} />{" "}
              <E3 changed={true} /> <E3 changed={true} /> <E3 changed={true} />{" "}
              <E3 changed={true} /> <E3 changed={true} /> <E3 changed={true} />{" "}
              <E3 changed={true} /> <E3 changed={true} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Index;
