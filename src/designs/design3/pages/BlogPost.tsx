'use client';

import React from 'react';
import { Navigation, Footer, OrnamentDivider, Breadcrumb, Button } from '../components';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { BlogPost as BlogPostType } from '../types';

const post: BlogPostType = {
  id: '1', title: 'When to Repair vs. Replace Your Refrigerator: A Comprehensive Guide',
  excerpt: 'Learn the key factors that determine whether your refrigerator is worth repairing.',
  content: `Making the decision between repairing and replacing a major appliance like a refrigerator can be challenging. This guide will help you understand the key factors to consider.

The 50% Rule: A general rule is if the cost of repair exceeds 50% of the price of a new appliance, replacement might be more economical. However, luxury appliances are an exception.

Age Matters: Average refrigerator lifespan is 10-15 years, though premium brands like Sub-Zero can last 20 years or more with proper maintenance.

Minor repairs that are cost-effective include door seal replacement, thermostat issues, water dispenser problems, and ice maker repairs.

Major repairs that might warrant replacement: Compressor failure on older units, sealed system leaks, and multiple component failures.

When in doubt, our expert technicians can provide an honest assessment.`,
  author: 'Robert Mitchell', date: 'December 15, 2024',
  image: 'https://images.pexels.com/photos/6636288/pexels-photo-6636288.jpeg',
  category: 'Maintenance Tips', readTime: '5 min read',
};

const relatedPosts = [
  { id: '2', title: 'The Art of Maintaining Luxury Appliances', image: 'https://images.pexels.com/photos/3316922/pexels-photo-3316922.jpeg', date: 'December 10, 2024', readTime: '7 min read' },
  { id: '3', title: 'Sub-Zero Refrigerator Care: Expert Recommendations', image: 'https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg', date: 'December 5, 2024', readTime: '6 min read' },
  { id: '4', title: 'Signs Your Dishwasher Needs Professional Attention', image: 'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg', date: 'November 28, 2024', readTime: '4 min read' },
];

