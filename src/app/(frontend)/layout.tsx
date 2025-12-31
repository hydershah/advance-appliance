import type { Metadata } from 'next'
import {
  Inter,
  Playfair_Display,
  Bebas_Neue,
  Poppins,
  Cormorant_Garamond,
  Source_Serif_4,
} from 'next/font/google'
import '../globals.css'

// Design 1: Elegant Minimalist
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// Design 2: Bold Modern
const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

// Design 3: Classic Premium
const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
})

const sourceSerif = Source_Serif_4({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-source',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Advanced Appliance Repair Service | Expert Repair in Monmouth & Middlesex Counties, NJ',
    template: '%s | Advanced Appliance Repair Service',
  },
  description:
    'Professional luxury appliance repair services in Monmouth & Middlesex Counties, NJ. Expert technicians, same-day service available for Sub-Zero, Wolf, Viking & all major brands. Call (732) 416-7430',
  keywords: [
    'appliance repair NJ',
    'luxury appliance service',
    'refrigerator repair Monmouth County',
    'washer repair Middlesex County',
    'dryer repair New Jersey',
    'dishwasher repair',
    'oven repair',
    'Sub-Zero repair NJ',
    'Wolf repair',
    'Viking appliance repair',
    'same day appliance service',
    'emergency appliance repair',
    'Morganville appliance repair',
    'Marlboro NJ appliance service',
  ],
  authors: [{ name: 'Advanced Appliance Repair Service' }],
  creator: 'Advanced Appliance Repair Service',
  publisher: 'Advanced Appliance Repair Service',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
  ),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Advanced Appliance Repair Service',
    title: 'Advanced Appliance Repair Service | Expert Repair in NJ',
    description:
      'Professional luxury appliance repair in Monmouth & Middlesex Counties. Expert technicians, same-day service for all major brands. Call (732) 416-7430',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Advanced Appliance Repair Service - Professional Technicians',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advanced Appliance Repair Service | Expert Repair in NJ',
    description:
      'Professional luxury appliance repair. Expert technicians, same-day service for all major brands in Monmouth & Middlesex Counties.',
    images: ['/og-image.jpg'],
    creator: '@advanceappliance',
    site: '@advanceappliance',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
    },
  },
  category: 'business',
  applicationName: 'Advanced Appliance Repair Service',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black',
    title: 'Advanced Appliance Repair',
  },
  other: {
    'apple-mobile-web-app-title': 'Advanced Appliance',
  },
}

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${bebas.variable} ${poppins.variable} ${cormorant.variable} ${sourceSerif.variable}`}
    >
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://images.pexels.com" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <link rel="manifest" href="/manifest.json" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        <main id="main-content">{children}</main>
      </body>
    </html>
  )
}
