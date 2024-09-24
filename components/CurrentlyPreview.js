import { useState, useEffect } from "react";
import styles from "../styles/Currently.module.css";

import Image from "next/image";
import Link from "next/link";

const months = [
  "JAN",
  "FEB",
  "MÄR",
  "APR",
  "MAI",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OKT",
  "NOV",
  "DEZ",
];

const monthsEN = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OKT",
  "NOV",
  "DEC",
];

const CurrentlyPreview = ({ currently, english }) => {
  const [dateConverted1, setDateConverted1] = useState();
  const [dateConverted2, setDateConverted2] = useState();
  const [dateConverted3, setDateConverted3] = useState();

  const posts = currently.filter((post) => post.txtbeitrag || post.bldbeitrag);

  const firstPost = currently.find(
    (post) => post.txtbeitrag || post.bldbeitrag
  );
  const firstIndex = posts.findIndex((post) => post == firstPost);

  const firstNews = currently.find((post) => post.nwsbeitrag);
  const newsIndex = currently.findIndex((post) => post == firstNews);

  const secondPost = currently.find(
    (post) => (post.txtbeitrag || post.bldbeitrag) && post != firstPost
  );
  const secondIndex = posts.findIndex((post) => post == secondPost);

  const convertDate1 = async (input) => {
    const date = new Date(input).getDate();
    const month = new Date(input).getUTCMonth();
    const year = new Date(input).getFullYear();
    !english
      ? setDateConverted1([`${date}.${months[month]}.${year}`])
      : setDateConverted1([`${date}.${monthsEN[month]}.${year}`]);
  };

  const convertDate2 = async (input) => {
    const date = new Date(input).getDate();
    const month = new Date(input).getUTCMonth();
    const year = new Date(input).getFullYear();
    !english
      ? setDateConverted2([`${date}.${months[month]}.${year}`])
      : setDateConverted2([`${date}.${monthsEN[month]}.${year}`]);
  };

  const convertDate3 = async (input) => {
    const date = new Date(input).getDate();
    const month = new Date(input).getUTCMonth();
    const year = new Date(input).getFullYear();
    !english
      ? setDateConverted3([`${date}.${months[month]}.${year}`])
      : setDateConverted3([`${date}.${monthsEN[month]}.${year}`]);
  };

  useEffect(() => {
    convertDate1(firstPost.header.date);
    convertDate2(firstNews.header.date);
    convertDate3(secondPost.header.date);
  }, [english]);

  return (
    <div className={styles.previewWrapper}>
      <Link
        href={{ pathname: "/currently", query: { active: firstIndex } }}
        className={styles.previewLink}
      >
        <div className={styles.previewHalfLeft}>
          <div className={styles.previewImage}>
            {firstPost.txtbeitrag && firstPost.textbeitrag[0]?.images && (
              <Image
                src={firstPost.textbeitrag[0]?.images[0]?.image.url}
                fill
                style={{ objectFit: "cover" }}
              />
            )}
            {firstPost.bldbeitrag && firstPost.bldbeitrag[0]?.images && (
              <Image
                src={firstPost.bildbeitrag[0].images[0]?.image.url}
                fill
                style={{ objectFit: "cover" }}
              />
            )}
          </div>

          <div className={styles.previewText}>
            <div className={styles.previewTextTop}>
              <h1>#{posts.length - firstIndex}</h1>
              <p>
                Currently
                <br />
                {dateConverted1}
              </p>
            </div>
            <div className={styles.previewTextBottom}>
              <h2>
                {english
                  ? firstPost.header.titel.titleEN
                  : firstPost.header.titel.titleDE}
              </h2>
              <p>
                {english
                  ? firstPost.header.subtitle?.subtitleEN
                  : firstPost.header.subtitle?.subtitleDE}
              </p>
            </div>
          </div>
        </div>
      </Link>

      <div className={styles.previewHalf}>
        <Link href={{ pathname: "/currently", query: { active: newsIndex } }}>
          <div className={styles.previewQuarterTop}>
            <div className={styles.previewImage}>
              {firstNews.newsbeitrag.images && (
                <Image
                  src={firstNews.newsbeitrag.images[0].image.url}
                  fill
                  style={{ objectFit: "cover" }}
                />
              )}
            </div>
            <div className={styles.previewText}>
              <div className={styles.previewTextTop}>
                <h2 className={styles.newsIcon}>◌</h2>
                <p>
                  Currently
                  <br />
                  {dateConverted2}
                </p>
              </div>
              <div className={styles.previewTextBottom}>
                <h2>
                  {english
                    ? firstNews.header.titel.titleEN
                    : firstNews.header.titel.titleDE}
                </h2>
              </div>
            </div>
          </div>
        </Link>

        <Link href={{ pathname: "/currently", query: { active: secondIndex } }}>
          <div className={styles.previewQuarter}>
            <div className={styles.previewImage}>
              {secondPost.txtbeitrag && secondPost.textbeitrag[0]?.images && (
                <Image
                  src={secondPost.textbeitrag[0]?.images[0]?.image.url}
                  fill
                  style={{ objectFit: "cover" }}
                />
              )}
              {secondPost.bldbeitrag && secondPost.bildbeitrag[0]?.images && (
                <Image
                  src={secondPost.bildbeitrag[0]?.images[0]?.image.url}
                  fill
                  style={{ objectFit: "cover" }}
                />
              )}
            </div>
            <div className={styles.previewText}>
              <div className={styles.previewTextTop}>
                <h1>#{posts.length - secondIndex}</h1>
                <p>
                  Currently
                  <br />
                  {dateConverted3}
                </p>
              </div>
              <div className={styles.previewTextBottom}>
                <h2>
                  {english
                    ? secondPost.header.titel.titleEN
                    : secondPost.header.titel.titleDE}
                </h2>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CurrentlyPreview;
