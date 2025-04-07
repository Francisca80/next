import type { CollectionConfig } from 'payload'

export const Ai: CollectionConfig = {
    slug: 'ai',
    admin: {
        useAsTitle: 'title',
    },
    access: {
        read: () => true,
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
            name: 'introduction',
            type: 'textarea',
            required: true,
        },
        {
            name: 'innovationTitle',
            type: 'text',
            required: true,
        },
        {
            name: 'innovationDescription',
            type: 'textarea',
            required: true,
        },
        {
            name: 'innovationFeatures',
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
            ],
        },
        {
            name: 'solutionsTitle',
            type: 'text',
            required: true,
        },
        {
            name: 'solutionsDescription',
            type: 'textarea',
            required: true,
        },
        {
            name: 'solutions',
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
            ],
        },
        {
            name: 'faqTitle',
            type: 'text',
            required: true,
        },
        {
            name: 'faqDescription',
            type: 'textarea',
            required: true,
        },
        {
            name: 'faqs',
            type: 'array',
            required: true,
            fields: [
                {
                    name: 'question',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'answer',
                    type: 'textarea',
                    required: true,
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


