'use client';

import React, { useState } from 'react';
import { Header, Footer, Hero, SectionHeading, CTAButton, LocalBusinessSchema, BreadcrumbSchema } from '../components';
import { businessInfo, blogPosts, images } from '../data/content';
import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false }) => {
  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  if (featured) {
    return (
      <a href={`/blog/${post.slug}`} className="group block rounded-3xl overflow-hidden border border-modern-navy-900/10 bg-white shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="aspect-[4/3] overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-[0.3em] text-modern-navy-900 font-[var(--font-poppins)]">{post.category}</span>
            <h2 className="mt-4 font-[var(--font-bebas)] text-3xl tracking-[0.08em] text-modern-navy-900 group-hover:text-modern-navy-900 transition-colors">
              {post.title}
            </h2>
            <p className="mt-4 text-modern-charcoal font-[var(--font-poppins)]">{post.excerpt}</p>
            <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.3em] font-[var(--font-poppins)] text-modern-navy-700">
              <span>{formatDate(post.date)}</span>
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </div>
      </a>
    );
  }

  return (
    <a href={`/blog/${post.slug}`} className="group block rounded-2xl overflow-hidden border border-modern-navy-900/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="p-6">
        <span className="text-xs uppercase tracking-[0.3em] text-modern-navy-900 font-[var(--font-poppins)]">{post.category}</span>
        <h3 className="mt-3 font-[var(--font-bebas)] text-2xl tracking-[0.08em] text-modern-navy-900 group-hover:text-modern-navy-900 transition-colors">
          {post.title}
        </h3>
        <p className="mt-3 text-sm text-modern-charcoal font-[var(--font-poppins)] line-clamp-2">{post.excerpt}</p>
        <span className="mt-4 block text-xs uppercase tracking-[0.3em] text-modern-navy-700 font-[var(--font-poppins)]">{post.readTime} min read</span>
      </div>
    </a>
  );
};

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
  ];
  const categories = ['All', ...new Set(blogPosts.map((post) => post.category))];
  const filteredPosts =
    selectedCategory === 'All' ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      <main className="bg-modern-cream-50 text-modern-navy-900">
        <Hero
          title="Expert Insights"
          subtitle="Our Blog"
          description="Tips, guides, and industry insights from our team of luxury appliance experts."
          image={images.kitchen}
          showCTA={false}
          overlay="gradient"
          height="small"
          align="center"
        />

        <section className="bg-modern-cream-100 py-4">
          <div className="container mx-auto px-6">
            <nav className="flex items-center space-x-2 text-xs uppercase tracking-[0.3em] font-[var(--font-poppins)]">
              <a href="/" className="text-modern-navy-700 hover:text-modern-navy-900">Home</a>
              <span className="text-modern-navy-400">/</span>
              <span className="text-modern-navy-900">Blog</span>
            </nav>
          </div>
        </section>

        <section className="py-10 bg-white border-b border-modern-navy-900/10">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.3em] font-[var(--font-poppins)] transition-all ${
                    selectedCategory === category
                      ? 'bg-modern-navy-900 text-white'
                      : 'text-modern-navy-700 border border-modern-navy-900/10 hover:border-modern-navy-900 hover:text-modern-navy-900'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {filteredPosts[0] && (
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="mb-6 text-xs uppercase tracking-[0.4em] text-modern-navy-700 font-[var(--font-poppins)]">
                Featured Article
              </div>
              <BlogCard post={filteredPosts[0]} featured={true} />
            </div>
          </section>
        )}

        <section className="py-24 bg-modern-cream-100">
          <div className="container mx-auto px-6">
            <SectionHeading subtitle="Latest Articles" title="More From Our Blog" align="center" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {filteredPosts.slice(1).map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <SectionHeading
                subtitle="Stay Informed"
                title="Subscribe to Our Newsletter"
                description="Get expert tips and exclusive offers delivered to your inbox."
                align="center"
              />
              <form className="mt-8 flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 rounded-full px-4 py-3 border border-modern-navy-900/10 focus:border-modern-navy-900 focus:ring-1 focus:ring-modern-navy-900 outline-none transition-colors font-[var(--font-poppins)]"
                />
                <CTAButton type="submit" variant="primary" size="md">
                  Subscribe
                </CTAButton>
              </form>
            </div>
          </div>
        </section>

        <section className="py-24 bg-modern-navy-900 text-modern-cream-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs uppercase tracking-[0.4em] text-modern-gold-200 font-[var(--font-poppins)]">Need Service?</span>
              <h2 className="mt-4 font-[var(--font-bebas)] text-4xl md:text-5xl tracking-[0.08em]">Expert Help Just a Call Away</h2>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`} variant="primary" size="lg" icon="phone">
                  Call {businessInfo.phone}
                </CTAButton>
                <CTAButton href="/contact" variant="outline" size="lg" icon="arrow">
                  Schedule Service
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

export default Blog;
