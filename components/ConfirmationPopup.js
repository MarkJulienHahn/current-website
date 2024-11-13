import { useState } from "react";
import { PortableText } from "@portabletext/react";
import styles from "../styles/Popup.module.css";

const ConfirmationPopup = ({ openCall, english, setShowPopup }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const isLinkEnabled = isConfirmed && name.trim().length > 0 && !isSubmitting;

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
          body: JSON.stringify({ name }),
        });

        const data = await response.json();

        if (response.ok) {
          // Redirect to the desired link if the email was sent successfully
          window.location.href = "https://forms.gle/1DfYWpqGaLc4DXup7";
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
        <h1>
          {english
            ? "Consent to the Processing of Personal Data"
            : "Einwilligung in die Verarbeitung personenbezogener Daten"}
        </h1>
        <PortableText
          value={english ? openCall.disclaimerEN : openCall.disclaimerDE}
        />
        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            <label>
              <input
                type="checkbox"
                checked={isConfirmed}
                onChange={() => setIsConfirmed(!isConfirmed)}
              />
              {english
                ? "Consent to the Processing of Personal Data"
                : "Einwilligung in die Verarbeitung personenbezogener Daten"}
            </label>
          </div>

          <div className={styles.inputField}>
            <input
              type="text"
              placeholder={english ? "First and Last Name" : "Vor- und Nachname"}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <button
              type="submit"
              disabled={!isLinkEnabled}
              className={
                isLinkEnabled ? styles.activeLink : styles.disabledLink
              }
            >
              <h1>{isSubmitting ? (english ? "Sending..." : "Wird gesendet...") : (english ? "Submit Now" : "Jetzt Einreichen")}</h1>
            </button>
          </div>
        </form>

        {error && <p className={styles.error}>{error}</p>}

        <PortableText
          value={english ? openCall.disclaimer2EN : openCall.disclaimer2DE}
        />

        <div className={styles.closeButton} onClick={() => setShowPopup(false)}>
          <h1>{english ? "Back" : "Zurück"}</h1>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
