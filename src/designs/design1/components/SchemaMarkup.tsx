import React from 'react';
import { businessInfo, services, serviceAreas } from '../data/content';

interface LocalBusinessSchemaProps { page?: 'home' | 'about' | 'contact' | 'services'; }

export const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://advancedappliancerepair.com',
    name: businessInfo.name,
    description: 'Expert appliance repair services for premier brands including Sub-Zero, Viking, Wolf, Thermador, and Miele. Serving Short Hills, Summit, Chatham, Millburn, and Morganville, NJ.',
    url: 'https://advancedappliancerepair.com',
    telephone: businessInfo.phone,
    email: businessInfo.email,
    address: { '@type': 'PostalAddress', streetAddress: '23 Reids Hill Road', addressLocality: 'Morganville', addressRegion: 'NJ', postalCode: '07751', addressCountry: 'US' },
    geo: { '@type': 'GeoCoordinates', latitude: 40.7261, longitude: -74.3073 },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:00', closes: '20:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '09:00', closes: '16:00' },
    ],
    priceRange: '$$',
    areaServed: serviceAreas.map((area) => ({ '@type': 'City', name: area.name, containedInPlace: { '@type': 'State', name: 'New Jersey' } })),
    hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Appliance Repair Services', itemListElement: services.map((service) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: service.name, description: service.shortDescription } })) },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '127', bestRating: '5', worstRating: '1' },
    sameAs: [businessInfo.socialMedia.facebook, businessInfo.socialMedia.instagram, businessInfo.socialMedia.twitter, businessInfo.socialMedia.youtube],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
};

interface ServiceSchemaProps { serviceName: string; serviceDescription: string; serviceUrl: string; }
export const ServiceSchema: React.FC<ServiceSchemaProps> = ({ serviceName, serviceDescription, serviceUrl }) => {
  const schema = { '@context': 'https://schema.org', '@type': 'Service', name: serviceName, description: serviceDescription, url: serviceUrl, provider: { '@type': 'LocalBusiness', name: businessInfo.name, telephone: businessInfo.phone }, areaServed: serviceAreas.map((area) => ({ '@type': 'City', name: area.name })), serviceType: 'Appliance Repair' };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
};

interface BreadcrumbSchemaProps { items: { name: string; url: string }[]; }
export const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ items }) => {
  const schema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: item.url })) };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
};

interface FAQSchemaProps { faqs: { question: string; answer: string }[]; }
export const FAQSchema: React.FC<FAQSchemaProps> = ({ faqs }) => {
  const schema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
};

interface ArticleSchemaProps { title: string; description: string; author: string; datePublished: string; dateModified?: string; image: string; url: string; }
export const ArticleSchema: React.FC<ArticleSchemaProps> = ({ title, description, author, datePublished, dateModified, image, url }) => {
  const schema = { '@context': 'https://schema.org', '@type': 'Article', headline: title, description, image, author: { '@type': 'Person', name: author }, publisher: { '@type': 'Organization', name: businessInfo.name, logo: { '@type': 'ImageObject', url: 'https://advancedappliancerepair.com/logo.png' } }, datePublished, dateModified: dateModified || datePublished, mainEntityOfPage: { '@type': 'WebPage', '@id': url } };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
};

export default LocalBusinessSchema;
