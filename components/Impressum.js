import React from "react";
import styles from "../styles/Footer.module.css";

import { PortableText } from "@portabletext/react";

const Impressum = ({ english, impressum, background, setBackground }) => {

  return (
    <div
      className={styles.impressumWrapper}
      style={{ background: background ? "var(--pink)" : "" }}
      onClick={() => setBackground(!background)}
    >
        {english ? (
          <PortableText value={impressum.impressumEN} />
        ) : (
          <PortableText value={impressum.impressumDE} />
        )}
    </div>
  );
};

export default Impressum;
