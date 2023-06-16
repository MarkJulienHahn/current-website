import { useState, useEffect } from "react";
import "../styles/globals.css";

import Nav from "../components/Nav";

const colorArray = [
  "var(--blue)",
  "var(--red)",
  "var(--green)",
  "var(--pink)",
  "white",
];

function MyApp({ Component, pageProps }) {
  const [english, setEnglish] = useState(false);
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <Nav
        english={english}
        setEnglish={setEnglish}
        // refInView={inView}
        colorArray={colorArray}
        showNav={showNav}
      />
      <Component
        {...pageProps}
        setShowNav={setShowNav}
        colorArray={colorArray}
        english={english}
        setEnglish={setEnglish}
      />
    </>
  );
}

export default MyApp;
