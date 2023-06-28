import styles from "../styles/Main.module.css";

const Team = ({ english, team, downloads }) => {
  return (
    <>
      <div className={"anchor"} id="team"></div>
      <div className={styles.teamWrapper}>
        <h2 className={styles.teamHeadline}>Jobs</h2>

        <div className={styles.downloadContent}>
          {downloads.map((entry, i) => (
            <div key={i} className={styles.downloadItem}>
              <h1>{english ? entry.nameEN : entry.nameDE}</h1>
              <div>
                {entry.download.map((item, j) => (
                  <a
                    href={item.file.url}
                    target="_blank"
                    rel="noreferrer"
                    key={j}
                  >
                    <div className={styles.downloadRow}>
                      <p className={styles.fileExtension}>
                        ({item.file.extension})
                      </p>
                      <p>
                        {english ? item.beschreibungEN : item.beschreibungDE}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
