import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import config from '@/payload.config'
import type { Journal, Media } from '@/payload-types'
import { Metadata } from 'next'
import React from 'react'

// Lexical Node Types
interface LexicalNode {
  type: string;
  children?: LexicalNode[];
  text?: string;
  format?: number;
  tag?: string;
  listType?: 'number' | 'bullet';
  url?: string;
}

type Params = {
  params: Promise<{
    slug: string
  }>
}

// Generate metadata for SEO
export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const payload = await getPayload({ config });
  const post = await payload.find({
    collection: 'journal',
    where: {
      slug: {
        equals: params.slug,
      },
    },
  }).then(res => res.docs[0] as Journal);

  if (!post) return {
    title: 'Post Not Found | Margin Top',
    description: 'The requested journal post could not be found.',
  }

  return {
    title: `${post.title} | Margin Top Journal`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.featuredImage && typeof post.featuredImage === 'object' ? [
        {
          url: `${process.env.NEXT_PUBLIC_SERVER_URL}${post.featuredImage.url}`,
          width: post.featuredImage.width || 1200,
          height: post.featuredImage.height || 630,
          alt: post.title,
        }
      ] : [],
    },
  }
}

// Helper function to format dates with error handling
function formatDate(date: string) {
  try {
    return format(new Date(date), 'MMMM d, yyyy');
  } catch (error) {
    console.error('Error formatting date:', error);
    return date;
  }
}

// Helper function to render Lexical nodes recursively
function renderNode(node: LexicalNode): React.ReactNode {
  if (!node) return null;

  switch (node.type) {
    case 'root':
      return (
        <>{node.children?.map((child: LexicalNode, index: number) => (
          <React.Fragment key={index}>
            {renderNode(child)}
          </React.Fragment>
        ))}</>
      );

    case 'paragraph':
      return (
        <p className="mb-4">
          {node.children?.map((child: LexicalNode, index: number) => (
            <React.Fragment key={index}>
              {renderNode(child)}
            </React.Fragment>
          ))}
        </p>
      );

    case 'text':
      if (!node.text) return null;
      let content: React.ReactNode = node.text;
      const format = node.format || 0;
      if (format & 1) content = <strong>{content}</strong>;
      if (format & 2) content = <em>{content}</em>;
      if (format & 4) content = <u>{content}</u>;
      if (format & 8) content = <del>{content}</del>;
      if (format & 16) content = <code>{content}</code>;
      return content;

    case 'heading':
      switch (node.tag) {
        case '1': return <h1 className="mb-4">{node.children?.map((child: LexicalNode, index: number) => <React.Fragment key={index}>{renderNode(child)}</React.Fragment>)}</h1>;
        case '2': return <h2 className="mb-4">{node.children?.map((child: LexicalNode, index: number) => <React.Fragment key={index}>{renderNode(child)}</React.Fragment>)}</h2>;
        case '3': return <h3 className="mb-4">{node.children?.map((child: LexicalNode, index: number) => <React.Fragment key={index}>{renderNode(child)}</React.Fragment>)}</h3>;
        case '4': return <h4 className="mb-4">{node.children?.map((child: LexicalNode, index: number) => <React.Fragment key={index}>{renderNode(child)}</React.Fragment>)}</h4>;
        case '5': return <h5 className="mb-4">{node.children?.map((child: LexicalNode, index: number) => <React.Fragment key={index}>{renderNode(child)}</React.Fragment>)}</h5>;
        case '6': return <h6 className="mb-4">{node.children?.map((child: LexicalNode, index: number) => <React.Fragment key={index}>{renderNode(child)}</React.Fragment>)}</h6>;
        default: return null;
      }

    case 'list':
      const ListTag = node.listType === 'number' ? 'ol' : 'ul';
      return React.createElement(
        ListTag,
        { className: "mb-4" },
        node.children?.map((child: LexicalNode, index: number) => (
          <React.Fragment key={index}>
            {renderNode(child)}
          </React.Fragment>
        ))
      );

    case 'listitem':
      return (
        <li>
          {node.children?.map((child: LexicalNode, index: number) => (
            <React.Fragment key={index}>
              {renderNode(child)}
            </React.Fragment>
          ))}
        </li>
      );

    case 'quote':
      return (
        <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
          {node.children?.map((child: LexicalNode, index: number) => (
            <React.Fragment key={index}>
              {renderNode(child)}
            </React.Fragment>
          ))}
        </blockquote>
      );

    case 'link':
      return (
        <a href={node.url} className="text-blue-600 hover:underline">
          {node.children?.map((child: LexicalNode, index: number) => (
            <React.Fragment key={index}>
              {renderNode(child)}
            </React.Fragment>
          ))}
        </a>
      );

    default:
      return null;
  }
}

// Helper function to get image URL
function getImageUrl(image: Media | string | null): string {
  if (typeof image === 'string') return image;
  return image?.url ? `${process.env.NEXT_PUBLIC_SERVER_URL}${image.url}` : '';
}

export default async function JournalPost(props: Params) {
  const params = await props.params;
  const payload = await getPayload({ config });
  const post = await payload.find({
    collection: 'journal',
    where: {
      slug: {
        equals: params.slug,
      },
    },
    depth: 2,
  }).then(res => res.docs[0] as Journal);

  if (!post) {
    notFound();
  }

  const imageUrl = getImageUrl(post.featuredImage);

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-black">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={post.title}
            fill
            className="object-cover opacity-70"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center !text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {post.title}
            </h1>
            <div className="flex items-center justify-center space-x-4 text-sm md:text-base">
              <span>{formatDate(post.publishedDate)}</span>
              <span>•</span>
              <span>{post.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Excerpt */}
        <div className="mb-12">
          <p className="text-xl text-gray-600 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          {renderNode(post.content)}
        </div>

        {/* Categories */}
        {post.categories && post.categories.length > 0 && (
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Categories:</h3>
            <div className="flex flex-wrap gap-2">
              {post.categories.map((cat, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {typeof cat === 'string' ? cat : cat.category}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Back Link */}
        <div className="mt-12">
          <Link
            href="/journal"
            className="text-blue-600 hover:underline flex items-center gap-2"
          >
            <span>←</span> Back to Journal
          </Link>
        </div>
      </div>
    </article>
  );
} 