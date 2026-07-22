import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../i18n/LanguageContext';
import { SEO as SEOType } from '../../types';

interface SEOProps {
  seo?: SEOType;
  fallbackTitle: string;
  fallbackDescription: string;
}

export const SEO: React.FC<SEOProps> = ({ seo, fallbackTitle, fallbackDescription }) => {
  const { language } = useLanguage();

  const title = seo?.metaTitle?.[language] || fallbackTitle;
  const description = seo?.metaDescription?.[language] || fallbackDescription;
  const keywords = seo?.keywords?.[language] || '';
  const ogImage = seo?.ogImage || '/assets/og-default.jpg';
  const canonical = seo?.canonicalUrl || typeof window !== 'undefined' ? window.location.href : '';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
      {/* Canonical */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Language */}
      <html lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'} />
    </Helmet>
  );
};
