import React from 'react';
import { Helmet } from 'react-helmet';

const baseUrl = 'https://yourdomain.com';

const schemas = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DeepSightX",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "sameAs": [
      "https://www.linkedin.com/company/deepsightx",
      "https://www.facebook.com/deepsightx",
      "https://twitter.com/deepsightx"
    ],
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+201234567890",
      "contactType": "customer service",
      "areaServed": "Worldwide",
      "availableLanguage": ["English", "Arabic", "German"]
    }]
  },

  home: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "DeepSightX",
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  },

  contact: {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Us - DeepSightX",
    "url": `${baseUrl}/contact`
  },

  services: {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Solutions and Custom Software",
    "provider": {
      "@type": "Organization",
      "name": "DeepSightX",
      "url": `${baseUrl}/services`
    }
  },

  portfolio: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Portfolio - DeepSightX",
    "url": `${baseUrl}/portfolio`
  }
};

const StructuredData = ({ type }) => {
  const data = schemas[type];
  const organization = schemas.organization;

  return (
    <Helmet>
      {organization && (
        <script type="application/ld+json">{JSON.stringify(organization)}</script>
      )}
      {data && (
        <script type="application/ld+json">{JSON.stringify(data)}</script>
      )}
    </Helmet>
  );
};

export default StructuredData;
