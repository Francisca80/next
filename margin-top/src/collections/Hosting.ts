import type { CollectionConfig } from 'payload'
export const Hosting: CollectionConfig = {
    slug: 'hosting',
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'slug',
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
            name: 'sections',
            type: 'array',
            fields: [
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
                    name: 'features',
                    type: 'array',
                    fields: [
                        {
                            name: 'feature',
                            type: 'text',
                            required: true,
                        },
                    ],
                },
            ],
        },
        {
            name: 'status',
            type: 'select',
            options: ['draft', 'published'],
            required: true,
            defaultValue: 'draft',
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
            },
        },
    ],
    timestamps: true,
}
