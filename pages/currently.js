import { useState, useEffect } from "react";
import client from "../client";

import { useRouter } from "next/router";
import Blogpost from "../components/Blogpost";
import Footer from "../components/Footer";

import styles from "../styles/Currently.module.css";

const currently = ({ currently, english }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const router = useRouter();
  const active = router.query;

  useEffect(() => {
    active.active && setOpenIndex(active.active);
  }, []);

  const posts = currently.filter((post) => post.txtbeitrag || post.bldbeitrag)
  const news = currently.filter((post) => post.nwsbeitrag)

  return (
    <>
      <div className={styles.postsOuter}>
        {currently.map((post, i) => (
          <Blogpost
            post={post}
            posts={posts}
            news={news}
            i={i}
            key={i}
            english={english}
            length={currently.length}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
          />
        ))}
      </div>
    </>
  );
};

export default currently;

export async function getServerSideProps() {
  const currently = await client.fetch(
    `* [_type == "currently"] {..., "textbeitrag": textbeitrag[]{..., "images": images[]{..., "image": image.asset->{...}}}, "bildbeitrag": bildbeitrag{..., "images": images[]{..., "image": image.asset->{...}}}, "newsbeitrag": newsbeitrag{..., "images": images[]{..., "image": image.asset->{...}}}} | order(header.date desc)`
  );
  const impressum = await client.fetch(`
  * [_type == "impressum25"]{...}`);
  return {
    props: {
      currently,
      impressum,
    },
  };
}
