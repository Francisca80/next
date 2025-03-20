import { CollectionConfig } from 'payload'

export const Cases: CollectionConfig = {
  slug: 'cases',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'id',
      type: 'number',
      required: true,
      unique: true,
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
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'url',
      type: 'text',
      required: true,
    },
    {
      name: 'about',
      type: 'textarea',
      required: true,
    },
    {
      name: 'services',
      type: 'text',
      required: true,
    },
    {
      name: 'headingProject',
      type: 'text',
      required: true,
    },
    {
      name: 'descriptionProject',
      type: 'textarea',
      required: true,
    },
    {
      name: 'caseScreens',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'procesDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'procesImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'procesImageCaption',
      type: 'text',
      required: true,
    },
    {
      name: 'resultText',
      type: 'textarea',
      required: true,
    },
    {
      name: 'resultImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'resultImageCaption',
      type: 'text',
      required: true,
    },
    {
      name: 'resultImage2',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'resultImageCaption2',
      type: 'text',
      required: true,
    },
    {
      name: 'usedTechniques',
      type: 'text',
      required: true,
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
      admin: {
        position: 'sidebar',
      },
    },
  ],
  versions: {
    drafts: {
      autosave: true,
    },
  },
}