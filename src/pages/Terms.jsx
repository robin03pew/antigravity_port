import React, { useEffect } from 'react';
import AnimatedPage from '../components/AnimatedPage';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatedPage>
      <div className="container" style={{ paddingTop: '150px', paddingBottom: '100px', maxWidth: '800px' }}>
        <h1 style={{ marginBottom: '2rem' }}>Allgemeine Geschäftsbedingungen (AGB)</h1>
        <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>Stand: 26.03.2026</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--text-muted)' }}>
          <section>
            <h3 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>1. Geltungsbereich</h3>
            <p>Diese Allgemeinen Geschäftsbedingungen gelten für alle rechtlichen Beziehungen zwischen dem Fotografen Robin Adamek (im Folgenden "Auftragnehmer") und seinen Vertragspartnern (im Folgenden "Auftraggeber"). Maßgeblich ist jeweils die zum Zeitpunkt des Vertragsschlusses gültige Fassung.</p>
          </section>

          <section>
            <h3 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>2. Urheberrecht und Nutzungsrechte</h3>
            <p>a) Dem Auftragnehmer steht das Urheberrecht an allen von ihm erstellten Werken (Lichtbilder, Filme) nach Maßgabe des österreichischen Urheberrechtsgesetzes zu.</p>
            <p>b) Der Auftraggeber erwirbt an den Werken nur ein einfaches Nutzungsrecht für den vereinbarten Zweck. Jegliche weitergehende Nutzung bedarf der schriftlichen Zustimmung des Auftragnehmers.</p>
            <p>c) Der Auftragnehmer hat das Recht, die erstellten Werke unentgeltlich zur Eigenwerbung (z.B. Website, Social Media, Portfolio) zu verwenden, sofern nicht ausdrücklich schriftlich etwas anderes vereinbart wurde.</p>
          </section>

          <section>
            <h3 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>3. Vergütung und Fälligkeit</h3>
            <p>a) Für die Herstellung der Werke wird das vereinbarte Honorar berechnet. Zusätzliche Leistungen (z.B. Mehraufwand, Reisespesen) werden gesondert in Rechnung gestellt.</p>
            <p>b) Rechnungen sind ohne Abzug innerhalb von 14 Tagen ab Rechnungsdatum fällig.</p>
          </section>

          <section>
            <h3 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>4. Haftung</h3>
            <p>Der Auftragnehmer haftet nur für Vorsatz und grobe Fahrlässigkeit. Für Schäden durch höhere Gewalt, technische Ausfälle oder Datenverlust wird (außer bei voller Absicht) keine Haftung übernommen.</p>
          </section>

          <section>
            <h3 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>5. Stornierung</h3>
            <p>Storniert der Auftraggeber die Buchung vor dem vereinbarten Termin, ist der Auftragnehmer berechtigt, ein Ausfallshonorar in Höhe von 50% der vereinbarten Gesamtsumme zu berechnen, falls die Stornierung nicht mindestens 14 Tage im Voraus erfolgt.</p>
          </section>

          <section>
            <h3 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>6. Schlussbestimmungen</h3>
            <p>a) Erfüllungsort und Gerichtsstand ist Wien, Österreich.</p>
            <p>b) Es gilt österreichisches Recht.</p>
            <p>c) Sollte eine Bestimmung dieser AGB unwirksam sein, wird die Wirksamkeit der übrigen Bestimmungen davon nicht berührt.</p>
          </section>

        </div>
      </div>
    </AnimatedPage>
  );
};

export default Terms;
