import type { CollectionConfig } from 'payload'
export const Hero: CollectionConfig = {
    slug: 'hero',
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'tagline',
            type: 'text',       
        },
        {
            name: 'buttons',
            type: 'group',
            fields: [
                {
                    name: 'primary',
                    type: 'group',
                    fields: [
                        {
                            name: 'text',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'url',
                            type: 'text',
                            required: true,
                        }
                    ]
                },
                {
                    name: 'secondary',
                    type: 'group',
                    fields: [
                        {
                            name: 'text',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'url',
                            type: 'text',
                            required: true,
                        }
                    ]
                }
            ]
        },
        {
            name: 'images',
            type: 'array',
            fields: [
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                }
            ]
        }
    ]
}