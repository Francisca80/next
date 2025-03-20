import type { CollectionConfig } from 'payload'

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
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
      },
      {
        name: 'hero',
        width: 1920,
        height: 1080,
        position: 'centre',
      },
      {
        name: 'medium',
        width: 300,
      },
      {
        name: 'large',
        width: 1000,
      },
    ],
    adminThumbnail: 'thumbnail',
    staticDir: '../public/media',
    mimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/svg+xml'],
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
}
