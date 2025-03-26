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
            name: 'status',
            type: 'select',
            options: ['draft', 'published'],
            required: true,
        },  
        {
            name: 'createdAt',
            type: 'date',
            required: true,
        },  
    ]
}
