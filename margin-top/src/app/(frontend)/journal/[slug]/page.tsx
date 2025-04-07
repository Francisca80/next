import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import config from '@/payload.config'
import type { Journal, Media } from '@/payload-types'
import { Metadata } from 'next'
import React from 'react'
import LexicalContent from '@/components/LexicalContent'

// Lexical Node Types
interface LexicalNode {
  type: string;
  children?: LexicalNode[];
  text?: string;
  format?: number;
  tag?: string;
  listType?: 'number' | 'bullet';
  url?: string;
  alt?: string;
}

type Params = {
  params: {
    slug: string
  }
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

  const imageUrl = post.featuredImage && typeof post.featuredImage === 'object' ? post.featuredImage.url || '' : '';

  return {
    title: `${post.title} | Margin Top Journal`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: imageUrl ? [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
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

    case 'image':
      if (!node.url) return null;
      return (
        <div className="my-8 relative aspect-[16/9]">
          <Image
            src={node.url}
            alt={node.alt || ''}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      );

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
  if (!image) return '';
  return typeof image === 'string' ? image : image.url || '';
}

// Helper function to get image dimensions
function getImageDimensions(image: Media | string | null): { width: number; height: number } {
  if (typeof image === 'string') return { width: 1200, height: 630 };
  return {
    width: image?.width || 1200,
    height: image?.height || 630,
  };
}

// Helper function to get image alt text
function getImageAlt(image: Media | string | null, fallback: string): string {
  if (!image) return fallback;
  return typeof image === 'string' ? fallback : image.alt || fallback;
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
  
  // Safely handle content rendering
  const renderContent = () => {
    try {
      if (!post.content) return null;
      
      // If content is a string, try to parse it as JSON
      if (typeof post.content === 'string') {
        try {
          const parsedContent = JSON.parse(post.content);
          return renderNode(parsedContent);
        } catch (e) {
          console.error('Error parsing content:', e);
          return <div className="prose prose-lg max-w-none">{post.content}</div>;
        }
      }
      
      // If content is already an object, render it directly
      return renderNode(post.content);
    } catch (error) {
      console.error('Error rendering content:', error);
      return <div className="prose prose-lg max-w-none">Error rendering content</div>;
    }
  };

  return (
    <div className="bg-white">
      <section className="w-11/12 max-w-5xl mx-auto py-24">
        {/* Title and Introduction */}
        <div className="inline-block mb-16 mt-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">
            {post.title}
          </h1>
          <hr className="border-gray-600 mb-4 border-t-2" />
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mb-16 leading-relaxed">{post.excerpt}</p>

        {/* Hero Image */}
        <div className="relative w-full aspect-[16/9] mb-24">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={getImageAlt(post.featuredImage, post.title)}
              fill
              className="object-cover rounded-2xl shadow-xl"
              priority
              sizes="100vw"
              quality={90}
            />
          )}
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none prose-headings:font-normal prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-600 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline">
          <LexicalContent content={post.content} />
        </div>

        {/* Categories */}
        {post.categories && post.categories.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-3xl mb-6">Categories</h3>
            <div className="flex flex-wrap gap-3">
              {post.categories.map((category, index) => {
                const categoryName = typeof category === 'object' ? category.category : category;
                return (
                  <span
                    key={index}
                    className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
                  >
                    {categoryName}
                  </span>
                );
              })}
            </div>
          </div>
        )}

        {/* Back Link */}
        <div className="mt-12">
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-black font-medium hover:gap-3 transition-all duration-300 group"
          >
            <span className="text-lg">←</span>
            <span>Back to Journal</span>
          </Link>
        </div>
      </section>
    </div>
  );
} 