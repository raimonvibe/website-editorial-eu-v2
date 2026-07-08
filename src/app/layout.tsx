import type { Metadata, Viewport } from 'next'
import { STUDIO_IMAGES } from '@/data/studio-images'
import { Inter, Instrument_Serif } from 'next/font/google'
import Script from 'next/script'
import '../styles/globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import PrayerChatWidget from '../components/PrayerChatWidget'
import SiteShell from '@/components/studio/SiteShell'
import ThemeClientSync from '@/components/ThemeClientSync'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.raimonvibe.eu'),
  title: {
    default: 'Raimonvibe — Technical Research Studio',
    template: '%s',
  },
  description:
    'Discover custom-made digital artworks with Raimon, your freelance web designer and developer from West Friesland. Specialist in responsive design and master of HTML, CSS, and JavaScript.',
  keywords:
    'freelance web designer, web developer, responsive web design, HTML, CSS, JavaScript, digital art, Raimon, custom websites, Netherlands, West Friesland',
  alternates: {
    canonical: './',
  },
  openGraph: {
    siteName: 'raimonvibe',
    title: 'raimonvibe — Technical Research Studio',
    description: 'Technical research, thoughtful builds, and digital experiences from West Friesland.',
    images: [
      {
        url: STUDIO_IMAGES.ogCover,
        width: 1200,
        height: 1680,
        alt: 'Raimonvibe Cover Image',
      },
    ],
    url: './',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'raimonvibe — Technical Research Studio',
    description: 'Technical research, thoughtful builds, and digital experiences from West Friesland.',
    images: [STUDIO_IMAGES.ogCover],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/brand/favicon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: '/images/brand/favicon-512.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F2F0E9' },
    { media: '(prefers-color-scheme: dark)', color: '#111110' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={`${inter.variable} ${instrumentSerif.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebSite',
                  '@id': 'https://www.raimonvibe.eu/#website',
                  url: 'https://www.raimonvibe.eu/',
                  name: 'raimonvibe',
                  description: 'Technical research, thoughtful builds, and digital experiences from West Friesland.',
                },
                {
                  '@type': 'Person',
                  '@id': 'https://www.raimonvibe.eu/#person',
                  name: 'Raimon',
                  url: 'https://www.raimonvibe.eu/about/',
                  jobTitle: 'Freelance Web Designer & Developer',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Hoorn',
                    addressCountry: 'NL',
                  },
                  sameAs: [
                    'https://github.com/raimonvibe/',
                    'https://www.linkedin.com/in/raimonvibe/',
                    'https://x.com/raimonvibe/',
                    'https://www.youtube.com/channel/UCDGDNuYb2b2Ets9CYCNVbuA/videos/',
                    'https://medium.com/@raimonvibe/',
                    'https://www.instagram.com/raimonvibe/',
                  ],
                },
              ],
            }),
          }}
        />
        <ThemeProvider>
          <ThemeClientSync />
          <SiteShell>{children}</SiteShell>
        </ThemeProvider>
        <Script
          id="heap-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (window.heap = window.heap || []),
              (heap.load = function (e, t) {
                  (window.heap.appid = e), (window.heap.config = t = t || {});
                  var r = document.createElement("script");
                  (r.type = "text/javascript"),
                  (r.async = !0),
                  (r.src = "https://cdn.heapanalytics.com/js/heap-" + e + ".js");
                  var a = document.getElementsByTagName("script")[0];
                  a.parentNode.insertBefore(r, a);
                  for (
                      var n = function (e) {
                          return function () {
                              heap.push(
                                  [e].concat(Array.prototype.slice.call(arguments, 0))
                              );
                          };
                      },
                      p = [
                          "addEventProperties",
                          "addUserProperties",
                          "clearEventProperties",
                          "identify",
                          "resetIdentity",
                          "removeEventProperty",
                          "setEventProperties",
                          "track",
                          "unsetEventProperty",
                      ],
                      o = 0;
                      o < p.length;
                      o++
                  )
                      heap[p[o]] = n(p[o]);
              });
              heap.load("2918829767");
            `,
          }}
        />
        <PrayerChatWidget />
      </body>
    </html>
  )
}
