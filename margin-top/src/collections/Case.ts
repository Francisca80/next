import { link } from "fs";
import { CollectionConfig } from "payload";

export const Case: CollectionConfig = {
  slug: 'case',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'order', 'status', 'updatedAt'],
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
      name: 'backgroundImage',
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
      admin: {
        description: 'URL-friendly version of the title (e.g., "jodaro-gym")',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (!value && data?.title) {
              return data.title.toLowerCase().replace(/\s+/g, '-');
            }
            return value;
          },
        ],
      },
    },
    {
      name: 'about',
      type: 'textarea',
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
      type: 'textarea',
    },
    {
      name: 'procesDescription',  
      type: 'textarea',
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
      type: 'textarea',
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
