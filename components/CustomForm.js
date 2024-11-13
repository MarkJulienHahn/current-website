import React, { useState } from "react";
import styles from "../styles/Main.module.css";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = ({ english, status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    email;
    email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {!status && (
        <>
          <input
            placeholder={english ? "E-Mail Address" : "E-Mail Adresse"}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            isRequired
          ></input>
          <button type="submit" formVales={[email]}>
            {english ? "SUBSCRIBE" : "ANMELDEN"}
          </button>
        </>
      )}

      {status === "sending" && (
        <div className={styles.formStatus}>
          {english ? "Just a second, please..." : "Einen Moment, bitte..."}
        </div>
      )}
      {status === "error" && (
        <div
          dangerouslySetInnerHTML={{ __html: message }}
          className={styles.formStatus}
        />
      )}
      {status === "success" && (
        <div className={styles.formStatus}>
          {english
            ? "Thank you for subscribing to our newsletter!"
            : "Danke für die Anmeldung!"}
        </div>
      )}
    </form>
  );
};

export default CustomForm;
