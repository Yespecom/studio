"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, User, Share2, Copy, Twitter, Facebook, Linkedin } from "lucide-react"
import { notFound } from "next/navigation"
import { blogPosts, getRelatedPosts } from "@/lib/blog-data"
import { useState } from "react"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPageClient({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [copySuccess, setCopySuccess] = useState(false)

  if (!post) {
    notFound()
  }

  // ✅ Now correctly using the imported function
  const relatedPosts = getRelatedPosts(params.slug, post.category)

  const handleShare = async (platform?: string) => {
    const url = `${window.location.origin}/blog/${params.slug}`
    const title = post.title

    if (platform === "twitter") {
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
        "_blank",
      )
    } else if (platform === "facebook") {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank")
    } else if (platform === "linkedin") {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank")
    } else {
      try {
        await navigator.clipboard.writeText(url)
        setCopySuccess(true)
        setTimeout(() => setCopySuccess(false), 2000)
      } catch (err) {
        console.error("Failed to copy: ", err)
      }
    }
    setShowShareMenu(false)
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: `https://yespstudio.com/images/blog/${params.slug}-og.jpg`,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Yesp Corporation",
      logo: {
        "@type": "ImageObject",
        url: "https://yespstudio.com/images/yesp-logo.png",
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://yespstudio.com/blog/${params.slug}`,
    },
    keywords: post.keywords,
    articleSection: post.category,
    wordCount: post.content.split(" ").length,
    timeRequired: post.readTime,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <div className="min-h-screen bg-white">
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-4 text-gray-900 font-medium text-lg sm:text-xl">
              <Link href="/">Yesp Studio</Link>
              <span className="text-gray-400">/</span>
              <Link href="/blog" className="text-blue-600 hover:text-blue-700">
                Blog
              </Link>
            </div>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 flex items-center gap-1 sm:gap-2">
              <ArrowLeft className="w-4 h-4" /> <span className="hidden sm:inline">Back to Blog</span>
            </Link>
          </div>
        </header>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-12 sm:pb-20">
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 font-medium mb-4">
            {post.category}
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 sm:mb-8 leading-snug">
            {post.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 border-b border-gray-200 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <p className="text-gray-900 font-medium">{post.author}</p>
                <p className="text-gray-500 text-sm">Yesp Studio</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500 relative">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="flex items-center gap-1 text-gray-600 hover:text-gray-900"
              >
                <Share2 className="w-4 h-4" /> Share
              </Button>
              {showShareMenu && (
                <div className="absolute top-full right-0 bg-white border border-gray-200 rounded-lg shadow-lg py-2 w-48 z-10">
                  <button
                    onClick={() => handleShare("twitter")}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 w-full text-left"
                  >
                    <Twitter className="w-4 h-4" /> Twitter
                  </button>
                  <button
                    onClick={() => handleShare("facebook")}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 w-full text-left"
                  >
                    <Facebook className="w-4 h-4" /> Facebook
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 w-full text-left"
                  >
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </button>
                  <button
                    onClick={() => handleShare()}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 w-full text-left"
                  >
                    <Copy className="w-4 h-4" /> {copySuccess ? "Copied!" : "Copy Link"}
                  </button>
                </div>
              )}
            </div>
          </div>

          {post.image && (
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full rounded-lg shadow-lg mb-8" />
          )}

          <div className="prose prose-lg max-w-none text-gray-700">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </article>

        <section className="bg-gray-50 py-16 border-t border-gray-200 text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">Ready to Transform Your Business?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join innovative companies using Yesp Studio to automate workflows, optimize processes, and drive exponential
            growth with AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           
            <Button asChild variant="outline" size="lg" className="border-gray-300 hover:bg-gray-50 bg-white h-12">
              <Link href="https://feedlooply.com/">Try Feedlooply Beta</Link>
            </Button>
          </div>
        </section>

        {relatedPosts.length > 0 && (
          <section className="bg-white py-16 border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-12">Related Articles</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
                {relatedPosts.map((r) => (
                  <article key={r.slug} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs font-medium mb-2">
                      {r.category}
                    </Badge>
                    <h4 className="text-lg font-medium mb-2">
                      <Link href={`/blog/${r.slug}`} className="hover:text-blue-600">
                        {r.title}
                      </Link>
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">{r.excerpt}</p>
                    <div className="flex justify-between items-center text-gray-500 text-sm">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {r.readTime}
                      </span>
                      <Link href={`/blog/${r.slug}`} className="text-blue-600 hover:text-blue-700 font-medium">
                        Read article
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  )
}
