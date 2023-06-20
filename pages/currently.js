import {useState} from "react"
import client from "../client";

import Nav from "../components/Nav";
import Blogpost from "../components/Blogpost";
import Footer from "../components/Footer";

import styles from "../styles/Currently.module.css"

const currently = ({ currently, english, setEnglish }) => {
  const [newsSubtraction, setNewsSubtraction] = useState(0)
  const colorArray = [
    "var(--blue)",
    "var(--red)",
    "var(--green)",
    "var(--pink)",
    "white",
  ];

  const currentlyReversed = currently.reverse()

  return (
    <>
        <Nav
          english={english}
          setEnglish={setEnglish}
          colorArray={colorArray}
        />

      <div className={styles.postsOuter}>
        {currentlyReversed.map((post, i) => (
          <Blogpost post={post} i={i} key={i} english={english} newsSubtraction={newsSubtraction} setNewsSubtraction={setNewsSubtraction}/>
        ))}
      </div>

      {/* <Footer english={english} impressum={impressum} /> */}
    </>
  );
};

export default currently;

export async function getServerSideProps() {
  const currently = await client.fetch(`* [_type == "currently"] {..., "textbeitrag": textbeitrag[]{..., "images": images[]{..., "image": image.asset->{...}}}, "bildbeitrag": bildbeitrag{..., "images": images[]{..., "image": image.asset->{...}}}, "newsbeitrag": newsbeitrag{..., "images": images[]{..., "image": image.asset->{...}}}} | order(header.date)`);
  return {
    props: {
      currently,
    },
  };
}
