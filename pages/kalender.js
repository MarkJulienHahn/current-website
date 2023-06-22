import { useState, useEffect } from "react";

import {useRouter} from "next/router"

import client from "../client";

import styles from "../styles/Kalender.module.css";

import Karte from "../components/Karte";
import Kalender from "../components/Kalender";

const days = [
  "2023-09-14",
  "2023-09-15",
  "2023-09-16",
  "2023-09-17",
  "2023-09-18",
  "2023-09-19",
  "2023-09-20",
  "2023-09-21",
  "2023-09-22",
  "2023-09-23",
  "2023-09-24",
];

const kalender = ({ english, programm, standorte, beteiligte, formate }) => {


  const personenArray = beteiligte.map((person, i) => person.name);
  const standorteArray = standorte.map((ort, i) => ort.name);
  const formateArray = formate.map((format, i) => format.formate);

  const [data, setData] = useState([]);
  const [focus, setFocus] = useState(null);
  const [flyToState, setFlyToState] = useState([9.218195301506112, 48.80442744658279]);
  const [filter, setFilter] = useState({ sortType: "", filter: days });

  const router = useRouter()

  const datumFilter = () => {
    setFilter({ sortType: "datum", filter: days });
  };

  const personenFilter = () => {
    setFilter({ sortType: "personen", filter: personenArray });
  };

  const standortFilter = () => {
    setFilter({ sortType: "standort", filter: standorteArray });
  };
  
  const formateFilter = () => {
    setFilter({ sortType: "formate", filter: formateArray });
  };

  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        datum: "date",
        personen: "personen.name",
        standort: "standort.name",
        formate: "formate.format",
      };
      const sortProperty = types[type];
      const sorted = [...programm].sort((a, b) => {
        if (a[sortProperty] > b[sortProperty]) {
          return 1;
        } else if (b[sortProperty] > a[sortProperty]) {
          return -1;
        } else {
          return 0;
        }
      });
      setData(sorted);
    };

    sortArray(filter.sortType);
  }, [filter]);

  // console.log(router.query.active)

  return (
    <div className={styles.outer}>
      <Karte
        programm={programm}
        standorte={standorte}
        standortFilter={standortFilter}
        setFocus={setFocus}
        flyToState={flyToState}
      />
      <Kalender
        datumFilter={datumFilter}
        personenFilter={personenFilter}
        standortFilter={standortFilter}
        formateFilter={formateFilter}
        filter={filter}
        setFilter={setFilter}
        focus={focus}
        setFocus={setFocus}
        programm={programm}
        beteiligte={beteiligte}
        formate={formate}
        standorte={standorte}
        data={data}
        setFlyToState={setFlyToState}
        days={days}
        query={router.query.active}
        english={english}
      />
    </div>
  );
};

export default kalender;

export async function getServerSideProps() {
  const standorte = await client.fetch(`
  * [_type == "standorte"]{...}`);
  const beteiligte = await client.fetch(`
  *[_type == "beteiligte"]{..., "bild": bild{..., "asset": asset->{...}}}`);
  const formate = await client.fetch(`
  * [_type == "formate"]{...}`);
  const programm = await client.fetch(`
  *[_type == "programm"]{..., "standort": standort->{...}, "beteiligte": beteiligte[]->{...}, "formate": formate[]->{...},"bilder": bilder[]{..., "asset": asset->{...}}}`);

  return {
    props: {
      standorte,
      programm,
      beteiligte,
      formate,
    },
  };
}
