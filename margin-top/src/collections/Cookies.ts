import type { CollectionConfig } from 'payload'

export const Cookies: CollectionConfig = {
    slug: 'cookies',
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
            name: 'content',
            type: 'array',
            required: true,
            fields: [
                {
                    name: 'title',
                    type: 'text',
                },
            ],
        },              
    ],
}
