import Link from 'next/link'
import type { Metadata } from 'next'
import { Header, Footer } from '@/designs/design1/components'
import { businessInfo, services, serviceAreas } from '@/designs/design1/data/content'

/**
 * 404 Not Found Page — on-brand, helpful, and conversion-focused.
 *
 * The previous "dead end" 404 lost search traffic from old URLs. This
 * version uses the same Header/Footer chrome as the rest of the site,
 * keeps the gold (#D4AF37) accent, and gives the visitor three immediate
 * paths forward: call us, schedule online, or pick a service/area page.
 */

export const metadata: Metadata = {
  title: 'Page Not Found',
  description:
    'The page you were looking for could not be found. Use the links below to find appliance repair services or call us at (732) 416-7430.',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  const phone = businessInfo.phone
  const phoneRaw = phone.replace(/[^0-9]/g, '')

  // Surface the four most-trafficked services and a curated list of core
  // service areas so anyone landing here on a typo or stale link can find
  // the right page in one click.
  const featuredServices = services.slice(0, 4)
  const featuredAreaSlugs = new Set([
    'appliance-repair-marlboro-nj',
    'appliance-repair-in-holmdel-nj',
    'appliance-repair-colts-neck-nj',
    'appliance-repair-in-red-bank-nj',
    'appliance-repair-in-freehold-nj',
    'appliance-repair-in-middletown-nj',
    'appliance-repair-in-old-bridge-nj',
    'appliance-repair-in-edison-nj',
  ])
  const featuredAreas = serviceAreas.filter((a) => featuredAreaSlugs.has(a.slug))

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-black py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-[#D4AF37] blur-3xl" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-light mb-4 block">
                Error 404
              </span>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-6">
                Looks like this page took a service call.
              </h1>
              <div className="w-16 h-px bg-[#D4AF37] mx-auto my-8" />
              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
                The page you were looking for could not be found — but our
                technicians are still on the job. Call now, schedule online,
                or pick from the popular pages below.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${phoneRaw}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#D4AF37] text-black text-sm uppercase tracking-wider hover:bg-[#C4A030] transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call {phone}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
                >
                  Book an Appointment
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Popular destinations */}
        <section className="py-20 bg-white border-b border-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-light mb-3 block">
                  Try one of these
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-black font-light">
                  Popular Pages
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Services */}
                <div>
                  <h3 className="font-serif text-xl text-black mb-6 pb-2 border-b border-gray-100">
                    Services
                  </h3>
                  <ul className="space-y-3">
                    {featuredServices.map((s) => (
                      <li key={s.id}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="group flex items-center justify-between text-gray-700 hover:text-[#D4AF37] transition-colors"
                        >
                          <span>{s.name}</span>
                          <svg
                            className="w-4 h-4 text-[#D4AF37] opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href="/services"
                        className="text-[#D4AF37] text-sm uppercase tracking-wider hover:underline"
                      >
                        View all services →
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Areas */}
                <div>
                  <h3 className="font-serif text-xl text-black mb-6 pb-2 border-b border-gray-100">
                    Service Areas
                  </h3>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
                    {featuredAreas.map((a) => (
                      <li key={a.id}>
                        <Link
                          href={`/areas/${a.slug}`}
                          className="text-gray-700 hover:text-[#D4AF37] transition-colors"
                        >
                          {a.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/our-service-area"
                    className="text-[#D4AF37] text-sm uppercase tracking-wider hover:underline mt-6 inline-block"
                  >
                    View all areas →
                  </Link>
                </div>
              </div>

              {/* Other links */}
              <div className="mt-16 pt-10 border-t border-gray-100">
                <p className="text-gray-500 text-sm text-center mb-6 uppercase tracking-[0.2em]">
                  Or visit
                </p>
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm">
                  <Link href="/" className="text-gray-700 hover:text-[#D4AF37] transition-colors">
                    Home
                  </Link>
                  <span className="text-gray-300">·</span>
                  <Link href="/about" className="text-gray-700 hover:text-[#D4AF37] transition-colors">
                    About
                  </Link>
                  <span className="text-gray-300">·</span>
                  <Link href="/our-brands" className="text-gray-700 hover:text-[#D4AF37] transition-colors">
                    Brands We Service
                  </Link>
                  <span className="text-gray-300">·</span>
                  <Link href="/our-reviews" className="text-gray-700 hover:text-[#D4AF37] transition-colors">
                    Reviews
                  </Link>
                  <span className="text-gray-300">·</span>
                  <Link href="/blog" className="text-gray-700 hover:text-[#D4AF37] transition-colors">
                    Blog
                  </Link>
                  <span className="text-gray-300">·</span>
                  <Link href="/useful-tips" className="text-gray-700 hover:text-[#D4AF37] transition-colors">
                    Useful Tips
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
