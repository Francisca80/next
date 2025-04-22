import type { CollectionConfig } from 'payload';
import path from 'path';

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'alt',
    group: 'Content',
    enableRichTextRelationship: true,
  },
  upload: {
    disableLocalStorage: false,
  
   
    staticDir: path.join(process.cwd(), 'public', 'media'),
    mimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/svg+xml', 'image/webp'],
    formatOptions: {
      format: 'webp',
    },
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      label: 'Alt Text',
    },
    {
      name: 'caption',
      type: 'text',
      label: 'Caption',
    },
  ],
};
