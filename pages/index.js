import { use100vh } from "react-div-100vh";

import Layout from "../components/Layout";
import Main from "../components/Main";
import Footer from "../components/Footer";
import styles from "../styles/Landing.module.css";
import client from "../client";
import WeatherMap from "../components/WeatherMap";
import GradientCanvas from "../components/GradientCanvas";

const Index = ({
  editorial,
  about,
  presse,
  downloads,
  currently,
  impressum,
  logos,
  english,
}) => {
  const height = use100vh();

  return (
    <>
      <Layout>

        <div
          style={{
            width: "100vw",
            display: "flex",
            flexWrap: "wrap",
            overflow: "hidden",
            cursor: "pointer",
          }}
          id="main"
        >
          <div
            className={styles.mainTitle}
            style={{ height: `calc(${height} + 30px)` }}
          >
            <h1>CURRENT</h1>
          </div>
        </div>

        <div className="wrapper">
          <Main
            english={english}
            editorial={editorial[0]}
            about={about[0]}
            presse={presse}
            downloads={downloads}
            logos={logos[0]}
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
  * [_type == "editorial25"]{...}`);

  const about = await client.fetch(`
  * [_type == "about25"]{...}`);

  const presse = await client.fetch(`* [_type == "presse25"]{...}`);

  const downloads = await client.fetch(`
  * [_type == "downloads25"]|order(orderRank){category, "download": download[]{beschreibungDE, beschreibungEN, "file": file.asset->{"extension": extension, "url": url}}}`);

  const impressum = await client.fetch(`
  * [_type == "impressum25"]{...}`);

  const logos = await client.fetch(`
  * [_type == "logos25"]{"logosFoerderer": logosFoerderer[].logo.asset->{...},"logosSponsoren": logosSponsoren[].logo.asset->{...}, "logosMedia": logosMedia[].logo.asset->{...}, "logosCoop": logosCoop[].logo.asset->{...}, ...}`);

  const currently = await client.fetch(
    `* [_type == "currently"] {..., "textbeitrag": textbeitrag[]{..., "images": images[]{..., "image": image.asset->{...}}}, "bildbeitrag": bildbeitrag{..., "images": images[]{..., "image": image.asset->{...}}}, "newsbeitrag": newsbeitrag{..., "images": images[]{..., "image": image.asset->{...}}}} | order(header.date desc)`
  );

  return {
    props: {
      editorial,
      about,
      presse,
      downloads,
      impressum,
      logos,
      currently,
    },
  };
}
