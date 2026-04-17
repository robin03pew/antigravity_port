import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AnimatedPage from '../components/AnimatedPage';

const Imprint = () => {
  const { t } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = t('legal.imprint.sections', { returnObjects: true });

  return (
    <AnimatedPage>
      <div className="container" style={{ paddingTop: '150px', paddingBottom: '100px', maxWidth: '800px' }}>
        <h1 style={{ marginBottom: '2rem' }}>{t('legal.imprint.title')}</h1>
        <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>{t('legal.imprint.subtitle')}</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--text-muted)' }}>
          {Array.isArray(sections) && sections.map((section, index) => (
            <section key={index}>
              <h3 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>{section.title}</h3>
              {section.content.map((paragraph, pIndex) => (
                <p key={pIndex}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Imprint;
