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
  title: 'Raimonvibe Editorial',
  description:
    'Discover custom-made digital artworks with Raimon, your freelance web designer and developer from West Friesland. Specialist in responsive design and master of HTML, CSS, and JavaScript.',
  keywords:
    'freelance web designer, web developer, responsive web design, HTML, CSS, JavaScript, digital art, Raimon, custom websites, Netherlands, West Friesland',
  openGraph: {
    title: 'Home - raimonvibe',
    description: 'Technical Researcher',
    images: [
      {
        url: `https://raimonvibe.eu${STUDIO_IMAGES.ogCover}`,
        width: 1200,
        height: 1680,
        alt: 'Raimonvibe Cover Image',
      },
    ],
    url: 'https://www.raimonvibe.eu/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home - raimonvibe',
    description: 'Technical Researcher',
    images: [`https://raimonvibe.eu${STUDIO_IMAGES.ogCover}`],
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
        <link rel="canonical" href="https://raimonvibe.eu/" />
        <link rel="alternate" hrefLang="en" href="https://raimonvibe.eu" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={`${inter.variable} ${instrumentSerif.variable} antialiased`}>
        <ThemeProvider>
          <ThemeClientSync />
          <SiteShell>{children}</SiteShell>
        </ThemeProvider>
        <Script
          id="heap-analytics"
          strategy="afterInteractive"
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
