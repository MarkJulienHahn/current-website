import Head from "next/head"; 
import Nav from "./Nav";

const Layout = ({ children, pageProps }) => {
  return (
    <main>
      <Head></Head>

      {children}
    </main>
  );
};

export default Layout;
