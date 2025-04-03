'use client';

import React from 'react';

interface LexicalNode {
  type: string;
  children?: LexicalNode[];
  text?: string;
  format?: number;
  tag?: string;
  listType?: 'number' | 'bullet';
  url?: string;
}

type LexicalContentProps = {
  content: any;
};

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

export default function LexicalContent({ content }: LexicalContentProps) {
  try {
    const parsedContent = typeof content === 'string' ? JSON.parse(content) : content;
    return (
      <div className="prose prose-lg max-w-none">
        {renderNode(parsedContent)}
      </div>
    );
  } catch (error) {
    console.error('Error parsing Lexical content:', error);
    return null;
  }
} 