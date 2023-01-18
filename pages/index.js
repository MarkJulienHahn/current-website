import { useState, useEffect, useRef } from "react";

import Div100vh from "react-div-100vh";
import { use100vh } from "react-div-100vh";
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

const Index = ({
  intro,
  about,
  team,
  downloads,
  impressum,
  logos,
  marquee,
}) => {
  const [index, setIndexA] = useState(null);
  const [english, setEnglish] = useState(false);
  const [scrollPosition, setScrollPosition] = useState("");
  const [autoChange, setAutoChange] = useState(true);

  const height = use100vh();

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.35,
  });

  const colorArray = [
    "var(--blue)",
    "var(--red)",
    "var(--green)",
    "var(--pink)",
    "white",
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

  return (
    <>
      <Layout>
        <Nav
          english={english}
          setEnglish={setEnglish}
          refInView={inView}
          colorArray={colorArray}
        />
        <Div100vh>
          <div
            style={{
              height: "100%",
              width: "100vw",
              display: "flex",
              flexWrap: "wrap",
              overflow: "hidden",
              cursor: "pointer",
              background: "white",
              position: "fixed",
            }}
            id="main"
          >
            <div
              className={styles.mainTitle}
              style={{ height: `calc(${height} + 30px)` }}
            >
              <h1>CURRENT</h1>
            </div>

            <A
              colorArray={colorArray}
              indexA={index}
              setIndexA={setIndexA}
              delay={6000}
              autoChange={autoChange}
              setAutoChange={setAutoChange}
            />
            <div className={styles.A_row}>
              <div className={styles.B_row}>
                <B1
                  colorArray={colorArray}
                  delay={6000}
                  margin={100}
                  autoChange={autoChange}
                  setAutoChange={setAutoChange}
                />
                <B1
                  colorArray={colorArray}
                  delay={1800}
                  margin={0}
                  autoChange={autoChange}
                  setAutoChange={setAutoChange}
                />
              </div>
              <div className={styles.C_row}>
                <C2
                  colorArray={colorArray}
                  delay={8000}
                  margin={100}
                  changed={true}
                  autoChange={autoChange}
                  setAutoChange={setAutoChange}
                />{" "}
                <C2
                  colorArray={colorArray}
                  delay={12000}
                  margin={0}
                  hanged={true}
                  autoChange={autoChange}
                  setAutoChange={setAutoChange}
                />
                <C2
                  colorArray={colorArray}
                  delay={4000}
                  margin={50}
                  changed={true}
                  autoChange={autoChange}
                  setAutoChange={setAutoChange}
                />{" "}
                <C2
                  colorArray={colorArray}
                  delay={18000}
                  margin={-50}
                  changed={true}
                  autoChange={autoChange}
                  setAutoChange={setAutoChange}
                />
              </div>
              <div className={styles.D_row}>
                <D3
                  colorArray={colorArray}
                  delay={6000}
                  margin={-50}
                  changed={true}
                  autoChange={autoChange}
                  setAutoChange={setAutoChange}
                />{" "}
                <D3
                  colorArray={colorArray}
                  delay={12000}
                  margin={0}
                  changed={true}
                  autoChange={autoChange}
                  setAutoChange={setAutoChange}
                />
                <D3
                  colorArray={colorArray}
                  delay={2000}
                  margin={50}
                  changed={true}
                  autoChange={autoChange}
                  setAutoChange={setAutoChange}
                />{" "}
                <D3
                  colorArray={colorArray}
                  delay={8000}
                  margin={100}
                  changed={true}
                  autoChange={autoChange}
                  setAutoChange={setAutoChange}
                />
                <D3
                  colorArray={colorArray}
                  delay={18000}
                  margin={50}
                  changed={true}
                  autoChange={autoChange}
                  setAutoChange={setAutoChange}
                />{" "}
                <D3
                  colorArray={colorArray}
                  delay={16000}
                  margin={-50}
                  changed={true}
                  autoChange={autoChange}
                  setAutoChange={setAutoChange}
                />
                <D3
                  colorArray={colorArray}
                  delay={12000}
                  margin={25}
                  changed={true}
                  autoChange={autoChange}
                  setAutoChange={setAutoChange}
                />{" "}
                <D3
                  colorArray={colorArray}
                  delay={32000}
                  margin={0}
                  changed={true}
                  autoChange={autoChange}
                  setAutoChange={setAutoChange}
                />
              </div>
              <div className={styles.E_row}>
                <E3
                  colorArray={colorArray}
                  delay={24000}
                  margin={90}
                  changed={true}
                  autoChange={autoChange}
                  setAutoChange={setAutoChange}
                />{" "}
                <E3
                  colorArray={colorArray}
                  delay={12000}
                  margin={50}
                  changed={true}
                  autoChange={autoChange}
                  setAutoChange={setAutoChange}
                />
                <E3
                  colorArray={colorArray}
                  delay={16000}
                  margin={10}
                  changed={true}
                  autoChange={autoChange}
                  setAutoChange={setAutoChange}
                />{" "}
                <E3
                  colorArray={colorArray}
                  delay={18000}
                  margin={50}
                  hanged={true}
                  autoChange={autoChange}
                  setAutoChange={setAutoChange}
                />{" "}
                <E3
                  colorArray={colorArray}
                  delay={6000}
                  margin={90}
                  changed={true}
                  autoChange={autoChange}
                  setAutoChange={setAutoChange}
                />{" "}
                <E3
                  colorArray={colorArray}
                  delay={22000}
                  margin={20}
                  changed={true}
                  autoChange={autoChange}
                  setAutoChange={setAutoChange}
                />{" "}
                <E3
                  colorArray={colorArray}
                  delay={14000}
                  margin={-100}
                  changed={true}
                  autoChange={autoChange}
                  setAutoChange={setAutoChange}
                />{" "}
                <E3
                  colorArray={colorArray}
                  delay={24000}
                  margin={50}
                  changed={true}
                  autoChange={autoChange}
                  setAutoChange={setAutoChange}
                />{" "}
                <E3
                  colorArray={colorArray}
                  delay={2000}
                  margin={30}
                  changed={true}
                  autoChange={autoChange}
                  setAutoChange={setAutoChange}
                />{" "}
                <E3
                  colorArray={colorArray}
                  delay={14000}
                  margin={20}
                  changed={true}
                  autoChange={autoChange}
                  setAutoChange={setAutoChange}
                />{" "}
                <E3
                  colorArray={colorArray}
                  delay={18000}
                  margin={10}
                  changed={true}
                  autoChange={autoChange}
                  setAutoChange={setAutoChange}
                />{" "}
                <E3
                  colorArray={colorArray}
                  delay={2000}
                  margin={0}
                  changed={true}
                  autoChange={autoChange}
                  setAutoChange={setAutoChange}
                />{" "}
                <E3
                  colorArray={colorArray}
                  delay={12000}
                  margin={20}
                  changed={true}
                  autoChange={autoChange}
                  setAutoChange={setAutoChange}
                />{" "}
                <E3
                  colorArray={colorArray}
                  delay={16000}
                  margin={90}
                  changed={true}
                  autoChange={autoChange}
                  setAutoChange={setAutoChange}
                />{" "}
                <E3
                  colorArray={colorArray}
                  delay={22000}
                  margin={120}
                  changed={true}
                  autoChange={autoChange}
                  setAutoChange={setAutoChange}
                />{" "}
                <E3
                  colorArray={colorArray}
                  delay={8000}
                  margin={80}
                  changed={true}
                  autoChange={autoChange}
                  setAutoChange={setAutoChange}
                />
              </div>
            </div>
          </div>
        </Div100vh>

        <div className="wrapper" ref={ref}>
          <Main
            english={english}
            intro={intro[0]}
            about={about[0]}
            team={team}
            downloads={downloads}
            logos={logos}
            marquee={marquee[0]}
          />

          <Footer english={english} impressum={impressum} />
        </div>
      </Layout>
    </>
  );
};

export default Index;

export async function getServerSideProps() {
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
  const marquee = await client.fetch(`* [_type == "marquee"]{...}`);
  return {
    props: {
      intro,
      about,
      team,
      downloads,
      impressum,
      logos,
      marquee,
    },
  };
}
