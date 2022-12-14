import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

import A from "../components/animation/A";
import B1 from "../components/animation/B1";
import C2 from "../components/animation/C2";
import D3 from "../components/animation/D3";
import E3 from "../components/animation/E3";

import Nav from "../components/Nav";
import Layout from "../components/Layout";
import Main from "../components/Main";

import Footer from "../components/Footer";

import styles from "../styles/Landing.module.css";

import client from "../client";

const Index = ({ intro, about, team, downloads, impressum, logos }) => {
  const [index, setIndexA] = useState(null);
  const [english, setEnglish] = useState(false);
  const [scrollPosition, setScrollPosition] = useState("");
  const [refInView, setRefInView] = useState(false);

  const ref = useRef(null);

  const colorArray = [
    "var(--blue)",
    "var(--red)",
    "var(--green)",
    "var(--pink)",
    "white"
  ];

  // if (typeof window !== "undefined") {
  //   window.addEventListener("contextmenu", (e) => e.preventDefault());
  // }

  useEffect(() => {
    setIndexA(Math.floor(Math.random() * colorArray.length));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    if (scrollPosition > ref.current.clientHeight) {
      setRefInView(true);
    } else {
      setRefInView(false);
    }
  });

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
          ref={ref}
          id="main"
        >
          <Nav
            english={english}
            setEnglish={setEnglish}
            refInView={refInView}
          />
          <div className={styles.mainTitle}>
            <h1>CURRENT</h1>
          </div>
          <A colorArray={colorArray} indexA={index} setIndexA={setIndexA} />
          {/* <A colorArray={colorArray} indexA={index} setIndexA={setIndexA}/> */}
          <div className={styles.A_row}>
            <div className={styles.B_row}>
              <B1 colorArray={colorArray} delay={9000} />
              <B1 colorArray={colorArray} delay={null} />
            </div>
            <div className={styles.C_row}>
              <C2 colorArray={colorArray} changed={true} />{" "}
              <C2 colorArray={colorArray} changed={true} />
              <C2 colorArray={colorArray} delay={6000} changed={true} />{" "}
              <C2 colorArray={colorArray} changed={true} />
            </div>
            <div className={styles.D_row}>
              <D3 colorArray={colorArray} changed={true} />{" "}
              <D3 colorArray={colorArray} changed={true} />
              <D3 colorArray={colorArray} changed={true} />{" "}
              <D3 colorArray={colorArray} changed={true} />
              <D3 colorArray={colorArray} changed={true} />{" "}
              <D3 colorArray={colorArray} changed={true} />
              <D3 colorArray={colorArray} changed={true} />{" "}
              <D3 colorArray={colorArray} changed={true} />
            </div>
            <div className={styles.E_row}>
              <E3 colorArray={colorArray} changed={true} />{" "}
              <E3 colorArray={colorArray} changed={true} />
              <E3 colorArray={colorArray} changed={true} />{" "}
              <E3 colorArray={colorArray} changed={true} />{" "}
              <E3 colorArray={colorArray} changed={true} />{" "}
              <E3 colorArray={colorArray} changed={true} />{" "}
              <E3 colorArray={colorArray} changed={true} />{" "}
              <E3 colorArray={colorArray} changed={true} />{" "}
              <E3 colorArray={colorArray} changed={true} />{" "}
              <E3 colorArray={colorArray} changed={true} />{" "}
              <E3 colorArray={colorArray} changed={true} />{" "}
              <E3 colorArray={colorArray} changed={true} />{" "}
              <E3 colorArray={colorArray} changed={true} />{" "}
              <E3 colorArray={colorArray} changed={true} />{" "}
              <E3 colorArray={colorArray} changed={true} />{" "}
              <E3 colorArray={colorArray} changed={true} />
            </div>
          </div>
        </div>
        <Main
          english={english}
          intro={intro[0]}
          about={about[0]}
          team={team}
          downloads={downloads}
          logos={logos}
        />

        <Footer english={english} impressum={impressum} />
      </Layout>
    </>
  );
};

export default Index;

export async function getStaticProps() {
  const intro = await client.fetch(`
  * [_type == "intro"]{titleGerman, textGerman, titleEnglish, textEnglish}`);
  const about = await client.fetch(`
  * [_type == "about"]{...}`);
  const team = await client.fetch(`
  * [_type == "team"]|order(orderRank){teamEntry}`);
  const downloads = await client.fetch(`
  * [_type == "downloads"]|order(orderRank){category, "download": download[]{beschreibungDE, beschreibungEN, "file": file.asset->{"extension": extension, "url": url}}}`);
  const impressum = await client.fetch(`
  * [_type == "impressum"]{...}`);
  const logos = await client.fetch(
    `* [_type == "logos"]|order(orderRank){"logo": logo.logo.asset->{"url": url, "height": metadata.dimensions.height, "width": metadata.dimensions.width}}`
  );
  return {
    props: {
      intro,
      about,
      team,
      downloads,
      impressum,
      logos,
    },
    revalidate: 10,
  };
}
