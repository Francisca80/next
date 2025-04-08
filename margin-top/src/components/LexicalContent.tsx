'use client';

import React from 'react';
import Image from 'next/image';

interface LexicalNode {
  type: string;
  children?: LexicalNode[];
  text?: string;
  format?: number;
  tag?: string;
  listType?: 'number' | 'bullet';
  url?: string;
  direction?: string;
  indent?: number;
  version?: number;
  alt?: string;
  width?: number;
  height?: number;
  relationTo?: string;
  value?: {
    url?: string;
    alt?: string;
    width?: number;
    height?: number;
    [key: string]: any;
  };
  // Additional properties that might be present in Payload CMS rich text
  fields?: {
    url?: string;
    alt?: string;
    width?: number;
    height?: number;
    [key: string]: any;
  };
  // For direct media references
  media?: {
    url?: string;
    alt?: string;
    width?: number;
    height?: number;
    [key: string]: any;
  };
  // For Payload CMS specific format
  data?: {
    url?: string;
    alt?: string;
    width?: number;
    height?: number;
    [key: string]: any;
  };
  // For Payload CMS upload node type
  id?: string;
  // For Payload CMS rich text field
  formatType?: string;
  textFormat?: string;
  // For Payload CMS heading format
  headingType?: string;
  // For Payload CMS list format
  listFormat?: string;
  // For Payload CMS heading format
  heading?: string;
  // For Payload CMS heading format
  level?: string | number;
}

type LexicalContentProps = {
  content: any;
};

// Helper function to render Lexical nodes recursively
function renderNode(node: LexicalNode): React.ReactNode {
  if (!node) return null;

  // Debug log for node type
  console.log('Rendering node type:', node.type, node);

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
        <p className="mb-4 text-gray-700">
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
      if (format & 1) content = <strong className="font-bold">{content}</strong>;
      if (format & 2) content = <em className="italic">{content}</em>;
      if (format & 4) content = <u className="underline">{content}</u>;
      if (format & 8) content = <del className="line-through">{content}</del>;
      if (format & 16) content = <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{content}</code>;
      return content;

    case 'image':
      // Try to extract image URL and alt text from various possible structures
      let imageUrl: string | undefined;
      let imageAlt: string = '';
      
      // Case 1: Payload CMS media relation format
      if (node.relationTo === 'media' && node.value) {
        imageUrl = node.value.url;
        imageAlt = node.value.alt || '';
      } 
      // Case 2: Direct media reference
      else if (node.media && node.media.url) {
        imageUrl = node.media.url;
        imageAlt = node.media.alt || '';
      }
      // Case 3: Fields format
      else if (node.fields && node.fields.url) {
        imageUrl = node.fields.url;
        imageAlt = node.fields.alt || '';
      }
      // Case 4: Data format (Payload CMS specific)
      else if (node.data && node.data.url) {
        imageUrl = node.data.url;
        imageAlt = node.data.alt || '';
      }
      // Case 5: Standard Lexical format
      else if (node.url) {
        imageUrl = node.url;
        imageAlt = node.alt || '';
      }
      
      // If we couldn't find an image URL, return null
      if (!imageUrl) {
        return null;
      }
      
      // Ensure the URL is absolute
      const fullImageUrl = imageUrl.startsWith('http') ? imageUrl : imageUrl;
      
      return (
        <div className="my-8 relative aspect-[4/3] max-w-2xl mx-auto">
          <Image
            src={fullImageUrl}
            alt={imageAlt}
            fill
            className="object-contain rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      );

    case 'upload':
      // Handle Payload CMS upload node type
      let uploadImageUrl: string | undefined;
      let uploadImageAlt: string = '';
      
      if (node.relationTo === 'media' && node.value) {
        uploadImageUrl = node.value.url;
        uploadImageAlt = node.value.alt || '';
      }
      
      if (!uploadImageUrl) {
        return null;
      }
      
      // Ensure the URL is absolute
      const fullUploadImageUrl = uploadImageUrl.startsWith('http') ? uploadImageUrl : uploadImageUrl;
      
      return (
        <div className="my-8 relative aspect-[4/3] max-w-2xl mx-auto">
          <Image
            src={fullUploadImageUrl}
            alt={uploadImageAlt}
            fill
            className="object-contain rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      );

    case 'heading':
      // Extract heading content
      const headingContent = node.children?.map((child: LexicalNode, index: number) => (
        <React.Fragment key={index}>
          {renderNode(child)}
        </React.Fragment>
      ));
      
      // Determine heading level from various possible properties
      let level = '2'; // Default to h2
      
      if (node.tag) {
        level = node.tag;
      } else if (node.headingType) {
        level = node.headingType;
      } else if (node.level) {
        level = String(node.level);
      } else if (node.heading) {
        level = node.heading;
      }
      
      // Render the appropriate heading based on level
      switch (level) {
        case '1': return <h1 className="text-3xl font-bold mb-6 mt-8 text-black">{headingContent}</h1>;
        case '2': return <h2 className="text-2xl font-bold mb-4 mt-6 text-black">{headingContent}</h2>;
        case '3': return <h3 className="text-xl font-bold mb-3 mt-5 text-gray-800">{headingContent}</h3>;
        case '4': return <h4 className="text-lg font-bold mb-3 mt-4 text-gray-800">{headingContent}</h4>;
        case '5': return <h5 className="text-base font-bold mb-2 mt-3 text-gray-800">{headingContent}</h5>;
        case '6': return <h6 className="text-sm font-bold mb-2 mt-3 text-gray-800">{headingContent}</h6>;
        default: return <h2 className="text-2xl font-bold mb-4 mt-6 text-black">{headingContent}</h2>;
      }

    case 'list':
      // Check if this is a Payload CMS list format
      const listType = node.listType || (node.listFormat === 'bullet' ? 'bullet' : 'number');
      const ListTag = listType === 'number' ? 'ol' : 'ul';
      return React.createElement(
        ListTag,
        { className: "mb-4 ml-6 list-disc" },
        node.children?.map((child: LexicalNode, index: number) => (
          <React.Fragment key={index}>
            {renderNode(child)}
          </React.Fragment>
        ))
      );

    case 'listitem':
      return (
        <li className="mb-2 list-item">
          {node.children?.map((child: LexicalNode, index: number) => (
            <React.Fragment key={index}>
              {renderNode(child)}
            </React.Fragment>
          ))}
        </li>
      );

    case 'quote':
      return (
        <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4 text-gray-600">
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
      // Try to handle unknown node types by rendering their children
      if (node.children && node.children.length > 0) {
        return (
          <div className="mb-4">
            {node.children.map((child: LexicalNode, index: number) => (
              <React.Fragment key={index}>
                {renderNode(child)}
              </React.Fragment>
            ))}
          </div>
        );
      }
      return null;
  }
}

export default function LexicalContent({ content }: LexicalContentProps) {
  if (!content) return null;
  
  // If content is a string, try to parse it as JSON
  let parsedContent;
  try {
    parsedContent = typeof content === 'string' ? JSON.parse(content) : content;
    console.log('Parsed content:', parsedContent);
  } catch (error) {
    console.error('Error parsing content:', error);
    return <div>Error rendering content</div>;
  }
  
  // Handle the case where content is an object with a root property
  if (parsedContent.root) {
    return (
      <div className="prose prose-lg max-w-none">
        {renderNode(parsedContent.root)}
      </div>
    );
  }
  
  // If content is a direct node, wrap it in a root
  return (
    <div className="prose prose-lg max-w-none">
      {renderNode({ type: 'root', children: [parsedContent] })}
    </div>
  );
} 