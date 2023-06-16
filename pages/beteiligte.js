import client from "../client";
import { useRouter } from "next/router";

import Beteiligte from "../components/Beteiligte";

const beteiligte = ({ english, beteiligte }) => {
  const router = useRouter();
  const active = router.query;

  return (
    <div>
      <Beteiligte beteiligte={beteiligte} english={english} active={active} />
    </div>
  );
};

export default beteiligte;

export async function getServerSideProps() {
  const beteiligte = await client.fetch(`
  *[_type == "beteiligte"]{..., "bild": bild{..., "asset": asset->{...}}}`);

  return {
    props: {
      beteiligte,
    },
  };
}
