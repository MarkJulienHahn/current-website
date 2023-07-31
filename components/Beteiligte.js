import { useState, useEffect } from "react";
import styles from "../styles/Beteiligte.module.css";

import { useRouter } from "next/router";

import Entry from "./Entry";
import BeteiligteRow from "./BeteiligteRow";

const Beteiligte = ({ english, beteiligte, programm }) => {
  const [index, setIndex] = useState(null);

  const router = useRouter();
  const active = router.query;

  const current = beteiligte.findIndex(
    (beteiligter) => beteiligter.slug.current == active.active
  );

  useEffect(() => {
    active.active && setIndex(current);
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* LINKE SEITE */}

      <div className={styles.names}>
        {beteiligte.map((beteiligter, i) => (
          <>
            <BeteiligteRow
              beteiligter={beteiligter}
              i={i}
              index={index}
              setIndex={setIndex}
            />
          </>
        ))}
      </div>

      {/* RECHTE SEITE */}

      {index == null ? (
        <div className={styles.header}>
          {english ? (
            <p>
              In close collaboration with the city, local initiatives and
              institutions come together and shape the program through
              independent formats such as workshops, discussions, artistic
              endeavors, and research work.
            </p>
          ) : (
            <p>
              In engem Austausch mit der Stadt, docken lokale Initiativen und
              Institutionen an und gestalten das Programm in eigenständigen
              Formaten wie Workshops, Gesprächen, künstlerischen und forschenden
              Arbeiten mit.
            </p>
          )}
        </div>
      ) : (
        <div className={styles.content}>
          <Entry
            english={english}
            beteiligter={beteiligte[index]}
            programm={programm}
          />
        </div>
      )}
    </div>
  );
};

export default Beteiligte;
