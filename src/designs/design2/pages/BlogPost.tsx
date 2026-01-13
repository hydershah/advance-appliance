import React from 'react';
import { Header, Footer, SectionHeading, CTAButton, ArticleSchema, BreadcrumbSchema } from '../components';
import { businessInfo, blogPosts } from '../data/content';

interface BlogPostProps {
  postSlug?: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ postSlug = 'maintaining-your-sub-zero-refrigerator' }) => {
  const post = blogPosts.find((p) => p.slug === postSlug) ?? blogPosts[0];
  if (!post) return null;
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);
  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` },
  ];

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.excerpt}
        author={post.author}
        datePublished={post.date}
        image={post.image}
        url={`https://advancedappliancerepair.com/blog/${post.slug}`}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      <main className="bg-modern-cream-50 text-modern-navy-900">
        <section className="relative min-h-[60vh] flex items-end overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-modern-navy-900 via-modern-navy-900/60 to-transparent" />
          <div className="container mx-auto px-6 relative z-10 pb-16">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-4 mb-4 text-xs uppercase tracking-[0.3em] font-[var(--font-poppins)]">
                <span className="text-modern-gold-200">{post.category}</span>
                <span className="text-modern-cream-100/60">|</span>
                <span className="text-modern-cream-100/70">{formatDate(post.date)}</span>
              </div>
              <h1 className="font-[var(--font-bebas)] text-4xl md:text-5xl lg:text-6xl tracking-[0.08em] text-modern-cream-50">
                {post.title}
              </h1>
              <div className="mt-4 flex items-center text-modern-cream-100/70 text-xs uppercase tracking-[0.3em] font-[var(--font-poppins)]">
                <span>By {post.author}</span>
                <span className="mx-4">|</span>
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-modern-cream-100 py-4">
          <div className="container mx-auto px-6">
            <nav className="flex items-center space-x-2 text-xs uppercase tracking-[0.3em] font-[var(--font-poppins)]">
              <a href="/" className="text-modern-navy-700 hover:text-modern-navy-900">Home</a>
              <span className="text-modern-navy-400">/</span>
              <a href="/blog" className="text-modern-navy-700 hover:text-modern-navy-900">Blog</a>
              <span className="text-modern-navy-400">/</span>
              <span className="text-modern-navy-900 truncate max-w-xs">{post.title}</span>
            </nav>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <article className="lg:col-span-8">
                <p className="text-lg text-modern-charcoal leading-relaxed mb-8 border-l-4 border-modern-navy-900 pl-6 font-[var(--font-poppins)]">
                  {post.excerpt}
                </p>
                <div className="max-w-none">
                  {post.content.split('\n\n').map((paragraph: string, i: number) => {
                    if (paragraph.startsWith('## ')) {
                      return (
                        <h2 key={i} className="font-[var(--font-bebas)] text-3xl tracking-[0.08em] text-modern-navy-900 mt-12 mb-6">
                          {paragraph.replace('## ', '')}
                        </h2>
                      );
                    }
                    return (
                      <p key={i} className="text-modern-charcoal leading-relaxed mb-6 font-[var(--font-poppins)]">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
                <div className="mt-12 pt-8 border-t border-modern-navy-900/10">
                  <h4 className="text-xs uppercase tracking-[0.3em] text-modern-navy-700 font-[var(--font-poppins)] mb-4">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag: string) => (
                      <a
                        key={tag}
                        href={`/blog?tag=${tag.toLowerCase().replace(/\s+/g, '-')}`}
                        className="px-3 py-1 rounded-full border border-modern-navy-900/10 text-modern-navy-700 text-xs uppercase tracking-[0.3em] font-[var(--font-poppins)] hover:border-modern-navy-900 hover:text-modern-navy-900 transition-colors"
                      >
                        {tag}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="mt-12 p-8 bg-white border border-modern-navy-900/10 rounded-2xl">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-modern-navy-900 flex items-center justify-center text-modern-cream-50 font-[var(--font-bebas)] text-3xl flex-shrink-0 rounded-full">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-[var(--font-bebas)] text-2xl tracking-[0.08em] text-modern-navy-900 mb-2">
                        Written by {post.author}
                      </h4>
                      <p className="text-modern-charcoal text-sm leading-relaxed font-[var(--font-poppins)]">
                        {post.author} is a certified appliance repair technician with over 15 years of experience.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              <aside className="lg:col-span-4">
                <div className="sticky top-32 space-y-8">
                  <div className="bg-modern-navy-900 p-8 text-center rounded-2xl text-modern-cream-50">
                    <h4 className="font-[var(--font-bebas)] text-2xl tracking-[0.08em]">Need Repair Help?</h4>
                    <p className="mt-2 text-modern-cream-100/70 text-sm font-[var(--font-poppins)]">Our expert technicians are ready to assist.</p>
                    <a
                      href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`}
                      className="block w-full px-6 py-4 rounded-full bg-modern-navy-900 text-white text-xs uppercase tracking-[0.3em] font-[var(--font-poppins)] mt-6"
                    >
                      {businessInfo.phone}
                    </a>
                    <a
                      href="/contact"
                      className="block w-full px-6 py-4 rounded-full border border-white text-white text-xs uppercase tracking-[0.3em] font-[var(--font-poppins)] mt-4"
                    >
                      Schedule Service
                    </a>
                  </div>
                  <div>
                    <h4 className="font-[var(--font-bebas)] text-2xl tracking-[0.08em] text-modern-navy-900 mb-6">Related Articles</h4>
                    <div className="space-y-6">
                      {relatedPosts.map((p) => (
                        <a key={p.id} href={`/blog/${p.slug}`} className="group block">
                          <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-4">
                            <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                          </div>
                          <span className="text-xs uppercase tracking-[0.3em] text-modern-navy-900 font-[var(--font-poppins)]">{p.category}</span>
                          <h4 className="mt-2 font-[var(--font-bebas)] text-xl tracking-[0.08em] text-modern-navy-900 group-hover:text-modern-navy-900 transition-colors line-clamp-2">
                            {p.title}
                          </h4>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="py-24 bg-modern-cream-100">
          <div className="container mx-auto px-6">
            <SectionHeading subtitle="Keep Reading" title="More From Our Blog" align="center" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {relatedPosts.map((p) => (
                <a key={p.id} href={`/blog/${p.slug}`} className="group block rounded-2xl overflow-hidden border border-modern-navy-900/10 bg-white">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs uppercase tracking-[0.3em] text-modern-navy-900 font-[var(--font-poppins)]">{p.category}</span>
                    <h3 className="mt-2 font-[var(--font-bebas)] text-xl tracking-[0.08em] text-modern-navy-900 group-hover:text-modern-navy-900 transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm text-modern-charcoal font-[var(--font-poppins)] line-clamp-2">{p.excerpt}</p>
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
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;
