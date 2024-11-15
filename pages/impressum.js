import client from "../client";
import Impressum from "../components/Impressum";

const impressum = ({ english, impressum }) => {
  return (
    <div style={{position: "relative"}}>
      <Impressum
        impr={true}
        english={english}
        impressum={impressum[0]}
        background={true}
        setBackground={() => {}}
      />
    </div>
  );
};

export default impressum;

export async function getServerSideProps() {
  const impressum = await client.fetch(`
    * [_type == "impressum25"]{...}`);

  return {
    props: {
      impressum,
    },
  };
}
