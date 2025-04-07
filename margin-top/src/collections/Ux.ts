import type { CollectionConfig } from 'payload'

export const Ux: CollectionConfig = {
    slug: 'ux',
    admin: {
        useAsTitle: 'title',
    },
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
            unique: true,
        },                      
        {
            name: 'description',
            type: 'textarea',
            required: true,
        },     
        {
            name: 'sections',
            type: 'array',
            required: true,
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
                        }
                    ]
                }
            ]
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: false,
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
            },
        },
    ],
    timestamps: true,
}