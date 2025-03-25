import { CollectionConfig } from "payload";

export const About: CollectionConfig = {
    slug: 'about',
    fields: [
        {
            name: 'title',
            type: 'text',
        },
            {
            name: 'content',
            type: 'richText',
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'link',
            type: 'text',
            required:   false,
        },
    ],
};
