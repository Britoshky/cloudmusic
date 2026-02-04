import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export function SEOHead({
  title = 'Cloud Music | Servicios Digitales de Audio, Streaming y Desarrollo Web en Chile',
  description = 'Empresa chilena de economía creativa especializada en audio profesional, locución digital, streaming, radios online, desarrollo web e infraestructura. Soluciones digitales accesibles y escalables.',
  keywords = 'audio profesional chile, locución comercial, streaming radio online, desarrollo web, servidores chile, economía creativa, servicios digitales audio, radio online chile, voces comerciales, plataformas streaming',
  ogImage = 'https://cloudmusic.cl/og-image.jpg',
  canonicalUrl = 'https://cloudmusic.cl'
}: SEOHeadProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Set meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'author', content: 'Cloud Music' },
      { name: 'robots', content: 'index, follow' },
      { name: 'language', content: 'Spanish' },
      { name: 'geo.region', content: 'CL' },
      { name: 'geo.placename', content: 'Chile' },
      
      // Open Graph / Facebook
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      { property: 'og:locale', content: 'es_CL' },
      
      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: canonicalUrl },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
      
      // Mobile
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'theme-color', content: '#00D4FF' },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const attribute = property ? 'property' : 'name';
      const value = property || name;
      
      let element = document.querySelector(`meta[${attribute}="${value}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, value);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    });

    // Add canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // Add JSON-LD structured data
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Cloud Music',
      description: 'Empresa chilena de economía creativa especializada en servicios digitales de audio, streaming y desarrollo web',
      url: canonicalUrl,
      logo: ogImage,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+56956197415',
        contactType: 'customer service',
        areaServed: 'CL',
        availableLanguage: 'Spanish'
      },
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'CL'
      },
      sameAs: [
        'https://instagram.com/cloudmusic'
      ],
      founder: {
        '@type': 'Organization',
        name: 'Cloud Music'
      },
      foundingDate: '2020',
      areaServed: {
        '@type': 'Country',
        name: 'Chile'
      },
      serviceType: [
        'Audio Profesional',
        'Locución Digital',
        'Streaming',
        'Radio Online',
        'Desarrollo Web',
        'Infraestructura Digital'
      ]
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, ogImage, canonicalUrl]);

  return null;
}
