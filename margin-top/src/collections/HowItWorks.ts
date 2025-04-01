import type { CollectionConfig } from 'payload'

export const HowItWorks: CollectionConfig = {
  slug: 'how-it-works',
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
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Beschrijving',
    },
    {
      name: 'icon',
      type: 'text',
      required: true,
      label: 'Icon (emoji)',
      admin: {
        description: 'Voer een emoji in als icon',
      },
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
        },
      ],
      defaultValue: 'draft',
      required: true,
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
} 