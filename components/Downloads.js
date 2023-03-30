import { useState } from "react";
import styles from "../styles/Main.module.css";

const Downloads = ({ english, downloads }) => {
  const [background, setBackground] = useState(true);

  return (
    <div
      onMouseEnter={() => setBackground(false)}
      onMouseLeave={() => setBackground(true)}
    >
      {downloads.length != 0 ? (
        <>
          <div className={"anchor"} id="downloads"></div>
          <div style={{ display: "flex" }}>
            <div
              className={styles.infoSubHeadlineDownloads}
              style={{ background: background ? "var(--pink)" : "" }}
            >
              <h1>Downloads</h1>
            </div>
          </div>

          <div
            className={styles.downloadContent}
            style={{ background: background ? "var(--pink)" : "" }}
          >
            {downloads.map((entry, i) => (
              <div key={i} className={styles.downloadItem}>
                <h1>
                  {english ? entry.category.nameEN : entry.category.nameDE}
                </h1>
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
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Downloads;
