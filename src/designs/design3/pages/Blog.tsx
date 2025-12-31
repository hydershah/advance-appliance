'use client';

import React, { useState } from 'react';
import { Navigation, Footer, OrnamentDivider, Breadcrumb, Button } from '../components';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { BlogPost } from '../types';

const blogPosts: BlogPost[] = [
  { id: '1', title: 'When to Repair vs. Replace Your Refrigerator', excerpt: 'Learn the key factors that determine whether your refrigerator is worth repairing.', content: '', author: 'Robert Mitchell', date: 'December 15, 2024', image: 'https://images.pexels.com/photos/6636288/pexels-photo-6636288.jpeg', category: 'Maintenance Tips', readTime: '5 min read' },
  { id: '2', title: 'The Art of Maintaining Luxury Appliances', excerpt: 'Discover the specialized care routines that keep high-end appliances performing at their best.', content: '', author: 'Michael Chen', date: 'December 10, 2024', image: 'https://images.pexels.com/photos/3316922/pexels-photo-3316922.jpeg', category: 'Expert Advice', readTime: '7 min read' },
  { id: '3', title: 'Sub-Zero Refrigerator Care: Expert Recommendations', excerpt: 'Essential maintenance tips for Sub-Zero owners to maximize lifespan.', content: '', author: 'Robert Mitchell', date: 'December 5, 2024', image: 'https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg', category: 'Brand Focus', readTime: '6 min read' },
  { id: '4', title: 'Signs Your Dishwasher Needs Professional Attention', excerpt: 'Recognize warning signs before a small issue becomes a major problem.', content: '', author: 'Sarah Thompson', date: 'November 28, 2024', image: 'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg', category: 'Maintenance Tips', readTime: '4 min read' },
  { id: '5', title: 'Winter Appliance Prep: Protecting Your Investment', excerpt: 'Prepare your home appliances for the winter months.', content: '', author: 'Michael Chen', date: 'November 20, 2024', image: 'https://images.pexels.com/photos/6489117/pexels-photo-6489117.jpeg', category: 'Seasonal', readTime: '5 min read' },
  { id: '6', title: 'Understanding Your Viking Range: Common Issues', excerpt: 'A deep dive into the most common problems with Viking ranges.', content: '', author: 'Robert Mitchell', date: 'November 15, 2024', image: 'https://images.pexels.com/photos/4397899/pexels-photo-4397899.jpeg', category: 'Brand Focus', readTime: '8 min read' },
];

