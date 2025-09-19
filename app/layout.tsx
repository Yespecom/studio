import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Yesp Studio | Yesp Corporation & Yesp Tech – Official Website",
  description:
    "Yesp Studio is the official home of Yesp Corporation and Yesp Tech. Explore our services, innovations, and solutions under one unified brand.",
  generator: "Yesp Studio",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Yesp Studio",
              alternateName: ["Yesp Corporation", "Yesp Tech"],
              url: "https://yespstudio.com",
              logo: "https://yespstudio.com/yesp-logo.png",
              sameAs: [
                "https://www.linkedin.com/company/yespstudio",
                "https://www.facebook.com/yespstudio",
                "https://twitter.com/yespstudio",
              ],
            }),
          }}
        />
      </head>
      <body className={`font-sans ${inter.variable} ${roboto.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
