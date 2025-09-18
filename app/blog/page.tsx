import type { Metadata } from "next"
import BlogClientPage from "./BlogClientPage"

export const metadata: Metadata = {
  title: "Yesp Studio Blog - Business Growth SaaS & AI Automation Insights",
  description:
    "Discover insights on business growth, SaaS automation, and AI innovation from Yesp Studio. Learn about Feedlooply, founder Srinithin Somasundaram, and cutting-edge technology.",
  keywords:
    "Yesp Studio, Yesp Corporation, Yesp Tech, Srinithin Somasundaram, Feedlooply, business growth SaaS, AI automation, workflow automation, startup tools",
  authors: [{ name: "Srinithin Somasundaram" }, { name: "Yesp Studio Team" }],
  creator: "Yesp Corporation",
  publisher: "Yesp Studio",
  openGraph: {
    title: "Yesp Studio Blog - Business Growth & AI Innovation",
    description:
      "Expert insights on SaaS automation, AI workflows, and business growth from Yesp Studio and founder Srinithin Somasundaram.",
    url: "https://yespstudio.com/blog",
    siteName: "Yesp Studio",
    type: "website",
    images: [
      {
        url: "/images/yesp-blog-og.jpg",
        width: 1200,
        height: 628,
        alt: "Yesp Studio Blog - Business Growth & AI Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yesp Studio Blog - Business Growth & AI Innovation",
    description: "Expert insights on SaaS automation and AI workflows from Yesp Studio.",
    images: ["/images/yesp-blog-twitter.jpg"],
  },
  alternates: {
    canonical: "https://yespstudio.com/blog",
  },
}

export default function BlogPage() {
  return <BlogClientPage />
}
