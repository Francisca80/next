import type { CollectionConfig } from 'payload'

export const Hosting: CollectionConfig = {
    slug: 'hosting',
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
                    required: false,
                    fields: [
                        {
                            name: 'feature',
                            type: 'text',
                            required: false,
                        }
                    ]
                },
                {
                    name: 'link',
                    type: 'group',
                    fields: [
                        {
                            name: 'text',
                            type: 'text',
                            required: false,
                        },
                        {
                            name: 'url',
                            type: 'text',
                            required: false,
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
            name: 'title2',
            type: 'text',
            required: false,
        },
        {
            name: 'costsExplanation',
            type: 'textarea',
            required: false,
            label: 'Costs Explanation',
            admin: {
                description: 'Explain the different cost options and pricing structure',
            },
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
