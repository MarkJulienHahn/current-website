import Head from "next/head";

const Layout = ({ children }) =>  {
  return (
    <main>
      <Head></Head>
      {children}
    </main>
  );
}

export default Layout