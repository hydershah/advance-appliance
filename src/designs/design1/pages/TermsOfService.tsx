'use client';

import React from 'react';
import { Header, Footer, BreadcrumbSchema } from '../components';
import { businessInfo } from '../data/content';

const TermsOfService: React.FC = () => {
  const breadcrumbs = [{ name: 'Home', url: '/' }, { name: 'Terms of Service', url: '/terms-of-service' }];

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
              <span className="text-[#D4AF37]">Terms of Service</span>
            </nav>
          </div>
        </div>

        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h1 className="font-serif text-4xl md:text-5xl text-black mb-8">Terms of Service</h1>
              <p className="text-gray-500 text-sm mb-12">Last updated: January 2024</p>

              <div className="prose prose-lg max-w-none">
                <h2 className="font-serif text-2xl text-black mt-8 mb-4">Agreement to Terms</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  By accessing or using the services of {businessInfo.name}, you agree to be bound
                  by these Terms of Service. If you do not agree to these terms, please do not use
                  our services.
                </p>

                <h2 className="font-serif text-2xl text-black mt-8 mb-4">Services</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {businessInfo.name} provides appliance repair and maintenance services for
                  residential customers in Monmouth and Middlesex Counties, New Jersey. Our
                  services include diagnosis, repair, and maintenance of kitchen and laundry
                  appliances.
                </p>

                <h2 className="font-serif text-2xl text-black mt-8 mb-4">Service Appointments</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Appointments are scheduled based on availability</li>
                  <li>A diagnostic fee of $100 applies to all service calls</li>
                  <li>We require 24-hour notice for appointment cancellations</li>
                  <li>Same-day and next-day appointments are subject to availability</li>
                  <li>An adult (18+) must be present during the service appointment</li>
                </ul>

                <h2 className="font-serif text-2xl text-black mt-8 mb-4">Pricing and Payment</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>All prices quoted include parts and labor unless otherwise specified</li>
                  <li>Payment is due upon completion of service</li>
                  <li>We accept all major credit cards, debit cards, and checks</li>
                  <li>Price estimates are valid for 30 days</li>
                </ul>

                <h2 className="font-serif text-2xl text-black mt-8 mb-4">Warranty</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  All repairs performed by {businessInfo.name} are covered by our 90-180 day warranty:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Warranty covers both parts and labor</li>
                  <li>Warranty applies to the specific repair performed</li>
                  <li>Warranty is void if the appliance is repaired by another party</li>
                  <li>Warranty does not cover pre-existing conditions or unrelated issues</li>
                </ul>

                <h2 className="font-serif text-2xl text-black mt-8 mb-4">Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {businessInfo.name} is not responsible for any indirect, incidental, special,
                  or consequential damages arising from our services. Our liability is limited
                  to the cost of the service provided.
                </p>

                <h2 className="font-serif text-2xl text-black mt-8 mb-4">Customer Responsibilities</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Provide accurate information about the appliance and issue</li>
                  <li>Ensure safe access to the appliance</li>
                  <li>Clear the area around the appliance for technician access</li>
                  <li>Secure pets during service appointments</li>
                </ul>

                <h2 className="font-serif text-2xl text-black mt-8 mb-4">Intellectual Property</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  All content on our website, including text, graphics, logos, and images, is
                  the property of {businessInfo.name} and is protected by copyright laws.
                </p>

                <h2 className="font-serif text-2xl text-black mt-8 mb-4">Governing Law</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  These Terms of Service are governed by the laws of the State of New Jersey.
                  Any disputes arising from these terms shall be resolved in the courts of
                  Monmouth County, New Jersey.
                </p>

                <h2 className="font-serif text-2xl text-black mt-8 mb-4">Contact Information</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 p-6 border border-gray-100">
                  <p className="text-gray-600">{businessInfo.name}</p>
                  <p className="text-gray-600">{businessInfo.address}</p>
                  <p className="text-gray-600">Phone: {businessInfo.phone}</p>
                  <p className="text-gray-600">Email: {businessInfo.email}</p>
                </div>

                <h2 className="font-serif text-2xl text-black mt-8 mb-4">Changes to Terms</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We reserve the right to modify these Terms of Service at any time. Changes
                  will be effective immediately upon posting to our website.
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

export default TermsOfService;
