import { CollectionConfig } from "payload";
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import {
  BlocksFeature,
  LinkFeature,
  HeadingFeature,
} from '@payloadcms/richtext-lexical';

export const Portfolio: CollectionConfig = {
  slug: 'portfolio',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title','order', 'status', 'publishedDate'],
    group: 'Content',
  },
  fields: [
    {
      name: 'order',
      type: 'number',
      admin: {
        description: 'Order in which this case should appear (lower numbers appear first)',
        position: 'sidebar',
      },
      defaultValue: 999,
    },  
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'introduction',
      type: 'textarea',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'url',
      type: 'text',
      admin: {
        description: 'External URL to the live project website',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
          description: 'The URL-friendly version of the title',
      },
  },
    {
      name: 'about',
      type: 'richText',
      required: true,
      admin: {
        description: 'The main content of the post',
      },
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          BlocksFeature({}),
          LinkFeature({}),
          HeadingFeature({}),
        ],
      }),
    },
    {
      name: 'services',
      type: 'array',
      fields: [
        {
          name: 'service',
          type: 'text',
        }
     
      ],
      required: false,
      admin: {
        description: 'List of services provided in this case',
      },
    },
    {
      name: 'headingProject',
      type: 'text',
    },
    {
      name: 'descriptionProject',
      type: 'richText',
      required: true,
      admin: {
        description: 'The main content of the post',
      },
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          BlocksFeature({}),
          LinkFeature({}),
          HeadingFeature({}),
        ],
      }),
    },
    {
      name: 'procesDescription',  
      type: 'richText',
      required: true,
      admin: {
        description: 'The main content of the post',
      },
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          BlocksFeature({}),
          LinkFeature({}),
          HeadingFeature({}),
        ],
      }),
    },
    {
      name: 'procesImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'figmalink',
      type: 'text',
      admin: {
          description: 'Optional external link for the design',
      },
  },

    {
      name: 'resultHeading',
      type: 'text',
    },
    {
      name: 'resultText',
      type: 'richText',
      required: true,
      admin: {
        description: 'The main content of the post',
      },
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          BlocksFeature({}),
          LinkFeature({}),
          HeadingFeature({}),
        ],
      }),
    },

    {
      name: 'resultImage',
      type: 'upload',
      relationTo: 'media',
    },  
   
    {
      name: 'resultImage2',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },          
    {
      name: 'status',
      type: 'select', 
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Published',
          value: 'published',
        }
      ],
      defaultValue: 'draft',
      required: true,
    },
    {
      name: 'updatedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
      hooks: {
        beforeChange: [
          () => new Date().toISOString(),
        ],
      },
    },  
    {
      name: 'createdAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
      hooks: {
        beforeChange: [
          ({ operation }) => {
            if (operation === 'create') {
              return new Date().toISOString();
            }
          },
        ],
      },
    },  
  ],
}
