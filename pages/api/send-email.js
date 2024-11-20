import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  try {
    // First email - to the specified recipient
    const data1 = await resend.emails.send({
      from: "submission2025@artpublicspace.de",
      to: "submission2025@artpublicspace.de",
      subject: `Neue Einreichung von ${name}`,
      html: `<p>Die Person mit dem Namen ${name} und der e-mail  ${email} hat zu folgender Verarbeitung personenbezogener Daten ihre Einwilligung gegeben:<br><br><strong>Rechtsgrundlage für diese Datenübermittlung:</strong> Ihre Einwilligung nach Art. 6 (1) a DSGVO<br><br><strong>Datenübermittlung in Drittländer:</strong> Soweit bei dieser Übermittlung personenbezogene Daten auch außerhalb des Europäischen Wirtschaftsraums (EWR) in die USA übermittelt werden, erfolgt diese Übermittlung aufgrund Art. 45 DSGVO iVm Durchführungsbeschluss (EU) 2023/1795 der Kommission vom 10.7.2023 gemäß der Verordnung (EU) 2016/679 des Europäischen Parlaments und des Rates über die Angemessenheit des Schutzniveaus für personenbezogene Daten nach dem Datenschutzrahmen EU-USA (Bekannt gegeben unter Aktenzeichen C(2023) 4745) (Text von Bedeutung für den EWR) C/2023/4745ABl. L 231 vom 20.9.2023, p. 118–229)<br><br>Einwilligung in die Verarbeitung personenbezogener Daten<br><br>Ich willige ein, dass die Art Public Space – Culture Matters gemeinnützige UG (haftungsbeschränkt) Reitzensteinstraße 31 | D-70190 Stuttgart („APS-CM“) meine personenbezogenen Daten, bestehend aus <br><br>
      — Vorname <br>
      — Nachname <br>
      — Postanschrift <br>
      — E-Mailadresse <br>
      — technischen Verbindungsdaten des Serverzugriffs (IP-Adresse, Datum, Uhrzeit, abgefragte Seite, Referrer-URL, die Beschreibung des Typs des verwendeten Webbrowsers) <br>
      — Daten zur Erstellung von Nutzungsstatistiken und Daten über die Nutzung der Website <br>
      — Protokollierungsdaten von Klicks auf einzelne Elemente  <br><br>zur Durchführung des Open Call mittels Google Form an Google übermittelt. Dies umfasst die Speicherung in den Verarbeitungssystemen von APS-CM und Google. <br><br>Die auf dieser Webseite abrufbaren Datenschutzhinweise habe ich zur Kenntnis genommen.</p>`,
    });

    // Second email - to the email provided in the form
    // Second email - to the email provided in the form
    const data2 = await resend.emails.send({
      from: "submission2025@artpublicspace.de",
      to: email,
      subject: "Thank you for your submission",
      html: `<p>Hallo / Hello ${name},<br><br>
      Für die weitere Bearbeitung der Bewerbung nutzen Sie bitte den folgenden Link.<br>
      For further processing of your application, please use the following link.<br><br>
      <a href="https://forms.gle/1DfYWpqGaLc4DXup7">Application Form</a><br><br>
      Diese E-Mail wurde automatisch erstellt. Bitte antworten Sie nicht auf diese E-Mail, bei Rückfragen melden Sie sich bitte an <a href="mailto:program@artpublicspace.de">program@artpublicspace.de</a>.<br>
      This email was created automatically. Please do not reply to this e-mail, if you have any questions please contact <a href="mailto:program@artpublicspace.de">program@artpublicspace.de</a>.<br><br>
      Freundliche Grüße / Best regards,<br>
      Team CURRENT</p>`,
    });


    return res
      .status(200)
      .json({ success: true, data: { recipient: data1, submitter: data2 } });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({
      success: false,
      error: "An error occurred while sending the email",
    });
  }
}
