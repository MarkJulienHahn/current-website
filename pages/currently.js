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

  function compareFn(a, b) {
    if (a.header.date > b.header.date) {
      return -1;
    }
    if (a.header.date < b.header.date) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }

  const sorted = currently.sort(compareFn)


  return (
    <>
        <Nav
          english={english}
          setEnglish={setEnglish}
          colorArray={colorArray}
        />

      <div className={styles.postsOuter}>
        {sorted.map((post, i) => (
          <Blogpost post={post} i={i} key={i} english={english} newsSubtraction={newsSubtraction} setNewsSubtraction={setNewsSubtraction} length={currently.length}/>
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
