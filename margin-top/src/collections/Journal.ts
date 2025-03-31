import { CollectionConfig } from 'payload'

export const Journal: CollectionConfig = {
    slug: 'journal',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'slug', 'status', 'publishedDate'],
       
    },
    access: {
        read: () => true,

    },
    fields: [
        {
            name: 'id',
            type: 'number',
            required: false,
            unique: true,
        },
        {
            name: 'title',
            type: 'text',
            required: false,
        },
        {
            name: 'slug',
            type: 'text',
            required: false,
            unique: false,
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'featuredImage',
            type: 'upload',
            relationTo: 'media',
            required: false,
        },
        {
            name: 'excerpt',
            type: 'textarea',
            required: false,
        },
        {
            name: 'content',
            type: 'richText',
            required: false,
        },
        {
            name: 'author',
            type: 'text',
            required: false,
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
    timestamps:         false,       
}
