'use client';

import { useMemo } from 'react';
import { $generateHtmlFromNodes } from '@lexical/html';
import { createEditor } from 'lexical';

type LexicalContentProps = {
  content: any;
};

export default function LexicalContent({ content }: LexicalContentProps) {
  const html = useMemo(() => {
    try {
      const editor = createEditor();
      editor.setEditorState(editor.parseEditorState(content));
      let htmlString = '';
      editor.update(() => {
        // Cast the editor to any to bypass the type checking issue
        htmlString = $generateHtmlFromNodes(editor as any);
      });
      return htmlString;
    } catch (error) {
      console.error('Error parsing Lexical content:', error);
      return '';
    }
  }, [content]);

  return (
    <div 
      className="prose prose-lg max-w-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
} 