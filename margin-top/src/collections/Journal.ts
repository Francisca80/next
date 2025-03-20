import { CollectionConfig } from 'payload'

export const Journal: CollectionConfig = {
    slug: 'journal',
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
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'featuredImage',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'excerpt',
            type: 'textarea',
            required: true,
        },
        {
            name: 'content',
            type: 'richText',
            required: true,
        },
        {
            name: 'author',
            type: 'text',
            required: true,
        },
        {
            name: 'publishedDate',
            type: 'date',
            required: true,
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'categories',
            type: 'array',
            fields: [
                {
                    name: 'category',
                    type: 'text',
                },
            ],
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
    timestamps: true,
}
