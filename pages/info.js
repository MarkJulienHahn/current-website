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
  * [_type == "info25"]{...}`);
    const logos = await client.fetch(
      `* [_type == "logos25"]|order(orderRank){"logo": logo.logo.asset->{"url": url, "height": metadata.dimensions.height, "width": metadata.dimensions.width}}`
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
