'use client';

import React from 'react';
import { Header, Footer, Hero, SectionHeading, CTAButton, LocalBusinessSchema, BreadcrumbSchema } from '../components';
import { businessInfo, blogPosts, images } from '../data/content';

const UsefulTips: React.FC = () => {
  const breadcrumbs = [{ name: 'Home', url: '/' }, { name: 'Useful Tips', url: '/useful-tips' }];

  // Quick tips data
  const quickTips = [
    {
      title: 'Refrigerator Maintenance',
      tips: [
        'Clean condenser coils every 6-12 months',
        'Check door seals for proper closure',
        'Keep temperature between 35-38°F',
        'Don\'t overfill - air needs to circulate',
        'Replace water filter every 6 months',
      ],
    },
    {
      title: 'Washer Care',
      tips: [
        'Clean the lint filter after each use',
        'Leave the door open after use to prevent mold',
        'Run a cleaning cycle monthly',
        'Use HE detergent for HE washers',
        'Don\'t overload the drum',
      ],
    },
    {
      title: 'Dryer Safety',
      tips: [
        'Clean the lint trap before every load',
        'Have the vent cleaned annually',
        'Check the vent hose for kinks',
        'Don\'t overload the dryer',
        'Keep the area around the dryer clear',
      ],
    },
    {
      title: 'Dishwasher Tips',
      tips: [
        'Clean the filter monthly',
        'Run hot water before starting',
        'Don\'t pre-rinse excessively',
        'Use the right detergent amount',
        'Run an empty cycle with vinegar quarterly',
      ],
    },
    {
      title: 'Oven & Range Care',
      tips: [
        'Clean spills promptly',
        'Check burner ignition regularly',
        'Calibrate temperature annually',
        'Replace worn door seals',
        'Never use oven cleaner on self-cleaning ovens',
      ],
    },
    {
      title: 'General Maintenance',
      tips: [
        'Schedule annual professional maintenance',
        'Keep appliances level',
        'Read your owner\'s manual',
        'Register appliances for warranty',
        'Don\'t ignore unusual sounds or smells',
      ],
    },
  ];

  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      <main>
        <Hero
          title="Useful Tips"
          subtitle="Appliance Care Guide"
          description="Expert advice to help you maintain your appliances and prevent costly repairs."
          image={images.kitchen}
          showCTA={false}
          overlay="gradient"
          height="medium"
          align="center"
        />

        <div className="bg-gray-50 py-4 border-b border-gray-100">
          <div className="container mx-auto px-6">
            <nav className="flex items-center space-x-2 text-sm">
              <a href="/" className="text-gray-500 hover:text-[#D4AF37]">Home</a>
              <span className="text-gray-300">/</span>
              <span className="text-[#D4AF37]">Useful Tips</span>
            </nav>
          </div>
        </div>

        {/* Quick Tips Grid */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <SectionHeading
              subtitle="Maintenance Tips"
              title="Keep Your Appliances Running Smoothly"
              description="Follow these expert tips to extend the life of your appliances and avoid common problems."
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {quickTips.map((category, i) => (
                <div
                  key={i}
                  className="bg-gray-50 p-8 border border-gray-100 hover:border-[#D4AF37] transition-all duration-300"
                >
                  <h3 className="font-serif text-xl text-black mb-6">{category.title}</h3>
                  <ul className="space-y-3">
                    {category.tips.map((tip, j) => (
                      <li key={j} className="flex items-start">
                        <svg className="w-4 h-4 text-[#D4AF37] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-6">
            <SectionHeading
              subtitle="From Our Blog"
              title="In-Depth Guides"
              description="Read our detailed guides for troubleshooting common appliance problems."
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              {blogPosts.map((post) => (
                <a
                  key={post.id}
                  href={`/${post.slug}`}
                  className="group bg-white border border-gray-100 overflow-hidden hover:border-[#D4AF37] transition-all duration-300"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <span className="text-[#D4AF37] text-xs uppercase tracking-wider">{post.category}</span>
                    <h3 className="font-serif text-xl text-black mt-2 mb-4 group-hover:text-[#D4AF37] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{post.excerpt}</p>
                    <p className="text-[#D4AF37] text-sm mt-4 flex items-center">
                      Read More
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </p>
                  </div>
                </a>
              ))}
            </div>
            <div className="text-center mt-12">
              <CTAButton href="/blog" variant="outline" size="lg" icon="arrow">
                View All Articles
              </CTAButton>
            </div>
          </div>
        </section>

        {/* When to Call a Pro */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <SectionHeading
                subtitle="Know When to Call"
                title="When to Call a Professional"
                align="center"
              />
              <div className="mt-12 space-y-6">
                <p className="text-gray-600 leading-relaxed text-center">
                  While regular maintenance can prevent many issues, some problems require
                  professional attention. Call us immediately if you notice:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  {[
                    'Gas smell from any appliance',
                    'Burning smell or smoke',
                    'Appliance won\'t turn on',
                    'Unusual or loud noises',
                    'Water leaking from appliance',
                    'Error codes on display',
                    'Appliance overheating',
                    'Electrical sparks or shocks',
                  ].map((warning, i) => (
                    <div key={i} className="flex items-center bg-gray-50 p-4 border border-gray-100">
                      <svg className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span className="text-gray-700 text-sm">{warning}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-32 bg-black">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-px bg-[#D4AF37] mx-auto mb-8" />
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-light mb-4 block">Need Help?</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-light leading-tight mb-6">
                Having Appliance Problems?
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-10">
                Our expert technicians are ready to diagnose and repair any appliance issue.
                Schedule today, get service tomorrow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`} variant="primary" size="lg" icon="phone">
                  Call {businessInfo.phone}
                </CTAButton>
                <CTAButton href="/contact" variant="outline" size="lg" icon="arrow">
                  Request Service
                </CTAButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default UsefulTips;
