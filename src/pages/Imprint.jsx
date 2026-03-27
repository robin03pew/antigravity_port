import React, { useEffect } from 'react';
import AnimatedPage from '../components/AnimatedPage';

const Imprint = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatedPage>
      <div className="container" style={{ paddingTop: '150px', paddingBottom: '100px', maxWidth: '800px' }}>
        <h1 style={{ marginBottom: '2rem' }}>Impressum</h1>
        <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>Informationen gemäß § 5 ECG und Offenlegung gemäß § 25 MedienG.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--text-muted)' }}>
          <section>
            <h3 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>Diensteanbieter und Medieninhaber:</h3>
            <p>Robin Adamek</p>
            <p>Geblergasse 24-26</p>
            <p>1170 Wien</p>
            <p>Österreich</p>
          </section>

          <section>
            <h3 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>Kontakt:</h3>
            <p>Telefon: 0677 619 54 000</p>
            <p>E-Mail: hello@adamek.media</p>
            <p>Website: adamek.media</p>
          </section>

          <section>
            <h3 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>Unternehmensgegenstand:</h3>
            <p>Berufsfotografie</p>
            <p>Mitglied bei: WKO Wien, Innung der Berufsfotografen</p>
            <p>GISA-Zahl: 39225825</p>
            <p>Berufsrecht: Gewerbeordnung (www.ris.bka.gv.at)</p>
            <p>Aufsichtsbehörde/Gewerbebehörde: Magistrat der Stadt Wien</p>
            <p>Verleihungsstaat: Österreich</p>
          </section>

          <section>
            <h3 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>Umsatzsteuer-Identifikationsnummer (UID):</h3>
            <p>Kleinunternehmer gemäß § 6 Abs. 1 Z 27 UStG</p>
          </section>

          <section>
            <h3 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>EU-Streitschlichtung:</h3>
            <p>Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform der EU zu richten: http://ec.europa.eu/odr.</p>
            <p>Sie können allfällige Beschwerde auch an die oben angegebene E-Mail-Adresse richten.</p>
          </section>

          <section>
            <h3 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>Haftung für Inhalte dieser Webseite:</h3>
            <p>Wir entwickeln die Inhalte dieser Webseite ständig weiter und bemühen uns korrekte und aktuelle Informationen bereitzustellen. Leider können wir keine Haftung für die Korrektheit aller Inhalte auf dieser Webseite übernehmen, speziell für jene die seitens Dritter bereitgestellt wurden. Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen, bitten wir Sie uns umgehend zu kontaktieren.</p>
          </section>

          <section>
            <h3 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>Urheberrechtshinweis:</h3>
            <p>Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos) unterliegen dem Urheberrecht. Falls notwendig, werden wir die unerlaubte Nutzung von Teilen der Inhalte unserer Seite rechtlich verfolgen.</p>
          </section>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Imprint;
