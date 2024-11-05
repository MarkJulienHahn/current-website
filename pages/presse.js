import client from "../client";
import Presse from "../components/Presse";

const presse = ({ english, presse, logos, impressum }) => {
  return (
    <>
      <Presse
        english={english}
        presse={presse}
        logos={logos}
        impressum={impressum}
      />
    </>
  );
};

export default presse;

export async function getServerSideProps() {
  const presse = await client.fetch(
    `* [_type == "presse25"]{..., "downloads": downloads[]{..., "download":download[]{..., "file": file.asset->{...}}}}`
  );
  const logos = await client.fetch(
    `* [_type == "logos25"]|order(orderRank){"logo": logo.logo.asset->{"url": url, "height": metadata.dimensions.height, "width": metadata.dimensions.width}}`
  );
  const impressum = await client.fetch(`
  * [_type == "impressum25"]{...}`);

  return {
    props: {
      presse,
      logos,
      impressum,
    },
  };
}
