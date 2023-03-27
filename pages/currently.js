import client from "../client";

import Nav from "../components/Nav";
import Blogpost from "../components/Blogpost";
import Footer from "../components/Footer";

import styles from "../styles/Currently.module.css"

const currently = ({ currently }) => {
  const colorArray = [
    "var(--blue)",
    "var(--red)",
    "var(--green)",
    "var(--pink)",
    "white",
  ];

  console.log(currently);

  return (
    <>
      <Nav colorArray={colorArray} />

      <div className={styles.postsOuter}>
        {currently.map((post, i) => (
          <Blogpost post={post} i={i} key={i}/>
        ))}
      </div>

      {/* <Footer english={english} impressum={impressum} /> */}
    </>
  );
};

export default currently;

export async function getServerSideProps() {
  const currently = await client.fetch(`* [_type == "currently"] {..., "textbeitrag": textbeitrag[]{..., "images": images[]{..., "image": image.asset->{...}}}, "bildbeitrag": bildbeitrag{..., "images": images[]{..., "image": image.asset->{...}}}, "newsbeitrag": newsbeitrag{..., "images": images[]{..., "image": image.asset->{...}}}}`);
  return {
    props: {
      currently,
    },
  };
}
