import client from "../client";

import Info from "../components/Info";

const info = ({ info, logos, impressum, english }) => {
  return (
    <>
      <Info
        info={info[0]}
        english={english}
        logos={logos}
        impressum={impressum}
      />
    </>
  );
};

export default info;

export async function getServerSideProps() {
  const info = await client.fetch(`
  * [_type == "info"]{...}`);
  const logos = await client.fetch(`
  * [_type == "logosNeu"]{"logosFoerderer": logosFoerderer[].logo.asset->{...}}`
  );
  const impressum = await client.fetch(`
  * [_type == "impressum"]{...}`);
  return {
    props: {
      info,
      logos,
      impressum,
    },
  };
}
