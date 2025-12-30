'use client';

import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { IMAGES } from '../utils/constants';

interface BlogPost { id: string; title: string; excerpt: string; category: string; author: string; date: string; readTime: string; image: string; featured?: boolean; }

const blogPosts: BlogPost[] = [
  { id: '1', title: 'When to Repair vs. Replace Your Refrigerator', excerpt: 'Is your refrigerator on its last legs? Learn the key factors to consider when deciding whether to repair or replace your appliance.', category: 'Refrigerator', author: 'Robert Thompson', date: 'December 28, 2024', readTime: '5 min read', image: IMAGES.kitchen, featured: true },
  { id: '2', title: '10 Signs Your Washer Needs Professional Repair', excerpt: 'Strange noises? Leaking water? Discover the telltale signs that your washing machine needs professional attention.', category: 'Washer', author: 'Maria Garcia', date: 'December 25, 2024', readTime: '4 min read', image: IMAGES.appliance1 },
  { id: '3', title: 'Dryer Maintenance Tips to Extend Its Lifespan', excerpt: 'Simple maintenance tasks can add years to your dryer life. Follow these expert tips to keep it running efficiently.', category: 'Dryer', author: 'James Wilson', date: 'December 22, 2024', readTime: '6 min read', image: IMAGES.appliance2 },
  { id: '4', title: 'Why Is My Dishwasher Not Cleaning Properly?', excerpt: 'Common causes of poor dishwasher performance and what you can do to fix them before calling a professional.', category: 'Dishwasher', author: 'Sarah Chen', date: 'December 20, 2024', readTime: '4 min read', image: IMAGES.hero },
  { id: '5', title: 'Understanding Your Oven Error Codes', excerpt: 'Modern ovens display error codes when something goes wrong. Learn what the most common codes mean.', category: 'Oven', author: 'Robert Thompson', date: 'December 18, 2024', readTime: '5 min read', image: IMAGES.kitchen },
];

const categories = ['All', 'Refrigerator', 'Washer', 'Dryer', 'Dishwasher', 'Oven'];

export const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="blog" />
      <section className="bg-[#0A1628] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"><div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} /></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#3B82F6]/20 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10 max-w-3xl">
          <span className="text-[#3B82F6] font-bold text-sm uppercase tracking-widest mb-4 block">Expert Insights</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Appliance Tips<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]"> & Guides </span></h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">Expert advice, maintenance tips, and repair guides from our certified technicians.</p>
        </div>
      </section>

      <section className="py-12 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="relative w-full lg:w-96">
              <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search articles..." className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#3B82F6] focus:outline-none transition-colors" />
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
            <div className="flex flex-wrap items-center gap-2">{categories.map((category) => (<button key={category} onClick={() => setActiveCategory(category)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category ? 'bg-[#0A1628] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{category}</button>))}</div>
          </div>
        </div>
      </section>

      {featuredPost && activeCategory === 'All' && !searchQuery && (
        <section className="py-16">
          <div className="container mx-auto px-6">
            <a href={`/blog/${featuredPost.id}`} className="block group">
              <div className="grid lg:grid-cols-2 gap-8 items-center bg-gray-50 rounded-3xl overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="relative h-72 lg:h-96 overflow-hidden"><img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /><div className="absolute top-4 left-4 px-4 py-2 bg-[#3B82F6] text-white text-sm font-bold rounded-full">Featured</div></div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-4 mb-4"><span className="px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-sm font-bold rounded-full">{featuredPost.category}</span><span className="text-gray-400 text-sm">{featuredPost.readTime}</span></div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4 group-hover:text-[#3B82F6] transition-colors">{featuredPost.title}</h2>
                  <p className="text-gray-600 text-lg mb-6 line-clamp-3">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3"><div className="w-10 h-10 bg-[#0A1628] rounded-full flex items-center justify-center text-white font-bold">{featuredPost.author.charAt(0)}</div><div><p className="font-medium text-[#0A1628]">{featuredPost.author}</p><p className="text-gray-400 text-sm">{featuredPost.date}</p></div></div>
                    <span className="flex items-center space-x-2 text-[#3B82F6] font-bold group-hover:translate-x-2 transition-transform"><span>Read Article</span><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </section>
      )}

      <section className="py-16">
        <div className="container mx-auto px-6">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20"><svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><h3 className="text-2xl font-bold text-[#0A1628] mb-2">No articles found</h3><p className="text-gray-600">Try adjusting your search or filter criteria.</p></div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{regularPosts.map((post) => (<BlogCard key={post.id} post={post} />))}</div>
          )}
        </div>
      </section>

      <section className="py-20 bg-[#0A1628]">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-gray-400 text-lg mb-8">Subscribe to our newsletter for the latest appliance tips, maintenance guides, and exclusive offers.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#3B82F6] transition-colors" />
            <button type="submit" className="px-8 py-4 bg-[#3B82F6] text-white rounded-xl font-bold hover:bg-[#2563EB] transition-colors">Subscribe</button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <a href={`/blog/${post.id}`} className="group bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-[#3B82F6] hover:shadow-xl transition-all">
    <div className="relative h-56 overflow-hidden"><img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /><div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-[#0A1628] text-sm font-bold rounded-full">{post.category}</div></div>
    <div className="p-6">
      <div className="flex items-center space-x-4 mb-3"><span className="text-gray-400 text-sm">{post.date}</span><span className="w-1 h-1 bg-gray-300 rounded-full" /><span className="text-gray-400 text-sm">{post.readTime}</span></div>
      <h3 className="text-xl font-bold text-[#0A1628] mb-3 group-hover:text-[#3B82F6] transition-colors line-clamp-2">{post.title}</h3>
      <p className="text-gray-600 mb-6 line-clamp-2">{post.excerpt}</p>
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-3"><div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold text-sm">{post.author.charAt(0)}</div><span className="text-sm text-gray-600">{post.author}</span></div>
        <span className="text-[#3B82F6] group-hover:translate-x-1 transition-transform"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
      </div>
    </div>
  </a>
);
