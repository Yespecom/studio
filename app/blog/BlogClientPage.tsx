"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Clock, Search, User } from "lucide-react"
import { getBlogPostsByCategory, getFeaturedPosts, getRecentPosts } from "@/lib/blog-data"
import { useState, useMemo } from "react"

export default function BlogClientPage() {
  const featuredPosts = getFeaturedPosts()
  const recentPosts = getRecentPosts(12)
  const allPosts = getBlogPostsByCategory("All")

  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return allPosts

    return allPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }, [allPosts, searchQuery])

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Yesp Studio Blog",
    description: "Insights on business growth, SaaS automation, and AI innovation from Yesp Studio",
    url: "https://yespstudio.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Yesp Corporation",
      founder: {
        "@type": "Person",
        name: "Srinithin Somasundaram",
      },
    },
    blogPost: featuredPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `https://yespstudio.com/blog/${post.slug}`,
      datePublished: post.date,
      author: {
        "@type": "Person",
        name: post.author,
      },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <div className="min-h-screen bg-white">
        <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Button asChild variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                <Link href="/" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Home
                </Link>
              </Button>
              <div className="h-5 w-px bg-gray-300" />
              <div className="flex items-center space-x-3">
                <div className="text-2xl font-normal text-gray-900">Yesp Studio</div>
                <div className="text-lg text-gray-600">Blog</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative max-w-sm">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10 h-10 bg-white border-gray-300 text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
           
            </div>
          </div>
        </header>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-normal text-gray-900 mb-6 leading-tight">
              Business Growth & AI Innovation Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Expert insights on SaaS automation, AI workflows, and business growth from Yesp Studio, Yesp Corporation,
              and founder Srinithin Somasundaram.
            </p>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredPosts.slice(0, 3).map((post, index) => (
                <Card
                  key={post.slug}
                  className={`border-0 shadow-none hover:shadow-sm transition-shadow duration-200 ${
                    index === 0 ? "lg:col-span-2" : ""
                  }`}
                >
                  <CardContent className="p-0">
                    <div
                      className={`${
                        index === 0 ? "aspect-[2/1]" : "aspect-video"
                      } bg-gray-100 flex items-center justify-center mb-6`}
                    >
                      <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                        <User className="w-8 h-8 text-gray-600" />
                      </div>
                    </div>
                    <div className={index === 0 ? "px-2" : "px-2"}>
                      <div className="flex items-center gap-3 mb-4">
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs font-medium">
                          {post.category}
                        </Badge>
                        <span className="text-sm text-gray-500">{post.date}</span>
                      </div>
                      <h3
                        className={`${
                          index === 0 ? "text-2xl" : "text-xl"
                        } font-normal text-gray-900 mb-4 leading-tight hover:text-blue-600 transition-colors`}
                      >
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                        >
                          Read article
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-normal text-gray-900 mb-2">
                {searchQuery ? `Search Results (${filteredPosts.length})` : "All Articles"}
              </h2>
              <p className="text-gray-600">
                {searchQuery
                  ? `Found ${filteredPosts.length} articles matching "${searchQuery}"`
                  : `Comprehensive collection of ${allPosts.length} articles across all categories`}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.slug} className="border-b border-gray-200 pb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs font-medium">
                      {post.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 mb-3 leading-tight hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                    <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Read article
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {searchQuery && filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No articles found matching "{searchQuery}"</p>
                <Button variant="outline" className="mt-4 bg-transparent" onClick={() => setSearchQuery("")}>
                  Clear Search
                </Button>
              </div>
            )}
          </div>
        </section>

       
      </div>
    </>
  )
}
