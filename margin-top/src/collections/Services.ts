import type { CollectionConfig } from 'payload'
export const Services: CollectionConfig = {
    slug: 'services',
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
            type: 'text',       
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'link',
            type: 'text',
        },
    ]
}