const BlogPost: React.FC = () => {
  const [contentRef, contentVisible] = useScrollAnimation<HTMLDivElement>();

  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => {
      if (paragraph.trim()) {
        return <p key={index} className="font-serif text-forest/80 leading-relaxed mb-4">{paragraph}</p>;
      }
      return null;
    });
  };

  return (
    <div className="min-h-screen bg-contemporary-platinum-200">
      <Navigation />

      <section className="relative">
        <div className="h-96 md:h-[500px] relative overflow-hidden">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-contemporary-charcoal-900 via-contemporary-charcoal-900/50 to-transparent" />
          <div className="absolute top-8 left-8 w-12 h-12 border-t-4 border-l-4 border-contemporary-gold-500/50" />
          <div className="absolute top-8 right-8 w-12 h-12 border-t-4 border-r-4 border-contemporary-gold-500/50" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: post.category ?? 'Article' }]} className="mb-6 text-contemporary-platinum-400/60" />
            <span className="inline-block px-4 py-2 bg-contemporary-slate-900 text-contemporary-white font-poppins text-sm rounded-full mb-4">{post.category}</span>
            <h1 className="font-playfair font-bold text-3xl sm:text-4xl md:text-5xl text-contemporary-white leading-tight">{post.title}</h1>
          </div>
        </div>
      </section>

      <section ref={contentRef} className="py-12 bg-contemporary-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-wrap items-center gap-6 pb-8 border-b border-contemporary-platinum-400/20 mb-8 transform transition-all duration-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-contemporary-charcoal-900 flex items-center justify-center"><span className="font-playfair font-bold text-contemporary-white">{(post.author ?? 'A').charAt(0)}</span></div>
              <div><p className="font-playfair font-bold text-contemporary-charcoal-900">{post.author ?? 'Author'}</p><p className="font-poppins text-contemporary-charcoal-900/60 text-sm">Master Technician</p></div>
            </div>
            <div className="flex items-center space-x-4 text-sm text-contemporary-charcoal-900/60 font-poppins"><span>{post.date}</span><span>|</span><span>{post.readTime}</span></div>
            <div className="flex-1" />
            <div className="flex items-center space-x-3">
              <span className="font-poppins text-contemporary-charcoal-900/60 text-sm">Share:</span>
              <button className="w-8 h-8 rounded-full bg-contemporary-charcoal-900/10 flex items-center justify-center text-contemporary-charcoal-900 hover:bg-contemporary-charcoal-900 hover:text-contemporary-white transition-colors"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" /></svg></button>
              <button className="w-8 h-8 rounded-full bg-contemporary-charcoal-900/10 flex items-center justify-center text-contemporary-charcoal-900 hover:bg-contemporary-charcoal-900 hover:text-contemporary-white transition-colors"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg></button>
            </div>
          </div>
          <article className={`transform transition-all duration-700 delay-200 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {renderContent(post.content ?? '')}
          </article>
          <div className="mt-12 pt-8 border-t border-contemporary-platinum-400/20">
            <div className="flex flex-wrap gap-2">
              {['Refrigerator', 'Repair Tips', 'Maintenance', 'Home Appliances'].map((tag) => (<span key={tag} className="px-4 py-2 bg-contemporary-platinum-200 text-contemporary-charcoal-900 font-poppins text-sm rounded-full hover:bg-contemporary-charcoal-900 hover:text-contemporary-white transition-colors cursor-pointer">{tag}</span>))}
            </div>
          </div>
          <div className="mt-12 p-8 bg-contemporary-platinum-200 rounded-xl border border-contemporary-platinum-400/30">
            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 rounded-full bg-contemporary-charcoal-900 flex items-center justify-center flex-shrink-0"><span className="font-playfair font-bold text-2xl text-contemporary-white">{(post.author ?? 'A').charAt(0)}</span></div>
              <div><h3 className="font-playfair font-bold text-xl text-contemporary-charcoal-900 mb-2">About {post.author ?? 'the Author'}</h3><p className="font-poppins text-contemporary-charcoal-900/70 leading-relaxed">With over 35 years of experience in appliance repair, {post.author ?? 'our team'} founded Advanced Appliance Repair Service in 1992.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-contemporary-slate-900 text-contemporary-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair font-bold text-3xl text-contemporary-white mb-4">Need Professional Appliance Help?</h2>
          <p className="font-poppins text-contemporary-platinum-400 mb-6">Our expert technicians are ready to assist with all your appliance needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-contemporary-white text-contemporary-slate-900 hover:bg-contemporary-gold-500 hover:text-contemporary-charcoal-900 border-contemporary-white" href="/contact">Schedule Service</Button>
            <Button variant="outline" className="border-contemporary-white text-contemporary-white hover:bg-contemporary-white hover:text-contemporary-slate-900" href="tel:7324167430">(732) 416-7430</Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-contemporary-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><p className="text-contemporary-gold-500 font-montserrat tracking-widest uppercase mb-4">Continue Reading</p><h2 className="font-playfair font-bold text-3xl text-contemporary-charcoal-900 mb-4">Related Articles</h2><OrnamentDivider variant="simple" color="contemporary-gold-500" className="max-w-xs mx-auto" /></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <a key={relatedPost.id} href={`/blog/${relatedPost.id}`} className="group bg-contemporary-white border-2 border-contemporary-platinum-400/30 rounded-xl overflow-hidden hover:border-contemporary-gold-500 hover:shadow-xl transition-all">
                <div className="aspect-[16/10] overflow-hidden"><img src={relatedPost.image} alt={relatedPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 text-xs text-contemporary-charcoal-900/60 font-poppins mb-3"><span>{relatedPost.date}</span><span>|</span><span>{relatedPost.readTime}</span></div>
                  <h3 className="font-playfair font-bold text-lg text-contemporary-charcoal-900 group-hover:text-contemporary-gold-500 transition-colors line-clamp-2">{relatedPost.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
