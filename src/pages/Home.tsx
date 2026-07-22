import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Hero } from '../sections/home/Hero';
import { TrustBar } from '../sections/home/TrustBar';
import { AboutPreview } from '../sections/home/AboutPreview';
import { ServicesPreview } from '../sections/home/ServicesPreview';
import { ProjectsPreview } from '../sections/home/ProjectsPreview';
import { ProcessPreview } from '../sections/home/ProcessPreview';
import { WhyUs } from '../sections/home/WhyUs';
import { QualityPreview } from '../sections/home/QualityPreview';
import { Registration } from '../sections/home/Registration';
import { Partners } from '../sections/home/Partners';
import { CTASection } from '../sections/home/CTASection';
import { SEO } from '../components/seo/SEO';

export const Home: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <>
      <SEO 
        fallbackTitle={language === 'ar' ? 'تكامل الذهبية | بناء محطات الوقود' : 'Takamul Aldahbia | Fuel Station Construction'}
        fallbackDescription={t('heroDescription')}
      />
      <Hero />
      <TrustBar />
      <AboutPreview />
      <ServicesPreview />
      <WhyUs />
      <ProjectsPreview />
      <ProcessPreview />
      <QualityPreview />
      <Registration />
      <Partners />
      <CTASection />
    </>
  );
};
