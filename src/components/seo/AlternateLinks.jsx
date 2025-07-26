import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const languages = ['en', 'ar', 'de']; 
const baseUrl = 'https://www.deepsightx.com'; 

const AlternateLinks = () => {
  const { pathname } = useLocation();

  return (
    <Helmet>
<meta name="google-site-verification" content="BMohf_htfC9DtNi8r_9AQCdPZJoroW-21AMEY8MkukM" />      {languages.map((lang) => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={lang}
          href={`${baseUrl}/${lang}${pathname}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/en${pathname}`} />
    </Helmet>
  );
};

export default AlternateLinks;
