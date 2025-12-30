import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BUSINESS_INFO, IMAGES } from '../utils/constants';

interface BlogPostProps { postId?: string; }

export const BlogPost: React.FC<BlogPostProps> = ({ postId = '1' }) => {
  const post = { id: postId, title: 'When to Repair vs. Replace Your Refrigerator', category: 'Refrigerator', author: 'Robert Thompson', authorRole: 'Founder & CEO', date: 'December 28, 2024', readTime: '5 min read', image: IMAGES.kitchen };
  const content = `<p>Making the decision between repairing or replacing your refrigerator can be challenging. With repair costs potentially running into hundreds of dollars and new refrigerators costing significantly more, it is important to weigh your options carefully.</p><h2>The 50% Rule</h2><p>A general guideline many experts recommend is the 50% rule: if the repair cost exceeds 50% of the price of a new refrigerator, it is usually more economical to replace it.</p><h2>Age Matters</h2><p>The average refrigerator lifespan is 10-15 years. If your refrigerator is approaching or past this age, replacement might be the smarter long-term investment.</p><h2>Common Repairs Worth Doing</h2><ul><li><strong>Door seal replacement:</strong> Usually costs $50-150</li><li><strong>Thermostat replacement:</strong> Typically $100-200</li><li><strong>Fan motor replacement:</strong> $100-250</li></ul><h2>The Bottom Line</h2><p>Still unsure? Give us a call at ${BUSINESS_INFO.phone} for a free consultation. Our experienced technicians can help you make the right decision for your situation.</p>`;
  const relatedPosts = [{ id: '2', title: '10 Signs Your Washer Needs Professional Repair', category: 'Washer', image: IMAGES.appliance1 }, { id: '3', title: 'Dryer Maintenance Tips to Extend Its Lifespan', category: 'Dryer', image: IMAGES.appliance2 }];

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="blog" />
      <section className="bg-[#0A1628] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"><div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} /></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#3B82F6]/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-6"><a href="/" className="hover:text-white transition-colors">Home</a><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg><a href="/blog" className="hover:text-white transition-colors">Blog</a><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg><span className="text-[#3B82F6]">{post.category}</span></nav>
          <div className="flex items-center space-x-4 mb-6"><span className="px-4 py-2 bg-[#3B82F6]/20 text-[#3B82F6] text-sm font-bold rounded-full">{post.category}</span><span className="text-gray-400">{post.readTime}</span></div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">{post.title}</h1>
          <div className="flex items-center space-x-4"><div className="w-12 h-12 bg-[#3B82F6] rounded-full flex items-center justify-center text-white font-bold text-lg">{post.author.charAt(0)}</div><div><p className="text-white font-medium">{post.author}</p><p className="text-gray-400 text-sm">{post.authorRole} | {post.date}</p></div></div>
        </div>
      </section>

      <section className="container mx-auto px-6 -mt-8 relative z-10 max-w-4xl"><img src={post.image} alt={post.title} className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl shadow-2xl" /></section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <article className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-[#0A1628] prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6 prose-ul:my-6 prose-li:text-gray-600 prose-strong:text-[#0A1628]" dangerouslySetInnerHTML={{ __html: content }} />

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between"><p className="font-bold text-[#0A1628]">Share this article:</p>
              <div className="flex space-x-3">{['facebook', 'twitter', 'linkedin'].map((s) => (<a key={s} href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#3B82F6] hover:text-white transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">{s === 'facebook' && <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>}{s === 'twitter' && <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>}{s === 'linkedin' && <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>}</svg></a>))}</div>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 rounded-2xl p-8">
            <div className="flex items-start space-x-6"><div className="w-20 h-20 bg-[#0A1628] rounded-2xl flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">{post.author.charAt(0)}</div><div><h3 className="text-xl font-bold text-[#0A1628] mb-1">{post.author}</h3><p className="text-[#3B82F6] font-medium mb-3">{post.authorRole}</p><p className="text-gray-600">With over 35 years of experience in appliance repair, Robert founded Advanced Appliance Repair Service with a mission to provide honest, reliable service to families across Central New Jersey.</p></div></div>
          </div>

          <div className="mt-12 bg-[#0A1628] rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Need Your Refrigerator Repaired?</h3>
            <p className="text-gray-400 mb-6">Our expert technicians are ready to help. Call now for same-day service!</p>
            <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="inline-flex items-center space-x-2 px-8 py-4 bg-[#3B82F6] text-white rounded-xl font-bold hover:bg-[#2563EB] transition-colors"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg><span>{BUSINESS_INFO.phone}</span></a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0A1628] mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">{relatedPosts.map((r) => (<a key={r.id} href={`/blog/${r.id}`} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"><div className="relative h-48 overflow-hidden"><img src={r.image} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /><div className="absolute top-4 left-4 px-3 py-1 bg-white/90 text-[#0A1628] text-sm font-bold rounded-full">{r.category}</div></div><div className="p-6"><h3 className="text-lg font-bold text-[#0A1628] group-hover:text-[#3B82F6] transition-colors line-clamp-2">{r.title}</h3></div></a>))}</div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
