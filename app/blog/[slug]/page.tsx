import type { Metadata } from "next"
import { blogPosts } from "@/lib/blog-data"
import BlogPostPageClient from "./BlogPostPageClient"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    return {
      title: "Blog Post Not Found - Yesp Studio",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    creator: "Yesp Corporation",
    publisher: "Yesp Studio",
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://yespstudio.com/blog/${params.slug}`,
      siteName: "Yesp Studio",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: `/images/blog/${params.slug}-og.jpg`,
          width: 1200,
          height: 628,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [`/images/blog/${params.slug}-twitter.jpg`],
    },
    alternates: {
      canonical: `https://yespstudio.com/blog/${params.slug}`,
    },
  }
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return <BlogPostPageClient params={params} />
}
