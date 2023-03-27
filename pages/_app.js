import { useState, useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [english, setEnglish] = useState(false);

  return <Component {...pageProps} english={english} setEnglish={setEnglish} />;
}

export default MyApp;
