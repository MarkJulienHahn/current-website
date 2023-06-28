import client from "../client";
import { useRouter } from "next/router";

import useWindowDimensions from "../hooks/useWindowDimensions";

import Beteiligte from "../components/Beteiligte";
import BeteiligteMobil from "../components/BeteiligteMobil";

const beteiligte = ({ english, beteiligte, programm }) => {
  const router = useRouter();
  const active = router.query;

  const { width } = useWindowDimensions();

  return width > 700 ? (
    <div>
      <Beteiligte
        programm={programm}
        beteiligte={beteiligte}
        english={english}
        active={active}
      />
    </div>
  ) : (
    <div>
      <BeteiligteMobil
        programm={programm}
        beteiligte={beteiligte}
        english={english}
        active={active}
      />
    </div>
  );
};

export default beteiligte;

export async function getServerSideProps() {
  const beteiligte = await client.fetch(`
  *[_type == "beteiligte"]{..., "bild": bild{..., "asset": asset->{...}}}`);
  const programm = await client.fetch(`
  *[_type == "programm"]{..., "standort": standort->{...}, "beteiligte": beteiligte[]->{...}, "formate": formate[]->{...},"bilder": bilder[]{..., "asset": asset->{...}}}`);

  return {
    props: {
      beteiligte,
      programm,
    },
  };
}
