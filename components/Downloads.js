import styles from "../styles/Main.module.css";

const Downloads = ({ english, downloads }) => {

  return (
    <div style={{ background: "var(--red)" }}>
      {downloads.length != 0 ? (
        <>
          <div className={"anchor"} id="downloads"></div>
          <div style={{ display: "flex" }}>
            <div className={styles.infoSubHeadlineDownloads}>
              <h1>Downloads</h1>
            </div>
          </div>

          <div className={styles.downloadContentPresse}>
            {downloads.length
              ? downloads.map((entry, i) => (
                  <div key={i} className={styles.downloadItem}>
                    <h1>{english ? entry?.nameEN : entry?.nameDE}</h1>
                    <div>
                      {entry.download.map((item, j) =>
                        item.link ? (
                          <a
                            href={item?.link}
                            target="_blank"
                            rel="noreferrer"
                            key={j}
                          >
                            <div className={styles.downloadRow}>
                              <p className={styles.fileExtension}>(→)</p>
                              <p>
                                {english
                                  ? item?.beschreibungEN
                                  : item?.beschreibungDE}
                              </p>
                            </div>
                          </a>
                        ) : (
                          <a
                            href={item?.file?.url}
                            target="_blank"
                            rel="noreferrer"
                            key={j}
                          >
                            <div className={styles.downloadRow}>
                              <p className={styles.fileExtension}>(↓)</p>
                              <p>
                                {english
                                  ? item?.beschreibungEN
                                  : item?.beschreibungDE}
                              </p>
                            </div>
                          </a>
                        )
                      )}
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Downloads;
