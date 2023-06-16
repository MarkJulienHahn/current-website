import Link from "next/link";
import styles from "../styles/Main.module.css";

const BeteiligteList = ({ beteiligte }) => {
  return (
    <div className={styles.beteiligteWrapper}>
      {beteiligte.map((artist, i) =>
        i + 1 !== beteiligte.length ? (
          <Link
            href={{
              pathname: "/beteiligte",
              query: { active: i },
            }}
          >
            <h1>
              <span
                className={
                  artist.different
                    ? styles.beteiligteDiffHover
                    : styles.beteiligteNormalHover
                }
                key={i}
              >
                {artist.name}
              </span>
              &nbsp;•&nbsp;
            </h1>
          </Link>
        ) : (
          <Link
            href={{
              pathname: "/beteiligte",
              query: { active: i },
            }}
          >
            <h1
              key={i}
              className={
                artist.different
                  ? styles.beteiligteDiffHover
                  : styles.beteiligteNormalHover
              }
            >
              {artist.name}
            </h1>
          </Link>
        )
      )}
    </div>
  );
};

export default BeteiligteList;
