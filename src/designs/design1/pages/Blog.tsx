'use client';

import React, { useState } from 'react';
import { Header, Footer, Hero, SectionHeading, CTAButton, LocalBusinessSchema, BreadcrumbSchema } from '../components';
import { businessInfo, blogPosts, images } from '../data/content';
import { BlogPost } from '../types';

interface BlogCardProps { post: BlogPost; featured?: boolean; }

const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false }) => {
  const formatDate = (dateString: string) => new Date(dateString).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  if (featured) {
    return (
      <a href={`/blog/${post.slug}`} className="group block">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="aspect-[4/3] overflow-hidden"><img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" /></div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-[#D4AF37] text-xs uppercase tracking-wider">{post.category}</span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-500 text-xs">{formatDate(post.date)}</span>
            </div>
            <h2 className="font-serif text-2xl lg:text-3xl text-black mb-4 group-hover:text-[#D4AF37] transition-colors">{post.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-6">{post.excerpt}</p>
            <div className="flex items-center justify-between">
              <span className="text-gray-500 text-sm">{post.readTime} min read</span>
              <span className="inline-flex items-center text-[#D4AF37] text-sm uppercase tracking-wider">Read More<svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></span>
            </div>
          </div>
        </div>
      </a>
    );
  }

  return (
    <a href={`/blog/${post.slug}`} className="group block">
      <div className="aspect-[4/3] overflow-hidden mb-6"><img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" /></div>
      <div className="flex items-center space-x-4 mb-3">
        <span className="text-[#D4AF37] text-xs uppercase tracking-wider">{post.category}</span>
        <span className="text-gray-400">|</span>
        <span className="text-gray-500 text-xs">{formatDate(post.date)}</span>
      </div>
      <h3 className="font-serif text-xl text-black mb-3 group-hover:text-[#D4AF37] transition-colors">{post.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
      <span className="text-gray-500 text-xs">{post.readTime} min read</span>
    </a>
  );
};

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const breadcrumbs = [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }];
  const categories = ['All', ...new Set(blogPosts.map((post) => post.category))];
  const filteredPosts = selectedCategory === 'All' ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      <main>
        <Hero title="Expert Insights" subtitle="Our Blog" description="Tips, guides, and industry insights from our team of premier appliance experts." image={images.blog} showCTA={false} overlay="gradient" height="small" align="center" />

        <div className="bg-gray-50 py-4 border-b border-gray-100">
          <div className="container mx-auto px-6">
            <nav className="flex items-center space-x-2 text-sm">
              <a href="/" className="text-gray-500 hover:text-[#D4AF37]">Home</a><span className="text-gray-300">/</span><span className="text-[#D4AF37]">Blog</span>
            </nav>
          </div>
        </div>

        <section className="py-8 bg-white border-b border-gray-100">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-4">
              {categories.map((category) => (
                <button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 py-2 text-sm uppercase tracking-wider transition-all ${selectedCategory === category ? 'bg-[#D4AF37] text-black' : 'text-gray-600 hover:text-[#D4AF37] border border-gray-200 hover:border-[#D4AF37]'}`}>{category}</button>
              ))}
            </div>
          </div>
        </section>

        {filteredPosts[0] && (
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="mb-8"><span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em]">Featured Article</span></div>
              <BlogCard post={filteredPosts[0]} featured={true} />
            </div>
          </section>
        )}

        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <SectionHeading subtitle="Latest Articles" title="More From Our Blog" align="center" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {filteredPosts.slice(1).map((post) => <BlogCard key={post.id} post={post} />)}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <SectionHeading subtitle="Stay Informed" title="Subscribe to Our Newsletter" description="Get expert tips and exclusive offers delivered to your inbox." align="center" />
              <form className="mt-8 flex flex-col sm:flex-row gap-4">
                <input type="email" placeholder="Enter your email address" className="flex-1 px-4 py-3 border border-gray-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors" />
                <CTAButton type="submit" variant="primary" size="md">Subscribe</CTAButton>
              </form>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-black">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-px bg-[#D4AF37] mx-auto mb-8" />
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-light mb-4 block">Need Service?</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-light leading-tight mb-6">Expert Help Just a Call Away</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`} variant="primary" size="lg" icon="phone">Call {businessInfo.phone}</CTAButton>
                <CTAButton href="/contact" variant="outline" size="lg" icon="arrow">Schedule Service</CTAButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
