import { useState, useRef, useEffect } from "react";
import styles from "../styles/Beteiligte.module.css";


import BeteiligteMobileEntry from "./BeteiligteMobileEntry";

const BeteiligteMobil = ({ english, beteiligte, programm }) => {
  const [index, setIndex] = useState(null);
  const [padding, setPadding] = useState(null);

  const textRef = useRef();

  useEffect(() => { 
    setPadding(textRef.current?.clientHeight);
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.header} ref={textRef}>
        {english ? (
          <p>
            In close collaboration with the city, local initiatives and
            institutions come together and shape the program through independent
            formats such as workshops, discussions, artistic endeavors, and
            research work.
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



      {/* LINKE SEITE */}

      <div className={styles.names} style={{ marginTop: `${padding + 20}px` }}>
        {beteiligte.map((beteiligter, i) => (
          <BeteiligteMobileEntry      key={i} programm={programm} beteiligte={beteiligte} english={english} beteiligter={beteiligter} i={i} index={index} setIndex={setIndex}/>
        ))}
      </div>

      {/* RECHTE SEITE */}
    </div>
  );
};

export default BeteiligteMobil;
