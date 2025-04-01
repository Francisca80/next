import { CollectionConfig } from 'payload'

export const Journal: CollectionConfig = {
    slug: 'journal',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'slug', 'status', 'publishedDate'],
        group: 'Content',
        description: 'Blog posts and articles',
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
            required: true,
            admin: {
                description: 'The title of the journal post',
            },
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
            admin: {
                description: 'The URL-friendly version of the title',
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
            required: true,
            admin: {
                description: 'A brief summary of the post',
            },
        },
        {
            name: 'content',
            type: 'richText',
            required: true,
            admin: {
                description: 'The main content of the post',
            },
        },
        {
            name: 'author',
            type: 'relationship',
            relationTo: 'users',
            required: true,
            admin: {
                description: 'The author of the journal post',
            },
        },
        {
            name: 'publishedDate',
            type: 'date',
            required: true,
            admin: {
                description: 'When the post should be published',
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
            required: true,
            defaultValue: 'draft',
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
            admin: {
                description: 'The current status of the post',
            },
        },
    ],
    timestamps: false,
}
