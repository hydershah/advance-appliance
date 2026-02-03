'use client';

import React from 'react';
import { Header, Footer, BreadcrumbSchema } from '../components';
import { businessInfo } from '../data/content';

const SMSCompliance: React.FC = () => {
  const breadcrumbs = [{ name: 'Home', url: '/' }, { name: 'SMS / Messaging Compliance', url: '/sms-messaging-compliance' }];

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
              <span className="text-[#D4AF37]">SMS / Messaging Compliance</span>
            </nav>
          </div>
        </div>

        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h1 className="font-serif text-4xl md:text-5xl text-black mb-8">SMS / Messaging Compliance</h1>
              <p className="text-gray-500 text-sm mb-12">Last updated: January 2024</p>

              <div className="prose prose-lg max-w-none">
                <h2 className="font-serif text-2xl text-black mt-8 mb-4">SMS Messaging Terms</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {businessInfo.name} may send SMS (text) messages to customers who have opted
                  in to receive such communications. By providing your phone number and opting
                  in, you agree to receive text messages from us regarding your service appointments
                  and related communications.
                </p>

                <h2 className="font-serif text-2xl text-black mt-8 mb-4">Types of Messages</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may send you the following types of messages:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Appointment confirmations</li>
                  <li>Appointment reminders</li>
                  <li>Technician arrival notifications</li>
                  <li>Service completion updates</li>
                  <li>Follow-up satisfaction surveys</li>
                  <li>Important service-related updates</li>
                </ul>

                <h2 className="font-serif text-2xl text-black mt-8 mb-4">Message Frequency</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Message frequency varies based on your service interactions. You may receive
                  multiple messages related to a single service appointment. We do not send
                  marketing messages without your explicit consent.
                </p>

                <h2 className="font-serif text-2xl text-black mt-8 mb-4">Opting Out</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  You may opt out of receiving SMS messages at any time by:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Replying STOP to any message we send</li>
                  <li>Calling us at {businessInfo.phone}</li>
                  <li>Emailing us at {businessInfo.email}</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mb-6">
                  After opting out, you will receive a confirmation message and will no longer
                  receive SMS messages from us unless you opt back in.
                </p>

                <h2 className="font-serif text-2xl text-black mt-8 mb-4">Help and Support</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  For help with our SMS messaging service, reply HELP to any message or contact us:
                </p>
                <div className="bg-gray-50 p-6 border border-gray-100 mb-6">
                  <p className="text-gray-600">Phone: {businessInfo.phone}</p>
                  <p className="text-gray-600">Email: {businessInfo.email}</p>
                </div>

                <h2 className="font-serif text-2xl text-black mt-8 mb-4">Message and Data Rates</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Standard message and data rates may apply to SMS messages. Check with your
                  mobile carrier for details about your messaging plan.
                </p>

                <h2 className="font-serif text-2xl text-black mt-8 mb-4">Carrier Liability</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Carriers are not liable for delayed or undelivered messages. Message delivery
                  is subject to effective transmission from your network operator.
                </p>

                <h2 className="font-serif text-2xl text-black mt-8 mb-4">Privacy</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We respect your privacy and will not share your phone number with third parties
                  for marketing purposes. Your information is handled in accordance with our{' '}
                  <a href="/privacy-policy" className="text-[#D4AF37] hover:underline">Privacy Policy</a>.
                </p>

                <h2 className="font-serif text-2xl text-black mt-8 mb-4">Supported Carriers</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our SMS service supports all major U.S. mobile carriers including AT&T,
                  Verizon, T-Mobile, Sprint, and most regional carriers. Service may vary
                  depending on your carrier and location.
                </p>

                <h2 className="font-serif text-2xl text-black mt-8 mb-4">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have questions about our SMS messaging practices, please contact us:
                </p>
                <div className="bg-gray-50 p-6 border border-gray-100">
                  <p className="text-gray-600">{businessInfo.name}</p>
                  <p className="text-gray-600">{businessInfo.address}</p>
                  <p className="text-gray-600">Phone: {businessInfo.phone}</p>
                  <p className="text-gray-600">Email: {businessInfo.email}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SMSCompliance;
