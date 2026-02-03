'use client';

import React from 'react';
import { Header, Footer, BreadcrumbSchema } from '../components';
import { businessInfo } from '../data/content';

const PrivacyPolicy: React.FC = () => {
  const breadcrumbs = [{ name: 'Home', url: '/' }, { name: 'Privacy Policy', url: '/privacy-policy' }];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      <main>
        <div className="bg-gray-50 py-4 border-b border-gray-100">
          <div className="container mx-auto px-6">
            <nav className="flex items-center space-x-2 text-sm">
              <a href="/" className="text-gray-500 hover:text-[#D4AF37]">Home</a>
              <span className="text-gray-300">/</span>
              <span className="text-[#D4AF37]">Privacy Policy</span>
            </nav>
          </div>
        </div>

        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h1 className="font-serif text-4xl md:text-5xl text-black mb-8">Privacy Policy</h1>
              <p className="text-gray-500 text-sm mb-12">Last updated: January 2024</p>

              <div className="prose prose-lg max-w-none">
                <h2 className="font-serif text-2xl text-black mt-8 mb-4">Introduction</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {businessInfo.name} ("we," "our," or "us") respects your privacy and is committed
                  to protecting your personal information. This Privacy Policy explains how we collect,
                  use, disclose, and safeguard your information when you visit our website or use our services.
                </p>

                <h2 className="font-serif text-2xl text-black mt-8 mb-4">Information We Collect</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may collect information about you in various ways, including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Personal information you provide (name, email, phone number, address)</li>
                  <li>Service request information (appliance type, issue description)</li>
                  <li>Payment information when processing transactions</li>
                  <li>Usage data and analytics from website visits</li>
                  <li>Communications you send to us</li>
                </ul>

                <h2 className="font-serif text-2xl text-black mt-8 mb-4">How We Use Your Information</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process and complete service requests</li>
                  <li>Send you appointment confirmations and reminders</li>
                  <li>Respond to your inquiries and customer service requests</li>
                  <li>Send promotional communications (with your consent)</li>
                  <li>Monitor and analyze usage patterns</li>
                </ul>

                <h2 className="font-serif text-2xl text-black mt-8 mb-4">Information Sharing</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We do not sell, trade, or rent your personal information to third parties.
                  We may share your information with service providers who assist us in operating
                  our business, processing payments, or delivering services to you. These third
                  parties are obligated to maintain the confidentiality of your information.
                </p>

                <h2 className="font-serif text-2xl text-black mt-8 mb-4">Data Security</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We implement appropriate technical and organizational security measures to protect
                  your personal information against unauthorized access, alteration, disclosure, or
                  destruction. However, no method of transmission over the Internet is 100% secure.
                </p>

                <h2 className="font-serif text-2xl text-black mt-8 mb-4">Cookies and Tracking</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We may use cookies and similar tracking technologies to enhance your experience
                  on our website. You can control cookie preferences through your browser settings.
                </p>

                <h2 className="font-serif text-2xl text-black mt-8 mb-4">Your Rights</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Access and receive a copy of your personal information</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>

                <h2 className="font-serif text-2xl text-black mt-8 mb-4">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  If you have questions about this Privacy Policy or our privacy practices,
                  please contact us:
                </p>
                <div className="bg-gray-50 p-6 border border-gray-100">
                  <p className="text-gray-600">{businessInfo.name}</p>
                  <p className="text-gray-600">{businessInfo.address}</p>
                  <p className="text-gray-600">Phone: {businessInfo.phone}</p>
                  <p className="text-gray-600">Email: {businessInfo.email}</p>
                </div>

                <h2 className="font-serif text-2xl text-black mt-8 mb-4">Changes to This Policy</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We may update this Privacy Policy from time to time. We will notify you of any
                  changes by posting the new Privacy Policy on this page and updating the "Last
                  updated" date.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
