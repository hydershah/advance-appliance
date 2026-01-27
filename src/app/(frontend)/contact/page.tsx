import { Metadata } from 'next'
import { fetchSettings } from '@/sanity/fetchers'
import { JsonLd } from '@/components/JsonLd'
import { getCurrentDesignTheme, getDesignComponents } from '@/lib/getDesignComponents'

// Import static design pages for fallback when CMS is unavailable
import { Contact as Design1Contact } from '@/designs/design1/pages'

/**
 * Contact Page - Server Component
 */

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with our appliance repair experts. Schedule service, ask questions, or request a quote.',
}

export default async function ContactPage() {
  // Get current design theme
  const designTheme = getCurrentDesignTheme()

  try {
    // Fetch site settings
    const settings = await fetchSettings()

    const components = getDesignComponents(designTheme)
    const { Header, Footer, ContactForm } = components

  // Generate ContactPage schema
  const contactPageSchema = {
    '@context': 'https://schema.org' as const,
    '@type': 'ContactPage' as const,
    name: 'Contact Us',
    description: metadata.description,
    url: `${process.env.NEXT_PUBLIC_SERVER_URL}/contact`,
  }

  return (
    <>
      <JsonLd data={contactPageSchema} />

      <Header settings={settings} />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with our team of appliance repair experts
            </p>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>

                {/* Phone */}
                {settings.contact?.phone && (
                  <div className="flex items-start mb-8">
                    <div className="bg-gold-500 rounded-full p-4 mr-6">
                      <svg
                        className="w-6 h-6 text-black"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Phone</h3>
                      <a
                        href={`tel:${settings.contact.phone}`}
                        className="text-xl text-gold-500 hover:text-gold-600 transition-colors"
                      >
                        {settings.contact.phone}
                      </a>
                      <p className="text-gray-600 mt-1">
                        Available 24/7 for emergency service
                      </p>
                    </div>
                  </div>
                )}

                {/* Email */}
                {settings.contact?.email && (
                  <div className="flex items-start mb-8">
                    <div className="bg-gold-500 rounded-full p-4 mr-6">
                      <svg
                        className="w-6 h-6 text-black"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Email</h3>
                      <a
                        href={`mailto:${settings.contact.email}`}
                        className="text-xl text-gold-500 hover:text-gold-600 transition-colors break-all"
                      >
                        {settings.contact.email}
                      </a>
                      <p className="text-gray-600 mt-1">
                        We&apos;ll respond within 24 hours
                      </p>
                    </div>
                  </div>
                )}

                {/* Address */}
                {settings.contact?.address && (
                  <div className="flex items-start mb-8">
                    <div className="bg-gold-500 rounded-full p-4 mr-6">
                      <svg
                        className="w-6 h-6 text-black"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Address</h3>
                      <p className="text-gray-700 text-lg">
                        {settings.contact.address}
                        {settings.contact.city && settings.contact.state && (
                          <>
                            <br />
                            {settings.contact.city}, {settings.contact.state}{' '}
                            {settings.contact.zip}
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                )}

                {/* Business Hours */}
                {settings.hours && (
                  <div className="bg-gray-50 rounded-lg p-6 mt-8">
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <svg
                        className="w-6 h-6 text-gold-500 mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Business Hours
                    </h3>
                    <div className="space-y-2">
                      {settings.hours.monday && (
                        <div className="flex justify-between">
                          <span className="font-semibold">Monday</span>
                          <span className="text-gray-600">
                            {settings.hours.monday}
                          </span>
                        </div>
                      )}
                      {settings.hours.tuesday && (
                        <div className="flex justify-between">
                          <span className="font-semibold">Tuesday</span>
                          <span className="text-gray-600">
                            {settings.hours.tuesday}
                          </span>
                        </div>
                      )}
                      {settings.hours.wednesday && (
                        <div className="flex justify-between">
                          <span className="font-semibold">Wednesday</span>
                          <span className="text-gray-600">
                            {settings.hours.wednesday}
                          </span>
                        </div>
                      )}
                      {settings.hours.thursday && (
                        <div className="flex justify-between">
                          <span className="font-semibold">Thursday</span>
                          <span className="text-gray-600">
                            {settings.hours.thursday}
                          </span>
                        </div>
                      )}
                      {settings.hours.friday && (
                        <div className="flex justify-between">
                          <span className="font-semibold">Friday</span>
                          <span className="text-gray-600">
                            {settings.hours.friday}
                          </span>
                        </div>
                      )}
                      {settings.hours.saturday && (
                        <div className="flex justify-between">
                          <span className="font-semibold">Saturday</span>
                          <span className="text-gray-600">
                            {settings.hours.saturday}
                          </span>
                        </div>
                      )}
                      {settings.hours.sunday && (
                        <div className="flex justify-between">
                          <span className="font-semibold">Sunday</span>
                          <span className="text-gray-600">
                            {settings.hours.sunday}
                          </span>
                        </div>
                      )}
                    </div>
                    {settings.hours.emergencyNote && (
                      <p className="mt-4 text-sm text-gray-600 italic border-t pt-4">
                        {settings.hours.emergencyNote}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Contact Form */}
              <div>
                <div className="bg-white rounded-lg shadow-xl p-8">
                  <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>

                  {ContactForm ? (
                    <ContactForm />
                  ) : (
                    <form className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold mb-2"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-semibold mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                          placeholder="(555) 123-4567"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-semibold mb-2"
                        >
                          Service Needed
                        </label>
                        <select
                          id="service"
                          name="service"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                        >
                          <option value="">Select a service...</option>
                          <option value="refrigerator">Refrigerator Repair</option>
                          <option value="washer">Washer Repair</option>
                          <option value="dryer">Dryer Repair</option>
                          <option value="dishwasher">Dishwasher Repair</option>
                          <option value="oven">Oven/Stove Repair</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-semibold mb-2"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                          placeholder="Tell us about your appliance issue..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-gold-500 text-black font-semibold px-8 py-4 rounded-lg hover:bg-gold-400 transition-colors"
                      >
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Links */}
        {settings.social && (
          <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto text-center max-w-3xl">
              <h2 className="text-3xl font-bold mb-6">Connect With Us</h2>
              <div className="flex justify-center gap-6 flex-wrap">
                {settings.social.facebook && (
                  <a
                    href={settings.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow hover:scale-110 transform duration-200"
                    aria-label="Facebook"
                  >
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                )}
                {settings.social.instagram && (
                  <a
                    href={settings.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow hover:scale-110 transform duration-200"
                    aria-label="Instagram"
                  >
                    <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                )}
                {settings.social.yelp && (
                  <a
                    href={settings.social.yelp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow hover:scale-110 transform duration-200"
                    aria-label="Yelp"
                  >
                    <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.271 17.698c-.047.308.017.378.262.517l5.027 2.942c.246.14.443.09.59-.149.192-.31.245-.637.158-.98l-1.244-4.742c-.087-.33-.262-.517-.525-.56-.262-.044-.525.061-.787.314l-3.219 3.219c-.087.088-.175.264-.262.439zm-5.027-2.942c-.245-.14-.443-.09-.59.149-.192.31-.245.637-.158.98l1.244 4.742c.087.33.262.517.525.56.262.044.525-.061.787-.314l3.219-3.219c.087-.088.175-.264.262-.439.047-.308-.017-.378-.262-.517l-5.027-2.942z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer settings={settings} />
    </>
  )
  } catch {
    // CMS unavailable - fall back to static design
    return <Design1Contact />
  }
}
