import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { BlocksFeature, LinkFeature, HeadingFeature } from '@payloadcms/richtext-lexical'

export const Development: CollectionConfig = {
  slug: 'development',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'order', 'status', 'updatedAt'],
  },
  fields: [
    {
      name: 'order',
      type: 'number',
      required: true,
      defaultValue: 0,
      admin: {
        description: 'Lagere nummers verschijnen eerst',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Titel',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'introduction',
      type: 'textarea',
      required: true,
    },
    {
      name: 'processTitle',
      type: 'text',
      required: true,
    },
    {
      name: 'processDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'processImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'approachTitle',
      type: 'text',
      required: true,
    },
    {
      name: 'approachDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'phases',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'phaseNumber',
          type: 'text',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'icon',
          type: 'text',
          required: false
        },
        {
          name: 'steps',
          type: 'array',
          fields: [
            {
              name: 'number',
              type: 'text',
              required: true,
            },
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            }
          ]
        }
      ]
    },
    {
      name: 'faqTitle',
      type: 'text',
      required: true,
    },
    {
      name: 'faqDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'faqs',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
        },
        {
          name: 'answer',
          type: 'textarea',
          required: true,
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      options: ['draft', 'published'],
      defaultValue: 'draft',
      required: true,
    },
    {
      name: 'createdAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
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
  ],
  timestamps: true,
}