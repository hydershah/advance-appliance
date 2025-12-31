import React from 'react';
import { Header, Footer, SectionHeading, CTAButton, ArticleSchema, BreadcrumbSchema } from '../components';
import { businessInfo, blogPosts } from '../data/content';

interface BlogPostProps { postSlug?: string; }

const BlogPost: React.FC<BlogPostProps> = ({ postSlug = 'maintaining-your-sub-zero-refrigerator' }) => {
  const post = blogPosts.find((p) => p.slug === postSlug) ?? blogPosts[0];
  if (!post) return null;
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);
  const formatDate = (dateString: string) => new Date(dateString).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const breadcrumbs = [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: post.title, url: `/blog/${post.slug}` }];

  return (
    <>
      <ArticleSchema title={post.title} description={post.excerpt} author={post.author} datePublished={post.date} image={post.image} url={`https://advancedappliancerepair.com/blog/${post.slug}`} />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      <main>
        <section className="relative min-h-[60vh] flex items-end overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="container mx-auto px-6 relative z-10 pb-16">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-[#D4AF37] text-xs uppercase tracking-wider">{post.category}</span>
                <span className="text-white/50">|</span>
                <span className="text-white/70 text-sm">{formatDate(post.date)}</span>
              </div>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-light leading-tight mb-6">{post.title}</h1>
              <div className="flex items-center">
                <span className="text-white/70 text-sm">By {post.author}</span>
                <span className="text-white/50 mx-4">|</span>
                <span className="text-white/70 text-sm">{post.readTime} min read</span>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gray-50 py-4 border-b border-gray-100">
          <div className="container mx-auto px-6">
            <nav className="flex items-center space-x-2 text-sm">
              <a href="/" className="text-gray-500 hover:text-[#D4AF37]">Home</a><span className="text-gray-300">/</span>
              <a href="/blog" className="text-gray-500 hover:text-[#D4AF37]">Blog</a><span className="text-gray-300">/</span>
              <span className="text-[#D4AF37] truncate max-w-xs">{post.title}</span>
            </nav>
          </div>
        </div>

        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <article className="lg:col-span-8">
                <p className="text-xl text-gray-600 leading-relaxed mb-8 border-l-4 border-[#D4AF37] pl-6">{post.excerpt}</p>
                <div className="prose prose-lg max-w-none">
                  {post.content.split('\n\n').map((paragraph: string, i: number) => {
                    if (paragraph.startsWith('## ')) return <h2 key={i} className="font-serif text-2xl text-black mt-12 mb-6">{paragraph.replace('## ', '')}</h2>;
                    return <p key={i} className="text-gray-600 leading-relaxed mb-6">{paragraph}</p>;
                  })}
                </div>
                <div className="mt-12 pt-8 border-t border-gray-100">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-4">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag: string, i: number) => <a key={i} href={`/blog?tag=${tag.toLowerCase().replace(/\s+/g, '-')}`} className="px-3 py-1 border border-gray-200 text-gray-600 text-sm hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors">{tag}</a>)}
                  </div>
                </div>
                <div className="mt-12 p-8 bg-gray-50 border border-gray-100">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-[#D4AF37] flex items-center justify-center text-white font-serif text-2xl flex-shrink-0">{post.author.charAt(0)}</div>
                    <div>
                      <h4 className="font-serif text-lg text-black mb-2">Written by {post.author}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{post.author} is a certified appliance repair technician with over 15 years of experience.</p>
                    </div>
                  </div>
                </div>
              </article>

              <aside className="lg:col-span-4">
                <div className="sticky top-32 space-y-8">
                  <div className="bg-black p-8 text-center">
                    <h4 className="font-serif text-xl text-white mb-4">Need Repair Help?</h4>
                    <p className="text-white/70 text-sm mb-6">Our expert technicians are ready to assist.</p>
                    <a href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`} className="block w-full px-6 py-4 bg-[#D4AF37] text-black text-sm uppercase tracking-wider hover:bg-[#C4A030] transition-colors mb-4">{businessInfo.phone}</a>
                    <a href="/contact" className="block w-full px-6 py-4 border border-white text-white text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Schedule Service</a>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-black mb-6">Related Articles</h4>
                    <div className="space-y-6">
                      {relatedPosts.map((p) => (
                        <a key={p.id} href={`/blog/${p.slug}`} className="group block">
                          <div className="aspect-[4/3] overflow-hidden mb-4"><img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" /></div>
                          <span className="text-[#D4AF37] text-xs uppercase tracking-wider">{p.category}</span>
                          <h4 className="font-serif text-lg text-black mt-2 group-hover:text-[#D4AF37] transition-colors line-clamp-2">{p.title}</h4>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <SectionHeading subtitle="Keep Reading" title="More From Our Blog" align="center" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {relatedPosts.map((p) => (
                <a key={p.id} href={`/blog/${p.slug}`} className="group block bg-white border border-gray-100 hover:border-[#D4AF37] transition-colors">
                  <div className="aspect-[4/3] overflow-hidden"><img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" /></div>
                  <div className="p-6">
                    <span className="text-[#D4AF37] text-xs uppercase tracking-wider">{p.category}</span>
                    <h3 className="font-serif text-lg text-black mt-2 mb-3 group-hover:text-[#D4AF37] transition-colors">{p.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{p.excerpt}</p>
                  </div>
                </a>
              ))}
            </div>
            <div className="text-center mt-12"><CTAButton href="/blog" variant="outline" size="lg" icon="arrow">View All Articles</CTAButton></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;
