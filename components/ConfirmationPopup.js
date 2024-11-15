"use client";

import { useState } from "react";
import { PortableText } from "@portabletext/react";
import styles from "../styles/Popup.module.css";

export default function ConfirmationPopup({ openCall, english, setShowPopup }) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isLinkEnabled =
    isConfirmed &&
    name.trim().length > 0 &&
    email.trim().length > 0 &&
    !isSubmitting;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLinkEnabled) {
      setIsSubmitting(true);
      setError(null);
      try {
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email }),
        });

        const data = await response.json();

        if (response.ok) {
          setIsSubmitted(true);
        } else {
          setError(data.error || "An error occurred while sending the email.");
        }
      } catch (error) {
        setError("An error occurred while sending the email.");
        console.error("Error:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.popup}>
        {!isSubmitted ? (
          <>
            <h1 className={styles.title}>
              {english
                ? "Consent to the Processing of Personal Data"
                : "Einwilligung in die Verarbeitung personenbezogener Daten"}
            </h1>
            <PortableText
              value={english ? openCall.disclaimerEN : openCall.disclaimerDE}
            />{" "}
          </>
        ) : (
          ""
        )}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.checkboxContainer}>
              <input
                type="checkbox"
                id="consent"
                checked={isConfirmed}
                onChange={() => setIsConfirmed(!isConfirmed)}
                className={styles.checkbox}
              />
              <label htmlFor="consent" className={styles.label}>
                {english
                  ? "Consent to the Processing of Personal Data"
                  : "Einwilligung in die Verarbeitung personenbezogener Daten"}
              </label>
            </div>
            <div className={styles.inputContainer}>
              <input
                type="text"
                placeholder={
                  english ? "First and Last Name" : "Vor- und Nachname"
                }
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className={styles.input}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={styles.input}
              />
              <button
                type="submit"
                disabled={!isLinkEnabled}
                className={
                  isLinkEnabled
                    ? styles.submitButton
                    : styles.submitButtonDisabled
                }
              >
                {isSubmitting
                  ? english
                    ? "Sending..."
                    : "Wird gesendet..."
                  : english
                  ? "Submit Now"
                  : "Jetzt Einreichen"}
              </button>{" "}
            </div>
          </form>
        ) : (
          <div className={styles.thankYouMessage}>
            <h1>
              {english
                ? "Thank you for your submission. The link to the form has been sent to your email address."
                : "Vielen Dank für Ihre Einreichung. Der Link zum Formular wurde an Ihre E-Mail-Adresse gesendet."}
            </h1>
          </div>
        )}

        {!isSubmitted && (
          <>
            {error && <p className={styles.error}>{error}</p>}
            <PortableText
              value={english ? openCall.disclaimer2EN : openCall.disclaimer2DE}
            />
          </>
        )}
        <button
          onClick={() => setShowPopup(false)}
          className={styles.closeButton}
        >
          {english ? "Back" : "Zurück"}
        </button>
      </div>
    </div>
  );
}
