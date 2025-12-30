import Link from 'next/link'

/**
 * 404 Not Found Page
 */

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 px-4">
      <div className="max-w-2xl w-full text-center text-white">
        <h1 className="text-9xl font-bold mb-4 text-gold-500">404</h1>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Page Not Found
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 mb-12">
          Sorry, we couldn't find the page you're looking for.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block bg-gold-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-gold-400 transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/services"
            className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors"
          >
            View Services
          </Link>
        </div>

        <div className="mt-12 pt-12 border-t border-gray-700">
          <p className="text-gray-400 mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/blog"
              className="text-gold-500 hover:text-gold-400 transition-colors"
            >
              Blog
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/about"
              className="text-gold-500 hover:text-gold-400 transition-colors"
            >
              About Us
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/contact"
              className="text-gold-500 hover:text-gold-400 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
