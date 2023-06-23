import { useState, useEffect, useRef } from "react";

import Div100vh from "react-div-100vh";
import { use100vh } from "react-div-100vh";
import { useInView } from "react-intersection-observer";

import A from "../components/animation/A";
import B1 from "../components/animation/B1";
import C2 from "../components/animation/C2";
import D3 from "../components/animation/D3";
import E3 from "../components/animation/E3";

import Layout from "../components/Layout";
import Main from "../components/Main";
import Footer from "../components/Footer";
import styles from "../styles/Landing.module.css";
import client from "../client";

const Index = ({
  editorial,
  about,
  team,
  presse,
  downloads,
  currently,
  impressum,
  programm,
  beteiligte,
  logos,
  marquee,
  english,
  colorArray,
  setShowNav
}) => {
  const [index, setIndexA] = useState(null);

  // const [scrollPosition, setScrollPosition] = useState("");
  const [autoChange, setAutoChange] = useState(true);

  const height = use100vh();

  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    setIndexA(Math.floor(Math.random() * colorArray.length));
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollPosition(window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // });

  useEffect(() => {
    inView ? setShowNav(true) : setShowNav(false)
  }, [inView])

  return (
    <>
      <Layout>
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
                  margin={10}
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
                  margin={10}
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
                  margin={10}
                  changed={true}
                  autoChange={autoChange}
                  setAutoChange={setAutoChange}
                />
              </div>
              <div className={styles.D_row}>
                <D3
                  colorArray={colorArray}
                  delay={6000}
                  margin={5}
                  changed={true}
                  autoChange={autoChange}
                  setAutoChange={setAutoChange}
                />{" "}
                <D3
                  colorArray={colorArray}
                  delay={12000}
                  margin={1}
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
                  margin={50}
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
                  margin={1}
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
            editorial={editorial[0]}
            about={about[0]}
            team={team}
            presse={presse}
            downloads={downloads}
            logos={logos}
            marquee={marquee[0]}
            programm={programm}
            beteiligte={beteiligte}
            currently={currently}
          />

          <Footer english={english} impressum={impressum} />
        </div>
      </Layout>
    </>
  );
};

export default Index;

export async function getServerSideProps() {
  const editorial = await client.fetch(`
  * [_type == "editorial"]{...}`);

  const about = await client.fetch(`
  * [_type == "about"]{...}`);

  const team = await client.fetch(`
  * [_type == "team"]|order(orderRank){teamEntry}`);
  const presse = await client.fetch(`* [_type == "presse"]{...}`);

  const downloads = await client.fetch(`
  * [_type == "downloads"]|order(orderRank){category, "download": download[]{beschreibungDE, beschreibungEN, "file": file.asset->{"extension": extension, "url": url}}}`);

  const impressum = await client.fetch(`
  * [_type == "impressum"]{...}`);

  const logos = await client.fetch(
    `* [_type == "logos"]|order(orderRank){"logo": logo.logo.asset->{"url": url, "height": metadata.dimensions.height, "width": metadata.dimensions.width}}`
  );

  const marquee = await client.fetch(`* [_type == "marquee"]{...}`);

  const programm = await client.fetch(`
  *[_type == "programm"]{..., "standort": standort->{...}, "beteiligte": beteiligte[]->{...}, "formate": formate[]->{...},"bilder": bilder[]{..., "asset": asset->{...}}}`);

  const beteiligte = await client.fetch(`
  *[_type == "beteiligte"]{..., "bild": bild{..., "asset": asset->{...}}}`);

  const currently = await client.fetch(
    `* [_type == "currently"] {..., "textbeitrag": textbeitrag[]{..., "images": images[]{..., "image": image.asset->{...}}}, "bildbeitrag": bildbeitrag{..., "images": images[]{..., "image": image.asset->{...}}}, "newsbeitrag": newsbeitrag{..., "images": images[]{..., "image": image.asset->{...}}}} | order(header.date desc)`
  );

  return {
    props: {
      editorial,
      about,
      team,
      presse,
      downloads,
      impressum,
      logos,
      marquee,
      programm,
      beteiligte,
      currently
    },
  };
}
