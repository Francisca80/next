import type { CollectionConfig } from 'payload'
export const Service: CollectionConfig = {
    slug: 'service',
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
                description: 'Lower numbers will appear first',
            },
        },
        {
            name: 'slug',
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
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
            admin: {
                description: 'Main image for the service',
            },
        },
        {
            name: 'link',
            type: 'text',
            admin: {
                description: 'Optional external link for the service',
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