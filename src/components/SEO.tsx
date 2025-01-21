import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  noindex?: boolean;
  canonicalPath?: string;
}

export default function SEO({ title, description, keywords, noindex = false, canonicalPath = '' }: SEOProps) {
  const baseUrl = 'https://odysex.com';
  const fullTitle = `${title} | Odyssey Exchange`;
  const canonicalUrl = `${baseUrl}${canonicalPath}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}/logo.webp`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={baseUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${baseUrl}/logo.webp`} />
    </Helmet>
  );
}