import { useState } from "react";
import "../styles/globals.css";

import Nav from "../components/Nav";

const colorArray = [
  "var(--blue)",
  "var(--red)",
  "var(--green)",
  "var(--pink)",
  "#ddd",
];

function MyApp({ Component, pageProps }) {
  const [english, setEnglish] = useState(false);
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <Nav
        english={english}
        setEnglish={setEnglish}
        colorArray={colorArray}
        showNav={showNav}
        setShowNav={setShowNav}
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
