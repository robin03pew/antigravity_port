import React, { useEffect } from 'react';
import AnimatedPage from '../components/AnimatedPage';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatedPage>
      <div className="container" style={{ paddingTop: '150px', paddingBottom: '100px', maxWidth: '800px' }}>
        <h1 style={{ marginBottom: '2rem' }}>Datenschutzerklärung</h1>
        <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>Stand: 26.03.2026</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--text-muted)' }}>
          <section>
            <h3 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>1. Datenschutz auf einen Blick</h3>
            <p>Wir freuen uns sehr über Ihr Interesse an unserem Unternehmen. Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).</p>
          </section>

          <section>
            <h3 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>2. Kontakt mit uns</h3>
            <p>Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen sechs Monate bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
          </section>

          <section>
            <h3 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>3. Server-Log-Files</h3>
            <p>Der Provider der Seiten (GitHub Pages / Ihr Host) erhebt und speichert automatisch Informationen in so genannten Server-Log Files, die Ihr Browser automatisch übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse.</p>
          </section>

          <section>
            <h3 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>4. Externe Dienste (Hosting via GitHub Pages)</h3>
            <p>Diese Website wird bei GitHub Pages (GitHub Inc.) gehostet. Beim Besuch unserer Webseite erfasst GitHub Verbindungsdaten (z.B. Ihre IP-Adresse), um die Bereitstellung der Webseite zu ermöglichen und die IT-Sicherheit zu gewährleisten. Darauf haben wir keinen direkten Einfluss. Weitere Details finden Sie in der Datenschutzerklärung von GitHub.</p>
          </section>

          <section>
            <h3 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>5. Ihre Rechte</h3>
            <p>Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren. In Österreich ist dies die Datenschutzbehörde.</p>
          </section>

          <section>
            <h3 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>Verantwortliche Stelle:</h3>
            <p>Robin Adamek</p>
            <p>Geblergasse 24-26</p>
            <p>1170 Wien</p>
            <p>E-Mail: hello@adamek.media</p>
          </section>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Privacy;
