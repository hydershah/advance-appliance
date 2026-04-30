import React from 'react';
import { businessInfo, services, serviceAreas } from '../data/content';

/**
 * Resolves the canonical site URL at render time. Uses NEXT_PUBLIC_SERVER_URL
 * with a production fallback so schema never points at localhost (which used
 * to make Google attribute SERPs to the Railway preview deployment).
 */
function getBaseUrl() {
  return (
    process.env.NEXT_PUBLIC_SERVER_URL ||
    (process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://www.appliancenj.com')
  );
}

// Safe JSON-LD: prevent `</script>` breakouts when any value originates from
// a CMS or any user input.
function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

interface LocalBusinessSchemaProps { page?: 'home' | 'about' | 'contact' | 'services'; }

export const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = () => {
  const BASE_URL = getBaseUrl();
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}/#organization`,
    name: businessInfo.name,
    description:
      'Factory-certified appliance repair services for premier brands including Sub-Zero, Viking, Wolf, Thermador, and Miele. Serving Monmouth and Middlesex Counties, NJ since 1992.',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    image: `${BASE_URL}/logo.png`,
    telephone: businessInfo.phone,
    email: businessInfo.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '23 Reids Hill Road',
      addressLocality: 'Morganville',
      addressRegion: 'NJ',
      postalCode: '07751',
      addressCountry: 'US',
    },
    // Coordinates for 23 Reids Hill Road, Morganville, NJ 07751.
    // Earlier value (40.7261, -74.3073) was Parsippany/Newark — wrong county
    // entirely, breaking local-search ranking signals.
    geo: { '@type': 'GeoCoordinates', latitude: 40.3565, longitude: -74.2532 },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '08:00', closes: '21:00' },
    ],
    priceRange: '$$',
    areaServed: serviceAreas.map((area) => ({ '@type': 'City', name: area.name, containedInPlace: { '@type': 'State', name: 'New Jersey' } })),
    hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Appliance Repair Services', itemListElement: services.map((service) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: service.name, description: service.shortDescription } })) },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '127', bestRating: '5', worstRating: '1' },
    sameAs: [businessInfo.socialMedia.facebook, businessInfo.socialMedia.instagram, businessInfo.socialMedia.twitter, businessInfo.socialMedia.youtube],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />;
};

/**
 * WebSite schema — tells Google the canonical site name for the SERP source
 * badge. Without this on every indexable page, Google can fall back to
 * preview-deploy metadata (e.g. Railway) for the source label.
 */
export const WebSiteSchema: React.FC = () => {
  const BASE_URL = getBaseUrl();
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    name: businessInfo.name,
    alternateName: 'Advanced Appliance',
    url: BASE_URL,
    description:
      'Factory-certified appliance repair across Monmouth and Middlesex Counties, NJ. Sub-Zero, Wolf, Viking, Thermador, Miele, and all major brands. 30+ years.',
    publisher: { '@id': `${BASE_URL}/#organization` },
    inLanguage: 'en-US',
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />;
};

interface ServiceSchemaProps { serviceName: string; serviceDescription: string; serviceUrl: string; }
export const ServiceSchema: React.FC<ServiceSchemaProps> = ({ serviceName, serviceDescription, serviceUrl }) => {
  const BASE_URL = getBaseUrl();
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    url: serviceUrl,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${BASE_URL}/#organization`,
      name: businessInfo.name,
      telephone: businessInfo.phone,
    },
    areaServed: serviceAreas.map((area) => ({ '@type': 'City', name: area.name })),
    serviceType: 'Appliance Repair',
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />;
};

interface BreadcrumbSchemaProps { items: { name: string; url: string }[]; }
export const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ items }) => {
  const BASE_URL = getBaseUrl();
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      // BreadcrumbList wants `item` (the URL), not `@id`. Resolve relative
      // paths against the canonical base.
      item: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />;
};

interface FAQSchemaProps { faqs: { question: string; answer: string }[]; }
export const FAQSchema: React.FC<FAQSchemaProps> = ({ faqs }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />;
};

interface ArticleSchemaProps { title: string; description: string; author: string; datePublished: string; dateModified?: string; image: string; url: string; }
export const ArticleSchema: React.FC<ArticleSchemaProps> = ({ title, description, author, datePublished, dateModified, image, url }) => {
  const BASE_URL = getBaseUrl();
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image,
    author: { '@type': 'Person', name: author },
    publisher: {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: businessInfo.name,
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo.png` },
    },
    datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />;
};

export default LocalBusinessSchema;
