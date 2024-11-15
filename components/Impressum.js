import { useRef } from "react";
import styles from "../styles/Footer.module.css";

import { PortableText } from "@portabletext/react";

const Impressum = ({ impr, english, impressum }) => {
  const ref = useRef(null);

  return (
    <div
      className={styles.impressumOuter}
      style={impr ? { height: ref?.current?.clientHeight } : { height: "0px" }}
    >
      <div
        className={styles.impressumWrapper}
        style={{ background: "var(--green)" }}
        ref={ref}
      >
        {english ? (
          <PortableText value={impressum?.impressumEN} />
        ) : (
          <PortableText value={impressum?.impressumDE} />
        )}
      </div>
    </div>
  );
};

export default Impressum;
