import Marquee from "react-fast-marquee";
import MailchimpSubscribe from "react-mailchimp-subscribe";

import CustomForm from "./CustomForm";

const url = `https://current-stuttgart.us2.list-manage.com/subscribe/post?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U}&id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID}`;

import styles from "../styles/Main.module.css";

const NewsletterMarquee = ({ english }) => {
  return (
    <div className={styles.newsletterMarquee}>
      <div className={styles.newsletterMarqueeHalf}>
        <h2>
          {english
            ? "Stay up tu Date with our Newsletter"
            : "Mit dem Newsletter auf dem Laufenden bleiben"}
        </h2>
      </div>
      <div className={styles.newsletterMarqueeHalf}>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
              english={english}
            />
          )}
        />
      </div>
      {/* <Marquee gradient={false} direction={"right"}>
        <div style={{ display: "flex", overflow: "hidden" }}>
          <h1>
            {english
              ? " Stay Up to Date → newsletter →"
              : " Haltet Euch auf dem Laufenden → newsletter →  "}
          </h1>
          <h1>
            {english
              ? " Stay Up to Date → newsletter →"
              : " Haltet Euch auf dem Laufenden → newsletter →  "}
          </h1>
          <h1>
            {english
              ? " Stay Up to Date → newsletter →"
              : " Haltet Euch auf dem Laufenden → newsletter →  "}
          </h1>
          <h1>
            {english
              ? " Stay Up to Date → newsletter →"
              : " Haltet Euch auf dem Laufenden → newsletter →  "}
          </h1>
          <h1>
            {english
              ? " Stay Up to Date → newsletter →"
              : " Haltet Euch auf dem Laufenden → newsletter →  "}
          </h1>
          <h1>
            {english
              ? " Stay Up to Date → newsletter →"
              : " Haltet Euch auf dem Laufenden → newsletter →  "}
          </h1>
          <h1>
            {english
              ? " Stay Up to Date → newsletter →"
              : " Haltet Euch auf dem Laufenden → newsletter →  "}
          </h1>
          <h1>
            {english
              ? " Stay Up to Date → newsletter →"
              : " Haltet Euch auf dem Laufenden → newsletter "}
          </h1>
        </div>
      </Marquee> */}
    </div>
  );
};

export default NewsletterMarquee;