const categories = ['All', 'Maintenance Tips', 'Expert Advice', 'Brand Focus', 'Seasonal'];

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const [heroRef, heroVisible] = useScrollAnimation<HTMLDivElement>();
  const [postsRef, postsVisible] = useScrollAnimation<HTMLDivElement>();

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || (post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0] as BlogPost | undefined;
  const regularPosts = filteredPosts.slice(activeCategory === 'All' && !searchQuery ? 1 : 0);

  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />

      <section ref={heroRef} className="relative py-24 bg-forest overflow-hidden">
        <div className="absolute inset-0 opacity-5"><div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #FFFAF5 1px, transparent 0)', backgroundSize: '40px 40px' }} /></div>
        <div className="absolute top-8 left-8 w-16 h-16 border-t-4 border-l-4 border-copper" />
        <div className="absolute top-8 right-8 w-16 h-16 border-t-4 border-r-4 border-copper" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-b-4 border-l-4 border-copper" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b-4 border-r-4 border-copper" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'Blog' }]} className="mb-8 text-ivory/60" />
          <div className={`text-center transform transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-copper font-serif tracking-widest uppercase mb-4">Insights & Expertise</p>
            <h1 className="font-cormorant font-bold text-4xl sm:text-5xl md:text-6xl text-ivory mb-6">The Appliance Journal</h1>
            <OrnamentDivider variant="ornate" color="copper" className="max-w-md mx-auto" />
            <p className="font-serif text-ivory/80 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">Expert tips, maintenance guides, and industry insights from our team.</p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-ivory border-b border-forest/10 sticky top-[88px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-80">
              <input type="text" placeholder="Search articles..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full px-4 py-2 pl-10 bg-ivory border-2 border-forest/30 rounded-lg font-serif text-forest placeholder:text-forest/40 focus:outline-none focus:border-copper transition-colors" />
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-forest/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (<button key={category} onClick={() => setActiveCategory(category)} className={`px-4 py-2 rounded-full font-serif text-sm transition-all ${activeCategory === category ? 'bg-forest text-ivory' : 'bg-forest/10 text-forest hover:bg-forest/20'}`}>{category}</button>))}
            </div>
          </div>
        </div>
      </section>

      {activeCategory === 'All' && !searchQuery && featuredPost && (
        <section className="py-16 bg-ivory">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12"><p className="text-burgundy font-serif tracking-widest uppercase mb-4">Featured Article</p><OrnamentDivider variant="simple" color="burgundy" className="max-w-xs mx-auto" /></div>
            <a href={`/blog/${featuredPost.id}`} className="block group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-ivory border-4 border-copper rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden"><img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /><div className="absolute top-4 left-4"><span className="px-4 py-2 bg-burgundy text-ivory font-serif text-sm rounded-full">{featuredPost.category}</span></div></div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-forest/60 font-serif mb-4"><span>{featuredPost.date}</span><span>|</span><span>{featuredPost.readTime}</span></div>
                  <h2 className="font-cormorant font-bold text-3xl lg:text-4xl text-forest mb-4 group-hover:text-copper transition-colors">{featuredPost.title}</h2>
                  <p className="font-serif text-forest/70 text-lg leading-relaxed mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between"><span className="font-serif text-forest/60">By {featuredPost.author}</span><span className="inline-flex items-center text-burgundy font-serif group-hover:text-copper transition-colors">Read Article<svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></span></div>
                </div>
              </div>
            </a>
          </div>
        </section>
      )}

      <section ref={postsRef} className="py-16 bg-forest/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {regularPosts.length > 0 ? (
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transform transition-all duration-700 ${postsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {regularPosts.map((post, index) => (
                <a key={post.id} href={`/blog/${post.id}`} className="group bg-ivory border-2 border-forest/20 rounded-xl overflow-hidden hover:border-copper hover:shadow-xl transition-all" style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="relative aspect-[16/10] overflow-hidden"><img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /><div className="absolute top-4 left-4"><span className="px-3 py-1 bg-forest/90 text-ivory font-serif text-xs rounded-full">{post.category}</span></div></div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3 text-xs text-forest/60 font-serif mb-3"><span>{post.date}</span><span>|</span><span>{post.readTime}</span></div>
                    <h3 className="font-cormorant font-bold text-xl text-forest mb-3 group-hover:text-copper transition-colors line-clamp-2">{post.title}</h3>
                    <p className="font-serif text-forest/70 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-forest/10"><span className="font-serif text-forest/60 text-sm">{post.author}</span><span className="inline-flex items-center text-burgundy font-serif text-sm group-hover:text-copper transition-colors">Read More<svg className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></span></div>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center py-16"><svg className="w-16 h-16 mx-auto text-forest/30 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><h3 className="font-cormorant font-bold text-2xl text-forest mb-2">No Articles Found</h3><p className="font-serif text-forest/60">Try adjusting your search or filter criteria.</p></div>
          )}
          {regularPosts.length > 0 && (<div className="text-center mt-12"><Button variant="outline">Load More Articles</Button></div>)}
        </div>
      </section>

      <section className="py-20 bg-burgundy text-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-cormorant font-bold text-4xl text-ivory mb-4">Subscribe to Our Newsletter</h2>
          <p className="font-serif text-ivory/80 mb-8 max-w-2xl mx-auto">Receive expert appliance tips and exclusive offers delivered to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-6 py-3 bg-ivory/10 border-2 border-ivory/30 rounded-lg font-serif text-ivory placeholder:text-ivory/50 focus:outline-none focus:border-copper" />
            <Button type="submit" className="bg-ivory text-burgundy hover:bg-copper hover:text-ivory border-ivory whitespace-nowrap">Subscribe</Button>
          </form>
          <p className="font-serif text-ivory/60 text-sm mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
